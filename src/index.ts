import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger";
import pricingRoutes from "./routes/pricingRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/api", pricingRoutes);

app.get("/", (req, res) => {
  res.status(301).redirect("/api-docs");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
