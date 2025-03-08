# Remix Notes App

A minimalist note-taking application built with Remix, React, and Prisma. Features a clean dark theme interface for creating and managing notes.

## Features

- 📝 Create, edit and view notes
- 🔄 Real-time updates
- 🌗 Dark theme interface
- 💾 SQLite database storage
- 🚀 Fast and responsive UI

## Tech Stack

- [Remix](https://remix.run/) - Full stack web framework
- [React](https://reactjs.org/) - UI library
- [Prisma](https://www.prisma.io/) - Database ORM
- [SQLite](https://www.sqlite.org/) - Database
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [CSS Modules](https://github.com/css-modules/css-modules) - Scoped styling

## Getting Started

### Prerequisites

- Node.js 20.0.0 or later
- npm

### Installation

1. Clone the repository

```sh
git clone https://github.com/yourusername/remix-notes-app.git
cd remix-notes-app
```

2. Install dependencies

```sh
npm install
```

3. Set up the database

```sh
npx prisma db push
```

4. Create a `.env` file and add:

```env
DATABASE_URL="file:./dev.db"
```

## Development

Run the development server:

```sh
npm run dev
```

## Deployment

Build for production:

```sh
npm run build
```

Start in production mode:

```sh
npm start
```

### Production Build Output

The `npm run build` command generates:

- `build/server` - Server-side code
- `build/client` - Client-side assets

## Project Structure

```
remix-notes-app/
├── app/
│   ├── api/           # API and database interactions
│   ├── components/    # React components
│   ├── routes/        # Remix routes
│   └── utils/         # Utility functions
├── prisma/
│   └── schema.prisma  # Database schema
└── public/            # Static assets
```
