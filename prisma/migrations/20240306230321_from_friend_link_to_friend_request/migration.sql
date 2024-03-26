/*
  Warnings:

  - You are about to drop the `friendlink` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `friendlink`;

-- CreateTable
CREATE TABLE `FriendRequest` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `receiverId` INTEGER NOT NULL,
    `senderId` INTEGER NOT NULL,
    `isAccepted` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
