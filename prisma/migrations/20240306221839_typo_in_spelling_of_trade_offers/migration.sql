/*
  Warnings:

  - You are about to drop the column `tradeOfersId` on the `listing` table. All the data in the column will be lost.
  - You are about to drop the `tradeofers` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `listing` DROP COLUMN `tradeOfersId`;

-- DropTable
DROP TABLE `tradeofers`;

-- CreateTable
CREATE TABLE `TradeOffer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ownerId` INTEGER NOT NULL,
    `traderId` INTEGER NOT NULL,
    `tradeDescript` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
