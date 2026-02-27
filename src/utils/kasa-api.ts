
import { basename } from './config';

import { ensureString, ensureArray, ensureNumber } from '@/helpers/validator';
import type { Rental } from '@/types/rental';

const dataUrl = `${basename === '/' ? '' : basename}/data/logements.json`;

const fetchRentals = async (): Promise<Rental[]> => {
  const response = await fetch(dataUrl);
  if (!response.ok)
    throw new Error(`Failed to fetch rentals: ${response.statusText}`);

  const data: unknown = await response.json();
  if (!Array.isArray(data))
    throw new Error('Invalid data format: expected an array');

  return data as Rental[];
};

const fetchRentalById = async (id: string): Promise<Rental> => {
  const rentals = await fetchRentals();
  const rental = rentals.find((rental) => rental.id === id);

  if (!rental) throw new Error(`Rental with id ${id} not found`);
  return rental;
};

export { fetchRentals, fetchRentalById };

export const buildRental = (rental: Rental) => {
  const { pictures, cover, rating, title, location, tags, description, host } = rental;

  // String fields
  const cleanTitle = ensureString(title);
  const cleanLocation = ensureString(location);
  const cleanDescription = ensureString(description);
  
  // Array fields
  const images = pictures?.length ? pictures : [ensureString(cover)];
  const totalImages = images.length;
  const locationTags = ensureArray(tags);
  
  // Host
  const cleanHost = { name: ensureString(host?.name), picture: ensureString(host?.picture) };

  // Number fields
  const ratingValue = ensureNumber(rating ?? '0', 0, 5);
  const locationRatingMax = 5;

  return {
    ...rental,
    title: cleanTitle,
    location: cleanLocation,
    description: cleanDescription,
    host: cleanHost,
    images,
    totalImages,
    locationTags,
    ratingValue,
    locationRatingMax,
  };
};
