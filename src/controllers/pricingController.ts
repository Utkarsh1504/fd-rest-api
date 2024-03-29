import { Request, Response } from "express";
import { responseType } from "../utils/type";
import calculateDeliveryCost from "../services/pricingServices";
import prisma from "../db";

export const calculatePriceController = async (req: Request, res: Response) => {
  const { zone, organization_id, total_distance, item_type } = req.body;

  const value = responseType.safeParse({
    zone,
    organization_id: Number(organization_id),
    total_distance,
    item_type,
  });

  if (!value.success) {
    res.status(501).json({ error: "validation failed" });
  }

  try {
    const pricing = await prisma.pricing.findFirst({
      where: {
        zone,
        organization_id: Number(organization_id),
      },
    });

    console.log(pricing);
    if (!pricing) {
      throw new Error("Pricing information not found");
    }

    const totalCost = calculateDeliveryCost(
      pricing.km_price,
      pricing.base_distance_in_km,
      pricing.fix_price,
      total_distance,
      item_type
    );
    console.log(totalCost);
    res.status(200).json({ total_price: totalCost });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err });
  }
};
