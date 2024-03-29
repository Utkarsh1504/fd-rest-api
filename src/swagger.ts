import swaggerJSDoc from "swagger-jsdoc";
const PORT = process.env.PORT || 3000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Food Delivery API",
      version: "1.0.0",
      description: "API documentation for the food delivery application",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: "Development Server",
      },
    ],
  },
  apis: [`${__dirname}/routes/*.ts`],
};

const swaggerDocs = swaggerJSDoc(options);

export default swaggerDocs;
