export class CreatePlanDto {
    "name": string;
    "description": string;
    "monthly_price": string;
    "annual_price": string;
    "duration": string;
    "limits_id": string;
    "resources_id": string;
    "created_at": Date;
    "updated_at": Date;
    "deleted_at": Date;
}