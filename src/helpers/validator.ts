import type { Host } from '@/types/rental';

/** Type guard: checks if value is a plain object with string keys */
export const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

/** Type guard: checks if value conforms to Host interface */
export const isHost = (value: unknown): value is Host =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

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
