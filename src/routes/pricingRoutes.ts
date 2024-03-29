/**
 * @swagger
 * /api/calculate-price:
 *   post:
 *     summary: Calculate delivery cost
 *     description: Calculates the delivery cost based on the provided parameters.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               zone:
 *                 type: string
 *                 example: central
 *               organization_id:
 *                 type: string
 *                 example: 005
 *               total_distance:
 *                 type: number
 *                 example: 12
 *               item_type:
 *                 type: string
 *                 example: perishable
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total_price:
 *                   type: number
 *                   example: 20.5
 */

import express from "express";
import { calculatePriceController } from "../controllers/pricingController";

const router = express.Router();
router.post("/calculate-price", calculatePriceController);

export default router;
