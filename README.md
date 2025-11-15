# Express.js Project

A simple Express.js REST API project with MVC structure.

## Project Structure

```
.
├── src/
│   ├── app.js              # Express app configuration
│   ├── controllers/        # Request handlers
│   ├── models/            # Database models
│   └── routes/            # API routes
├── server.js              # Entry point
├── postman_collection.json # API testing collection
├── package.json
└── .env.example
```

## Getting Started

### Installation

```bash
npm install
```

### Environment Setup

Copy `.env.example` to `.env` and configure your environment variables:

```bash
cp .env.example .env
```

### Running the Application

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

- `GET /` - Welcome message
- `GET /api/health` - Health check
- `GET /api/example` - Get all examples
- `GET /api/example/:id` - Get example by ID
- `POST /api/example` - Create new example

## Testing with Postman

Import the `postman_collection.json` file into Postman to test all API endpoints.

## License

MIT
