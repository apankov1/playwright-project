import { test as base } from '@playwright/test';

// Extend the base test object with a custom fixture for flight booking data
export const test = base.extend<{
  flightData: { departure: string; destination: string; date: string; passengers: number };
}>({
  flightData: async ({ }, use) => {
    await use({
      departure: 'New York',
      destination: 'Los Angeles',
      date: '2023-12-25',
      passengers: 1,
    });
  },
});

export { expect } from '@playwright/test';