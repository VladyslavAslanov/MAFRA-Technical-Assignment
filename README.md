# Team and Player Management App

This **React Native application** facilitates the management of sports teams and players, allowing users to assign
players to teams, capture player photos directly using a smartphone camera, and view or export team and player data in
JSON format. The app is built with robust features to manage teams and players efficiently.

## Features

- **Manage Teams and Players**: Add, delete, and view teams and players with ease.
- **Assign Players to Teams**: Assign any number of players to a specific team, ensuring that each player can belong to
  one team at a time.
- **Photo Capture**: Utilize the device's camera to take and assign photos to players, enhancing their profiles.
- **Data Visualization and Export**: Display team details in modals, including player lists and photos, and export all
  data as JSON for external use.
- **Dynamic UI Updates**: Interface updates reflect the latest data changes, offering a seamless user experience.

## Installation

To get started with this app, clone the repository and install the dependencies:

```bash
git clone https://github.com/VladyslavAslanov/team-management-app.git
cd team-management-app
npm install
```

Running the App
---------------

Ensure you have the Expo CLI installed; if not, you can install it via npm:

`npm install -g expo-cli`

Start the application with the following command:

`expo start`

This will open a web page where you can choose to run the app in an iOS, Android simulator, or a web browser.

Or you can use the following commands:

Start project from a root folder with the following command:

`npm start`

And run iOS simulator by pressing `i` button.

Usage and functionality
-----

### Adding Teams and Players

- **Add a Team**: Enter a team name in the input field and click "Add Team". Teams are color-coded for easy recognition.
- **Add a Player**: Enter a player name in the input field and click "Add Player". User can assign them to a team later
  or
  immediately after creation.

### Managing Teams and Players

- **Assign/Unassign Players**: Use the "Assign" button next to unassigned players to link them with a team, or "Unassign" to remove them from their current team.
- **Delete Teams or Players**: Click the "X" button next to a team or player to remove them from the system.

### Viewing Team Details

- Click on a team to open a modal displaying all associated players and their photos, if available.

### Capturing Player Photos

- Click the camera icon next to a player to open the camera interface. Take a photo and it will be automatically
  assigned to the player's profile.

### Export Data

- Click the "Save" button to generate a JSON modal showing all current teams and players data in structured format.

Technical Details
-----------------

- **Team colors**: Colors for teams are generated randomly via helper function.
- **Data Persistence**: Teams and player data are temporarily stored in the app state and can be exported as JSON.
