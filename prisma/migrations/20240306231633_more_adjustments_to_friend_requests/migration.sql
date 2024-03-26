-- CreateIndex
CREATE INDEX `FriendRequest_receiverId_senderId_idx` ON `FriendRequest`(`receiverId`, `senderId`);
