/*
  Warnings:

  - You are about to drop the column `groupchatId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `groupchatId` on the `Message` table. All the data in the column will be lost.
  - Added the required column `groupId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `groupId` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_groupchatId_fkey";

-- DropForeignKey
ALTER TABLE "Message" DROP CONSTRAINT "Message_groupchatId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "groupchatId",
ADD COLUMN     "groupId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "groupchatId",
ADD COLUMN     "groupId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Groupchat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Groupchat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
