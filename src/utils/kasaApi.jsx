import { basename } from './config.jsx';

const dataUrl = `${basename === '/' ? '' : basename}/data/logements.json`;

const fetchRentals = async () => {
  const response = await fetch(dataUrl);
  if (!response.ok)
    throw new Error(`Failed to fetch rentals: ${response.statusText}`);

  const data = await response.json();
  if (!Array.isArray(data))
    throw new Error('Invalid data format: expected an array');

  const rentalsData = data;
  return rentalsData;
};

const fetchRentalById = async (id) => {
  const rentals = await fetchRentals();
  const rental = rentals.find((rental) => rental.id === id);

  if (!rental) throw new Error(`Rental with id ${id} not found`);
  return rental;
};

export { fetchRentals, fetchRentalById };
