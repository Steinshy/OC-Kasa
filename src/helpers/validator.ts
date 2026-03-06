export const ensureString = (value: unknown, defaultValue = ''): string =>
  typeof value === 'string' ? value.trim() : defaultValue;

export const ensureArray = (value: unknown, defaultValue = []): string[] =>
  Array.isArray(value) ? value : defaultValue;

export const ensureNumber = (
  value: unknown,
  min = 0,
  max = 100,
  defaultValue = 0
): number => {
  const num = Number(value);
  const rounded = Math.round(num) || defaultValue;
  return Math.min(max, Math.max(min, rounded));
};
