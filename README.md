# URL Shortener

A simple URL shortener application with separate frontend and backend. This README provides instructions for setting up and running the project, including environment variables and database configuration.

## Table of Contents

1. [Requirements](#requirements)
2. [Environment Variables](#environment-variables)
3. [Starting the Application](#starting-the-application)
   - [Frontend](#frontend)
   - [Backend](#backend)
4.[Folder Structure](#folder-structure)
5. [Database Setup](#database-setup)
6.[Features](#features)
7. [Contributing](#contributing)

## Requirements

- Node.js (v20.x or later)
- PostgreSQL (or your preferred SQL database due to prisma support)
- `npm`

## Environment Variables

Create a `.env` file in the root of backend directory. The file should contain the following variables:

### Backend (.env, .env.development, .env.production.)

```env
# Backend
DATABASE_URL=postgres://user:password@localhost:5432/yourdatabase
JWT_SECRET=your_jwt_secret
PORT=3000

NOTE: change the scripts in package.json depending upon your os to set NODE environment.

### Frontend (.env)

```env
BASE_URL= "http://localhost:5173"
```

## Starting the Application

### Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run migrations to set up the database schema:

   ```bash
   npx run migrate
   ```

4. Start the backend server:

   ```bash
   npm run start:dev
   ```

   The backend server will be running on `http://localhost:3000` by default.

### Frontend

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm run dev
   ```

   The frontend application will be running on `http://localhost:5173` by default.
```
## Folder Structure

```
url-shortener-system/
├── client/          # React frontend
├── server/          # Node.js and Express backend
├── models/          # MongoDB models
├── routes/          # API routes
├── controllers/     # Business logic for APIs
├── middlewares/     # Authentication and validation middleware
├── utils/           # Helper functions
└── README.md        # Project documentation
```

## Database Setup

Ensure you have PostgreSQL or your preferred SQL database set up. Create a database for the URL shortener application.

1. **Create Database:**

   Connect to your database and create a new database:

   ```sql
   CREATE DATABASE url_shortner;
   ```

2. **Update `.env` File:**

   Update the `DATABASE_URL` variable in the `.env` file with your database credentials.

```
psql -U postgres -d url_shortner -f seed.sql
```

The passwords are stored in hashed form for security. Ensure your application uses appropriate hashing methods to match this data.

```
## Features

- **URL Shortening**: Convert long URLs into short, user-friendly links.
- **Custom Short URLs**: Option to create personalized short URLs.
- **Redirect Functionality**: Automatically redirect short URLs to their original destinations.
- **User Authentication**: Secure login and signup using JSON Web Tokens (JWT).
- **Dashboard Management**: Manage, edit, and delete shortened URLs in a responsive React-based interface.
- **Expiration Dates**: Set expiration dates for short URLs for better control.
- **Clipboard Copying**: Quickly copy the shortened URL with one click.
- **Statistics**: Basic statistics for tracking the number of times a short URL was accessed.
- **Fully Responsive UI**: Clean and modern design optimized for all devices.

---

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and ensure tests pass.
4. Submit a pull request with a description of your changes.

---
# URL Shortener

A simple URL shortener application with separate frontend and backend. This README provides instructions for setting up and running the project, including environment variables and database configuration.

## Table of Contents

1. [Requirements](#requirements)
2. [Environment Variables](#environment-variables)
3. [Starting the Application](#starting-the-application)
   - [Frontend](#frontend)
   - [Backend](#backend)
4.[Folder Structure](#folder-structure)
5. [Database Setup](#database-setup)
6.[Features](#features)
7. [Contributing](#contributing)

## Requirements

- Node.js (v20.x or later)
- PostgreSQL (or your preferred SQL database due to prisma support)
- `npm`

## Environment Variables

Create a `.env` file in the root of backend directory. The file should contain the following variables:

### Backend (.env, .env.development, .env.production.)

```env
# Backend
DATABASE_URL=postgres://user:password@localhost:5432/yourdatabase
JWT_SECRET=your_jwt_secret
PORT=3000

NOTE: change the scripts in package.json depending upon your os to set NODE environment.

### Frontend (.env)

```env
BASE_URL= "http://localhost:5173"
```

## Starting the Application

### Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run migrations to set up the database schema:

   ```bash
   npx run migrate
   ```

4. Start the backend server:

   ```bash
   npm run start:dev
   ```

   The backend server will be running on `http://localhost:3000` by default.

### Frontend

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm run dev
   ```

   The frontend application will be running on `http://localhost:5173` by default.
```
## Folder Structure

```
url-shortener-system/
├── client/          # React frontend
├── server/          # Node.js and Express backend
├── models/          # MongoDB models
├── routes/          # API routes
├── controllers/     # Business logic for APIs
├── middlewares/     # Authentication and validation middleware
├── utils/           # Helper functions
└── README.md        # Project documentation
```

## Database Setup

Ensure you have PostgreSQL or your preferred SQL database set up. Create a database for the URL shortener application.

1. **Create Database:**

   Connect to your database and create a new database:

   ```sql
   CREATE DATABASE url_shortner;
   ```

2. **Update `.env` File:**

   Update the `DATABASE_URL` variable in the `.env` file with your database credentials.

```
psql -U postgres -d url_shortner -f seed.sql
```

The passwords are stored in hashed form for security. Ensure your application uses appropriate hashing methods to match this data.

```
## Features

- **URL Shortening**: Convert long URLs into short, user-friendly links.
- **Custom Short URLs**: Option to create personalized short URLs.
- **Redirect Functionality**: Automatically redirect short URLs to their original destinations.
- **User Authentication**: Secure login and signup using JSON Web Tokens (JWT).
- **Dashboard Management**: Manage, edit, and delete shortened URLs in a responsive React-based interface.
- **Expiration Dates**: Set expiration dates for short URLs for better control.
- **Clipboard Copying**: Quickly copy the shortened URL with one click.
- **Statistics**: Basic statistics for tracking the number of times a short URL was accessed.
- **Fully Responsive UI**: Clean and modern design optimized for all devices.

---

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and ensure tests pass.
4. Submit a pull request with a description of your changes.

---
