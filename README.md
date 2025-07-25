# PERN TODO Application

This is a full-stack TODO application built with the PERN stack (PostgreSQL, Express, React, Node.js).

## Project Structure


client/
  package.json
  README.md
  public/
    favicon.ico
    index.html
    logo192.png
    logo512.png
    manifest.json
    robots.txt
  src/
    App.css
    App.js
    index.css
    index.js
    reportWebVitals.js
    components/
      EditTodo.js
      InputTodo.js
      ListTodos.js
server/
  database.sql
  db.js
  index.js
  package.json


## Features
- Add, edit, and delete TODO items
- Persistent storage using PostgreSQL
- RESTful API with Express and Node.js
- Responsive UI built with React and Bootstrap 4

## Getting Started

### Prerequisites
- Node.js
- PostgreSQL

### Setup

#### 1. Clone the repository

git clone <repo-url>
cd PERN-TODO


#### 2. Install dependencies
- For the server:
  
  cd server
  npm install
  
- For the client:
  
  cd client
  npm install
  

#### 3. Set up the database
- Create a PostgreSQL database and run the SQL script in `server/database.sql` to set up the tables.

#### 4. Configure the server
- Update database connection details in `server/db.js` as needed.

#### 5. Start the server

cd server
npm start


#### 6. Start the client

cd client
npm start


The React app will be available at [http://localhost:3000](http://localhost:3000).

## File Overview

### Client
- `public/index.html`: Main HTML file, includes Bootstrap 4 and required JS libraries.
- `src/App.js`: Main React component.
- `src/components/`: Contains React components for editing, inputting, and listing TODOs.

### Server
- `database.sql`: SQL script to set up the database schema.
- `db.js`: Database connection setup.
- `index.js`: Express server and API routes.
