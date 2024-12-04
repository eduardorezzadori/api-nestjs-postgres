/*
  Warnings:

  - You are about to drop the column `limits_id` on the `Plan` table. All the data in the column will be lost.
  - You are about to drop the `PlanLimits` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `monthly_price` on the `Plan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `annual_price` on the `Plan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Plan" DROP CONSTRAINT "Plan_limits_id_fkey";

-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "limits_id",
DROP COLUMN "monthly_price",
ADD COLUMN     "monthly_price" DECIMAL(10,2) NOT NULL,
DROP COLUMN "annual_price",
ADD COLUMN     "annual_price" DECIMAL(10,2) NOT NULL;

-- DropTable
DROP TABLE "PlanLimits";
