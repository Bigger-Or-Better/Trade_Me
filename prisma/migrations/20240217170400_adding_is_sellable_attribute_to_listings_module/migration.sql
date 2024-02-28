/*
  Warnings:

  - Added the required column `isSellable` to the `Listing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `listing` ADD COLUMN `isSellable` INTEGER NOT NULL;
