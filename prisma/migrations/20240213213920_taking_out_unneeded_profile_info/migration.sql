/*
  Warnings:

  - You are about to drop the column `facebook` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `linkedin` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `twitter` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `profile` table. All the data in the column will be lost.
  - You are about to drop the column `youtube` on the `profile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `profile` DROP COLUMN `facebook`,
    DROP COLUMN `linkedin`,
    DROP COLUMN `twitter`,
    DROP COLUMN `website`,
    DROP COLUMN `youtube`;
