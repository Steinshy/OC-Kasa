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

  const response = await fetch(dataUrl);
  if (!response.ok)
    throw new Error(`Failed to fetch rentals: ${response.statusText}`);

  const data: unknown = await response.json();
  if (!Array.isArray(data))
    throw new Error('Invalid data format: expected an array');

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
