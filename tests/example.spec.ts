import { expect, test } from '@playwright/test';

// Define a custom fixture for flight booking data
test.use({
    flightData: {
        departure: 'New York',
        destination: 'Moscow',
        date: '2023-12-25',
        passengers: 1,
    },
});

test.describe('Basic Test Suite', () => {
    test('should load the homepage', async ({ page }) => {
        await page.goto('https://example.com');
        const title = await page.title();
        expect(title).toBe('Example Domain');
    });

    test('should have a specific element', async ({ page }) => {
        await page.goto('https://example.com');
        const element = await page.locator('h1');
        await expect(element).toHaveText('Example Domain');
    });

    test('should book a flight', async ({ page, flightData }) => {
        await page.goto('https://example.com/flight-booking');

        // Fill in flight booking form
        await page.fill('#departure', flightData.departure);
        await page.fill('#destination', flightData.destination);
        await page.fill('#date', flightData.date);
        await page.fill('#passengers', flightData.passengers.toString());

        // Submit the form
        await page.click('#submit-booking');

        // Verify booking confirmation
        const confirmationMessage = await page.locator('#confirmation-message');
        await expect(confirmationMessage).toHaveText('Your flight has been booked!');
    });
});