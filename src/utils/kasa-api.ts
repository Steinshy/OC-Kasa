import {
  ensureArray,
  ensureNumber,
  ensureString,
  isRecord,
  isHost,
} from '@/helpers/validator';
import type { NormalizedRental } from '@/types/rental';
import { basename } from '@/utils/config';

const dataUrl = `${basename === '/' ? '' : basename}/data/logements.json`;

let cachedRentals: NormalizedRental[] | null = null;

// Constants for retry logic
const DEFAULT_MAX_ATTEMPTS = 3;
const RETRY_BASE_DELAY_MS = 1000;
const RETRY_JITTER_FACTOR = 0.1;

export const withRetry = async (
  fn: () => Promise<Response>,
  maxAttempts = DEFAULT_MAX_ATTEMPTS
): Promise<Response> => {
  if (maxAttempts < 1) {
    throw new Error('maxAttempts must be at least 1');
  }

  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;

      if (attempt < maxAttempts) {
        const baseDelay = (1 << (attempt - 1)) * RETRY_BASE_DELAY_MS;
        const jitter = Math.random() * baseDelay * RETRY_JITTER_FACTOR;
        const totalDelay = baseDelay + jitter;

        await new Promise((resolve) => setTimeout(resolve, totalDelay));
      }
    }
  }

  throw lastError || new Error('Request failed');
};

export const handleFetchError = (
  context: string,
  statusText?: string
): Error => {
  if (!statusText) {
    return new Error(`Failed to ${context}: Network connection error`);
  }
  return new Error(`Failed to ${context}: ${statusText}`);
};

export const buildRental = (rental: unknown): NormalizedRental => {
  if (!isRecord(rental)) {
    throw new Error('Invalid rental data: expected an object');
  }

  const rentalData = rental;
  const hostRaw = isHost(rentalData.host) ? rentalData.host : {};

  const cleanId = ensureString(rentalData.id);
  const cleanTitle = ensureString(rentalData.title);
  const cleanLocation = ensureString(rentalData.location);
  const cleanDescription = ensureString(rentalData.description);
  const cleanCover = ensureString(rentalData.cover);

  const pictures = Array.isArray(rentalData.pictures)
    ? (rentalData.pictures as string[])
    : [];
  const images = pictures.length ? pictures : [cleanCover];
  const totalImages = images.length;
  const locationTags = ensureArray(rentalData.tags);

  const cleanHost = {
    name: ensureString(hostRaw.name),
    picture: ensureString(hostRaw.picture),
  };

  const ratingValue = ensureNumber(rentalData.rating ?? '0', 0, 5);
  const locationRatingMax = 5;

  return {
    id: cleanId,
    title: cleanTitle,
    cover: cleanCover,
    location: cleanLocation,
    description: cleanDescription,
    host: cleanHost,
    images,
    totalImages,
    locationTags,
    ratingValue,
    locationRatingMax,
    pictures: pictures.length ? pictures : undefined,
    equipments: Array.isArray(rentalData.equipments)
      ? (rentalData.equipments as string[])
      : undefined,
    rating: ensureString(rentalData.rating) || undefined,
  };
};

export const fetchRentals = async (): Promise<NormalizedRental[]> => {
  if (cachedRentals) return cachedRentals;

  const response = await withRetry(() => fetch(dataUrl));

  if (!response.ok) {
    throw handleFetchError('fetch rentals', response.statusText);
  }

  let data: unknown;
  try {
    data = await response.json();
  } catch (_error) {
    throw handleFetchError('parse rental data', 'Invalid JSON response');
  }

  if (!Array.isArray(data)) {
    throw new Error('Invalid data format: expected an array');
  }

  const rentals = data.map((raw: unknown) => buildRental(raw));
  cachedRentals = rentals;

  return rentals;
};

export const fetchRentalById = async (
  id: string
): Promise<NormalizedRental> => {
  const rentals = await fetchRentals();
  const rental = rentals.find((item) => item.id === id);

  if (!rental) throw new Error(`Rental with id ${id} not found`);
  return rental;
};

export const optimizeImageUrl = (url: string, width: number): string => {
  // Append query params for width and quality optimization
  return `${url}?w=${width}&q=90`;
};
