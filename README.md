# User Profile Project

## Overview
This project is a basic user profile management system built with React and Express. The frontend allows users to view and edit their profile information, including their username, email, and phone number. The backend is powered by Express and uses SQLite for data persistence.

## Features
- Profile View: Displays user profile information.
- Profile Edit: Allows users to edit and update their profile details.
- Input Validation: Ensures that the input meets specific criteria (e.g., valid email, phone number formats).
- Unit Testing: Comprehensive unit tests for both frontend and backend using Jest and Supertest.

## Tech Stack

- Frontend: React, TypeScript, Formik, Yup
- Backend: Express, TypeScript, SQLite3
- Testing: Jest, React Testing Library, Supertest

## Prerequisites
- Node.js (version 18.x or higher)
- pnpm or npm or Yarn
- SQLite3

## Getting Started

1. Clone the Repository

```shell
git clone https://github.com/appzk/blocklet-user.git
```

2. Navigate to the project directory

```shell
cd blocklet-user
```

3. Install dependencies

```shell
pnpm install
# or npm install
# or yarn install
```

4. Start the development server

```shell
pnpm dev
# or npm run dev
# or yarn dev
```

5. Open your browser and navigate to `http://localhost:8091` to view the application.

or 

```
ℹ You can access with the following URL

- https://bbqaq5po4e767tmc3chm5iq3qlapmmaq6lgowvbtsru.did.abtnet.io

ℹ Note that your blocklet is running in development in Blocklet Server, and the URL is a temporary URL.
```


## Project Structure

```
.
├── LICENSE                    # License file for the project
├── README.md                  # Main project documentation in English.
├── README.zh.md               # Project documentation in Chinese, similar to README.md but in Chinese.
├── api                        # Backend code directory, developed using Express and TypeScript.
│   ├── dev.ts                 # Script for starting the server in development mode.
│   ├── dist                   # Compiled backend code.
│   ├── src                    # Source code directory containing uncompiled TypeScript files.
│   │   ├── db.ts              # TypeScript file for database interactions.
│   │   ├── index.ts           # Entry point for the backend server in TypeScript.
│   │   ├── libs               # Utility libraries and helper functions for the backend (TypeScript).
│   │   │   ├── auth.ts        # Utility functions for authentication (TypeScript).
│   │   │   ├── env.ts         # Utility functions for managing environment variables (TypeScript).
│   │   │   └── logger.ts      # Utility functions for logging (TypeScript).
│   │   ├── profile.db         # Database file for storing user profiles.
│   │   └── routes             # Route definitions (TypeScript).
│   │       ├── index.ts       # Main router file in TypeScript.
│   │       └── profile        # Routes related to user profiles.
│   └── third.d.ts             # TypeScript declaration file for third-party libraries.
├── blocklet.md                # Documentation related to Blocklet, a blockchain application framework.
├── blocklet.yml               # Configuration file for Blocklet, defining application metadata and settings.
├── blocklet.zh.md             # Blocklet documentation in Chinese, similar to blocklet.md.
├── dist                       # Compiled frontend code and static assets.
│   ├── assets                 # Compiled static assets such as JavaScript, CSS files, and fonts.
│   │   ├── index-1luBAdF8.js  # Compiled main JavaScript file.
│   │   ├── inter-latin-*.woff # Inter font family web font files.
│   │   ├── style-BuWmWwVT.css # Compiled main CSS file.
│   │   ├── ubuntu-mono-*.woff # Ubuntu Mono font family web font files.
│   └── index.html             # Compiled HTML file, the application entry point.
├── index.html                 # Entry HTML file for the frontend application.
├── jest.config.js             # Configuration file for the Jest testing framework.
├── logo.png                   # Logo image for the project.
├── package.json               # npm configuration file for the project, including dependencies and scripts.
├── pnpm-lock.yaml             # Lock file for PNPM, ensuring consistent dependency versions.
├── public                     # Public assets directory for the frontend, containing static files that don't require compilation.
├── screenshots                # Directory containing screenshots related to the project.
│   ├── 1-login.png            # Screenshot of the login page.
│   └── 2-ui.png               # Screenshot of the user interface.
├── scripts                    # Custom scripts for build and version control.
│   ├── build-clean.mjs        # Script for cleaning the build directory.
│   └── bump-version.mjs       # Script for bumping the project version.
├── src                        # Source code directory for the frontend, developed using React and TypeScript.
│   ├── app.css                # Global stylesheet for the frontend.
│   ├── app.tsx                # Main component of the frontend application.
│   ├── components             # Reusable React components.
│   │   └── layout.tsx         # Layout component for managing the page structure.
│   ├── contexts               # React context files for managing global state.
│   │   └── session.tsx        # Session context for managing user login state.
│   ├── env.d.ts               # TypeScript declaration file for environment variables.
│   ├── index.tsx              # Entry point for the frontend application, rendering the React app.
│   ├── libs                   # Utility libraries and helper functions for the frontend.
│   │   └── api.ts             # Utility functions for making API requests.
│   ├── logo.svg               # SVG version of the logo.
│   ├── pages                  # Directory containing page components for different views.
│   │   ├── components         # Components specific to certain pages.
│   │   │   ├── profile-edit.css  # Stylesheet for the profile edit page.
│   │   │   ├── profile-edit.tsx   # Component for the profile edit page.
│   │   │   └── profile-view.tsx   # Component for the profile view page.
│   │   ├── profile.css           # Stylesheet for the profile page.
│   │   ├── profile.tsx           # Component for the profile page.
│   │   └── required-login.tsx    # Component for pages that require login.
│   └── setup-tests.ts           # Configuration file for setting up the test environment.
├── test                       # Unit test files for the frontend.
│   ├── profile-edit.test.tsx   # Test file for the profile edit component.
│   └── profile-view.test.tsx   # Test file for the profile view component.
├── tsconfig.api.json          # TypeScript configuration file for the backend.
├── tsconfig.eslint.json       # ESLint configuration file for TypeScript.
├── tsconfig.json              # TypeScript configuration file for the entire project.
├── version                    # File containing the project's version number.
└── vite.config.mts            # Configuration file for Vite, the frontend build tool.

```

## Get help

If you want to learn more about the development of DID Spaces, You can also refer to [DID Spaces development documentation] (https://www.arcblock.io/docs/did-spaces/en/did-spaces-how-to-guides). No matter what you encounter a problem, we welcome you in our official BBS (https://community.arcblock.io/) initiated discussions.


## API Endpoints

- GET /api/profile - Retrieve user profile
- POST /api/profile - Update user profile

## Contributing

Feel free to submit issues or pull requests to help improve the project. Make sure to follow the code style guidelines and add tests for new features.

## License

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.