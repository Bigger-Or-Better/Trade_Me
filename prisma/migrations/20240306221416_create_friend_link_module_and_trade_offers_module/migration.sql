/*
  Warnings:

  - You are about to drop the column `tradeOffers` on the `listing` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `listing` DROP COLUMN `tradeOffers`,
    ADD COLUMN `tradeOfersId` INTEGER NULL;

-- CreateTable
CREATE TABLE `TradeOfers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ownerId` INTEGER NOT NULL,
    `traderId` INTEGER NOT NULL,
    `tradeDescript` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
