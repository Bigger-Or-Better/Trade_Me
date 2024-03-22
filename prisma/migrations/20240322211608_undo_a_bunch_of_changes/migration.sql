/*
  Warnings:

  - You are about to drop the column `receiverId` on the `friendrequest` table. All the data in the column will be lost.
  - You are about to drop the column `senderId` on the `friendrequest` table. All the data in the column will be lost.
  - Added the required column `fR_ReceiverId` to the `FriendRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fR_SenderId` to the `FriendRequest` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `FriendRequest_receiverId_senderId_idx` ON `friendrequest`;

-- AlterTable
ALTER TABLE `friendrequest` DROP COLUMN `receiverId`,
    DROP COLUMN `senderId`,
    ADD COLUMN `fR_ReceiverId` INTEGER NOT NULL,
    ADD COLUMN `fR_SenderId` INTEGER NOT NULL,
    ADD COLUMN `userId` INTEGER NULL;

-- CreateTable
CREATE TABLE `FR_Sender` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,

    INDEX `FR_Sender_id_userId_idx`(`id`, `userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FR_Receiver` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,

    INDEX `FR_Receiver_id_userId_idx`(`id`, `userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `FriendRequest_fR_SenderId_fR_ReceiverId_idx` ON `FriendRequest`(`fR_SenderId`, `fR_ReceiverId`);
