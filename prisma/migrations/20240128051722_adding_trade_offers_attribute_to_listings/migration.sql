/*
  Warnings:

  - Added the required column `tradeOffers` to the `Listing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `listing` ADD COLUMN `tradeOffers` VARCHAR(191) NOT NULL;
