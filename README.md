
# Food Delivery Backend REST API

**NOTE:**  The API is deployed at [https://fd-rest-api.onrender.com/](https://fd-rest-api.onrender.com/)


## Features Implemented:

- Prisma ORM, PostgreSQL for database
- Dynamic pricing module for calculating delivery costs.
- REST API endpoints for dynamic pricing calculations.
- Input validation using zod.
- Used dummy data for testing using the seed.ts (for seeding)

## Issues:
- Getting CORS issues while deloying in the production, locally it works fine 

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download) (version 20.x or later recommended)
- [PostgreSQL](https://www.postgresql.org/download/) (version 16.x or later recommended)
- npm (included with Node.js)

### Installation

1. Clone the repository:
   
   ```bash
   git clone https://github.com/Utkarsh1504/fd-rest-api
   cd fd-rest-api
   ```

2. Install dependencies:
   
   ```bash
   npm install
   ```

3. Set up the database:
    - Create a PostgreSQL database. (render or neon)
    - Create `.env` file 
    - Add the PostgreSQL URL in the `.env` file as `DATABASE_URL=`

4. Run the server:
   ```bash
   npm run dev
   ```

## API Documentation

The API endpoints for calculating delivery costs are documented below:

### Calculate Delivery Cost

- **POST /api/calculate-price**
- **Body**:
  ```json
  {
    "zone": "central",
    "organization_id": "5",
    "total_distance": 12,
    "item_type": "perishable"
  }
  ```
- **Response**:
  ```json
  {
    "total_price": 20.5
  }
  ```
