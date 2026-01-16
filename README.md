# NewsHub - News Search, Read, and Save Application

A full-stack web application that allows users to search, read, and save news articles. Built with **Next.js** (frontend), **Express.js** (backend), and **MongoDB** (database).

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Backend Setup](#backend-setup)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Testing](#testing)

---

## Project Overview

NewsHub is a modern news aggregation platform that enables users to:

- Search for news articles across multiple sources
- Read full articles and summaries
- Save favorite articles for later reference
- Manage their reading history

---

## Tech Stack

### Frontend

- **Next.js** - React framework for production
- **React** - UI library
- **TypeScript** - Type-safe JavaScript

### Backend

- **Express.js** - Node.js web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Redis** - In-memory data store for caching

### Authentication & Security

- **JWT (jsonwebtoken)** - Token-based authentication
- **bcryptjs** - Password hashing
- **Helmet** - Security headers middleware
- **express-rate-limit** - Rate limiting for API endpoints

### Additional Libraries

- **Morgan** - HTTP request logger
- **Winston** - Application logging
- **Nodemailer** - Email notifications
- **Axios** - HTTP client for API calls
- **express-validator** - Input validation
- **CORS** - Cross-Origin Resource Sharing

### Development Tools

- **Nodemon** - Auto-restart on file changes
- **Jest** - Testing framework
- **Supertest** - HTTP assertion library for testing

---

## Backend Setup

The backend is structured as an Express.js application with modular architecture for scalability.

### Directory Structure

```
server/
├── src/
│   ├── app.js                 # Express application setup
│   ├── server.js              # Server entry point
│   ├── config/                # Configuration files
│   │   ├── db.js              # MongoDB connection
│   │   ├── logger.js          # Winston logger configuration
│   │   └── redis.js           # Redis client configuration
│   ├── controllers/           # Request handlers
│   ├── middleware/            # Custom middleware
│   ├── models/                # Mongoose schemas
│   ├── routes/                # API route definitions
│   └── utils/                 # Utility functions
├── tests/                     # Test files
│   ├── auth.test.js           # Authentication tests
│   └── news.test.js           # News API tests
└── package.json               # Dependencies and scripts
```

---

## Installation

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or Atlas)
- **Redis** (optional, for caching)

### Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd NewsHub
   ```

2. **Install backend dependencies**

   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

---

## Running the Application

### Development Mode

**Backend** (from `server` directory):

```bash
npm run dev
```

Server runs on `http://localhost:5000`

**Frontend** (from `client` directory):

```bash
npm run dev
```

Client runs on `http://localhost:3000`

### Production Mode

**Build backend:**

```bash
npm run build
```

**Start backend:**

```bash
npm start
```

---

## Contributing

Please follow the project's code style and commit guidelines. Ensure all tests pass before submitting pull requests.

---

## License

ISC License

---

## Contact & Support

For issues, questions, or suggestions, please open an issue on the project repository.
