-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255),
    "address" VARCHAR(255),
    "birthdate" VARCHAR(255) NOT NULL,
    "status" BOOLEAN NOT NULL,
    "user_type" VARCHAR(255) NOT NULL,
    "payment_type" VARCHAR(255),
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(0),
    "activity_plan_id" UUID,
    "aquisition_plan_date" VARCHAR(255),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_activity_plan_id_fkey" FOREIGN KEY ("activity_plan_id") REFERENCES "Plan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
