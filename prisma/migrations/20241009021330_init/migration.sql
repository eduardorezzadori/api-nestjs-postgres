-- CreateTable
CREATE TABLE "Plan" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255),
    "monthly_price" VARCHAR(255) NOT NULL,
    "annual_price" VARCHAR(255) NOT NULL,
    "duration" VARCHAR(255),
    "limits_id" VARCHAR(255) NOT NULL,
    "resources_id" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(0),

    CONSTRAINT "Plan_pkey" PRIMARY KEY ("id")
);
