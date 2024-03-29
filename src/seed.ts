const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    // Seed organizations
    const organizations = await prisma.organization.createMany({
      data: [
        { name: "Food Express" },
        { name: "Samose Flames" },
        { name: "Samose House" },
        { name: "Food House" },
        { name: "Samose Social" },
      ],
    });

    // Seed items
    const items = await prisma.item.createMany({
      data: [
        { type: "perishable", description: "Chicken Tikka Masala" },
        { type: "perishable", description: "Vegetable Biryani" },
        { type: "perishable", description: "Palak Paneer" },
        { type: "perishable", description: "Chana Masala" },
        { type: "perishable", description: "Naan Bread" },
        { type: "perishable", description: "Samosa" },
        { type: "perishable", description: "Rogan Josh" },
        { type: "perishable", description: "Butter Chicken" },
        { type: "non-perishable", description: "Mango Pickle" },
        { type: "non-perishable", description: "Appalam" },
      ],
    });

    // Seed pricings
    const pricings = await prisma.pricing.createMany({
      data: [
        {
          organization_id: 1,
          item_id: 1,
          zone: "central",
          base_distance_in_km: 5,
          km_price: 1.5,
          fix_price: 10,
        },
        {
          organization_id: 2,
          item_id: 2,
          zone: "central",
          base_distance_in_km: 5,
          km_price: 2.0,
          fix_price: 13,
        },
        {
          organization_id: 5,
          item_id: 3,
          zone: "east",
          base_distance_in_km: 3,
          km_price: 1.5,
          fix_price: 11,
        },
      ],
    });

    console.log("Seed data inserted successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedDatabase();
