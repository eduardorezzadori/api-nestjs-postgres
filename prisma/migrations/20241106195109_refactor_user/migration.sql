/*
  Warnings:

  - You are about to drop the column `activity_plan_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `aquisition_plan_date` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `payment_type` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_activity_plan_id_fkey";

-- AlterTable
ALTER TABLE "Subscriptions" ADD COLUMN     "payment_type" VARCHAR(255);

-- AlterTable
ALTER TABLE "User" DROP COLUMN "activity_plan_id",
DROP COLUMN "aquisition_plan_date",
DROP COLUMN "payment_type",
DROP COLUMN "status";
