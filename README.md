<h1 align="center">Welcome to OpenLook 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> # Multi-Service Streaming Search App

This Angular application enables users to simultaneously search multiple streaming services for movies and shows using a single keyword. By integrating with streaming service APIs, users can input their owned streaming services and explore content across those platforms seamlessly.

## Features

- **Multi-Service Search**: Search for movies and shows across various streaming platforms simultaneously.
- **Service Filtering**: Select specific streaming services to include in your search.
- **Country Selection**: Choose your country to tailor search results based on regional availability.
- **Pagination**: Navigate through search results with options to load more or go back to previous results.

## Getting Started

To set up the project locally and start exploring the functionalities:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `ng serve` to start the development server.
5. Open your browser and navigate to `http://localhost:4200/` to view the app.

## Usage

1. **Select Streaming Services**: Choose the streaming services you have subscriptions to by toggling the checkboxes in the Service Selection section.
2. **Choose Country**: Select your country from the dropdown list to ensure accurate regional availability.
3. **Enter Search Query**: Input your desired keyword in the search bar.
4. **View Results**: Browse through the search results displayed in the Results section.
5. **Navigate Pages**: If available, use the pagination buttons to load more results or go back to previous ones.

## Components

### 1. `ApiFetchComponent`

- Responsible for fetching genres and countries data.
- Handles the logic for populating dropdowns and managing selected options.

### 2. `ResultsComponent`

- Displays search results fetched from the streaming service APIs.
- Updates dynamically based on changes in input properties (movies and shows).

### 3. `SearchComponent`

- Performs search operations based on user input.
- Implements pagination for fetching additional results.

### 4. `ServiceCheckboxesComponent`

- Provides checkboxes for selecting streaming services.
- Updates selected service IDs based on user interactions.

## API Integration

This application connects to streaming service APIs to retrieve data about available movies and shows. The endpoints used for fetching genres, countries, and search results are integrated into the application logic.

## Note

- The current version includes mock data for genres and countries to facilitate development and testing. Actual API calls are commented out in favor of using mock data.
- To fully utilize the app, consider integrating real API endpoints by uncommenting the relevant code sections and providing valid API keys.

## License

This project is licensed under the [License Name] License - see the [LICENSE.md](LICENSE.md) file for details.
### ✨ [Demo](https://www.benmaizes.com/OpenLook)

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Author

👤 **Benjamin Maizes, Benjamin Goldfried, Ian Stebbins**

<!-- * Website: benmaizes.com
* Github: [@bmaizes](https://github.com/bmaizes) 
* LinkedIn: [@Benjamin-Maizes](https://linkedin.com/in/Benjamin-Maizes) -->

## Show your support

Give a ⭐️ if this project helped you!

