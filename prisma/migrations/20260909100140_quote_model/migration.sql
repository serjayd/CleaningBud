/*
  Warnings:

  - You are about to drop the `account` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `session` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `verification` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PropertyType" AS ENUM ('HOUSE', 'FLAT', 'STUDIO');

-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('REGULAR_CLEANING', 'DEEP_CLEANING', 'END_OF_TENANCY', 'WINDOW_CLEANING', 'HOME_AND_WINDOWS');

-- CreateEnum
CREATE TYPE "ExtraService" AS ENUM ('OVEN_CLEANING', 'FRIDGE_CLEANING', 'INSIDE_CABINETS', 'INTERIOR_WINDOWS', 'EXTERIOR_WINDOWS', 'LAUNDRY', 'OTHER');

-- DropForeignKey
ALTER TABLE "account" DROP CONSTRAINT "account_userId_fkey";

-- DropForeignKey
ALTER TABLE "session" DROP CONSTRAINT "session_userId_fkey";

-- DropTable
DROP TABLE "account";

-- DropTable
DROP TABLE "session";

-- DropTable
DROP TABLE "user";

-- DropTable
DROP TABLE "verification";

-- CreateTable
CREATE TABLE "quotes" (
    "id" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "propertyType" "PropertyType" NOT NULL DEFAULT 'HOUSE',
    "bedrooms" INTEGER NOT NULL DEFAULT 0,
    "bathrooms" INTEGER NOT NULL DEFAULT 0,
    "serviceType" "ServiceType" NOT NULL DEFAULT 'REGULAR_CLEANING',
    "extras" "ExtraService"[],
    "cleaningDate" TIMESTAMP(3) NOT NULL,
    "fullName" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "propertyAddress" TEXT NOT NULL,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "quotes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "quotes_emailAddress_idx" ON "quotes"("emailAddress");

-- CreateIndex
CREATE INDEX "quotes_phoneNumber_idx" ON "quotes"("phoneNumber");

-- CreateIndex
CREATE INDEX "quotes_postcode_idx" ON "quotes"("postcode");

-- CreateIndex
CREATE INDEX "quotes_cleaningDate_idx" ON "quotes"("cleaningDate");

-- CreateIndex
CREATE INDEX "quotes_serviceType_idx" ON "quotes"("serviceType");
