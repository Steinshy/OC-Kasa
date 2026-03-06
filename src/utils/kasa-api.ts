import { ensureArray, ensureNumber, ensureString } from '@/helpers/validator';
import type { NormalizedRental, Rental } from '@/types/rental';
import { basename } from '@/utils/config';

const dataUrl = `${basename === '/' ? '' : basename}/data/logements.json`;

let cachedRentals: NormalizedRental[] | null = null;

export const buildRental = (rental: Rental): NormalizedRental => {
  const { pictures, cover, rating, title, location, tags, description, host } =
    rental;

  const cleanId = ensureString(rental.id);

  // String fields
  const cleanTitle = ensureString(title);
  const cleanLocation = ensureString(location);
  const cleanDescription = ensureString(description);

  // Array fields
  const images = pictures?.length ? pictures : [ensureString(cover)];
  const totalImages = images.length;
  const locationTags = ensureArray(tags);

  // Host
  const cleanHost = {
    name: ensureString(host?.name),
    picture: ensureString(host?.picture),
  };

  // Number fields
  const ratingValue = ensureNumber(rating ?? '0', 0, 5);
  const locationRatingMax = 5;

  return {
    ...rental,
    id: cleanId,
    title: cleanTitle,
    location: cleanLocation,
    description: cleanDescription,
    host: cleanHost,
    images,
    totalImages,
    locationTags,
    ratingValue,
    locationRatingMax,
  } as NormalizedRental;
};

export const fetchRentals = async (): Promise<NormalizedRental[]> => {
  if (cachedRentals) return cachedRentals;

  const response = await fetch(dataUrl);
  if (!response.ok)
    throw new Error(`Failed to fetch rentals: ${response.statusText}`);

  const data: unknown = await response.json();
  if (!Array.isArray(data))
    throw new Error('Invalid data format: expected an array');

  const rentals = (data as Rental[]).map((raw) => buildRental(raw));
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
