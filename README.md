# Playwright Project

This is a basic Playwright project setup for end-to-end testing of web applications.

## Prerequisites

- Node.js (version 12 or later)
- npm (Node package manager)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd playwright-project
   ```

2. Install the dependencies:
   ```
   npm install
   ```

## Running Tests

To run the tests, use the following command:
```
npx playwright test
```

## Configuration

The Playwright configuration can be found in `playwright.config.ts`. You can customize the test directory, timeout values, and browser options as needed.

## Writing Tests

Tests are located in the `tests` directory. You can create new test files following the structure of `example.spec.ts`.

### Fixtures

Fixtures are used to store predefined test data and reusable test setup logic. In this project, a custom fixture is defined in the `fixtures.ts` file. For example, the `flightData` fixture provides predefined data for booking flights, such as departure, destination, date, and the number of passengers. This fixture is imported and used in test files to ensure consistency and reusability across tests.

## License

This project is licensed under the MIT License.


