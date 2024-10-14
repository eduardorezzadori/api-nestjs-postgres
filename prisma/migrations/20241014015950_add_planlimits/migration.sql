/*
  Warnings:

  - You are about to drop the column `resources_id` on the `Plan` table. All the data in the column will be lost.
  - Changed the type of `limits_id` on the `Plan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Plan" DROP COLUMN "resources_id",
DROP COLUMN "limits_id",
ADD COLUMN     "limits_id" UUID NOT NULL;

-- CreateTable
CREATE TABLE "PlanLimits" (
    "id" UUID NOT NULL,
    "kilowatts" VARCHAR(255) NOT NULL,
    "instalations" VARCHAR(255) NOT NULL,

    CONSTRAINT "PlanLimits_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Plan" ADD CONSTRAINT "Plan_limits_id_fkey" FOREIGN KEY ("limits_id") REFERENCES "PlanLimits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
