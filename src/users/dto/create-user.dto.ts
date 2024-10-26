export class CreateUserDto {
    "name": string;
    "email": string;
    "password": string;
    "confirmationPassword": string;
    "phone": string;
    "address": string;
    "birthdate": Date;
    "status": boolean;
    "user_type": string;
    "payment_type": string;
    "activity_plan_id": string;
    "aquisition_plan_date": string;
}