/*
  Warnings:

  - You are about to drop the `Action` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `password` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "password" TEXT NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL;

-- DropTable
DROP TABLE "Action";

-- CreateTable
CREATE TABLE "Metrika" (
    "id" INTEGER NOT NULL,
    "clicksMain" INTEGER NOT NULL DEFAULT 0,
    "clicksAddToCart" INTEGER NOT NULL DEFAULT 0,
    "clicksToCart" INTEGER NOT NULL DEFAULT 0,
    "clicksToProduct" INTEGER NOT NULL DEFAULT 0,
    "completedOrders" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Metrika_pkey" PRIMARY KEY ("id")
);
