/*
  Warnings:

  - Added the required column `listingId` to the `TradeOffer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tradeoffer` ADD COLUMN `listingId` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `TradeOffer_ownerId_traderId_idx` ON `TradeOffer`(`ownerId`, `traderId`);
