-- CreateTable
CREATE TABLE "Organization" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Organization_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pricing" (
    "id" SERIAL NOT NULL,
    "organization_id" INTEGER NOT NULL,
    "item_id" INTEGER NOT NULL,
    "zone" TEXT NOT NULL,
    "base_distance_in_km" INTEGER NOT NULL DEFAULT 5,
    "km_price" DOUBLE PRECISION NOT NULL DEFAULT 1.5,
    "fix_price" DOUBLE PRECISION NOT NULL DEFAULT 10,

    CONSTRAINT "Pricing_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Pricing" ADD CONSTRAINT "Pricing_organization_id_fkey" FOREIGN KEY ("organization_id") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pricing" ADD CONSTRAINT "Pricing_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
