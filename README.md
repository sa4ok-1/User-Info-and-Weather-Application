# User Info and Weather Application

This web application fetches random user data from the [Random User Generator API](https://randomuser.me/api/), displays the weather for the user's location, and allows users to save their information to the browser's localStorage.

## Features

1. **User Information View**

   - Displays a card view with random user details:
     - Name
     - Gender
     - Profile image
     - Location
     - Email

2. **Weather Details**

   - Displays the current weather for the user's location:
     - Weather icon (e.g., Sunny, Cloudy)
     - Temperature (Current, Lowest, Highest)

3. **Save and Weather Buttons**

   - **Save button**: Saves user details to the browser's `localStorage`.
   - **Weather button**: Opens a modal showing weather details for the user’s location.

4. **Load More Users**

   - Fetch additional users when scrolling or pressing the 'Load More' button.

5. **Saved Users**
   - A second route displays the list of saved users with similar card styling as the first route but without the Save button.

## API Endpoints

### User Data API

Fetch random user data from the [Random User API](https://randomuser.me/api/).

### Weather API

Fetch current weather data based on user’s location from [Open Meteo](https://open-meteo.com/).

- API Endpoint: `https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&current_weather=true&hourly=temperature_2m`
- Example: `https://api.open-meteo.com/v1/forecast?latitude=-19.7962&longitude=178.2180&current_weather=true&hourly=temperature_2m`

For more information on the weather API, refer to the [documentation](https://open-meteo.com/en/docs).

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/sa4ok-1/User-Info-and-Weather-Application.git
cd weather-app
npm install
npm i
```
