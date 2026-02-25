/**
 * Validator helpers for data sanitization and type coercion
 */

/**
 * Ensures a value is a non-empty string, returns default if not
 */
export const ensureString = (value: unknown, defaultValue = ''): string =>
  typeof value === 'string' ? value.trim() : defaultValue;

/**
 * Ensures a value is an array, returns default if not
 */
export const ensureArray = <T,>(value: unknown, defaultValue: T[] = []): T[] =>
  Array.isArray(value) ? value : defaultValue;

/**
 * Ensures a value is a number within a given range
 */
export const ensureNumber = (
  value: unknown,
  min = 0,
  max = 100,
  defaultValue = 0,
): number => {
  const num = Number(value);
  const rounded = Math.round(num) || defaultValue;
  return Math.min(max, Math.max(min, rounded));
};
