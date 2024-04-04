import { IsEmail, IsNotEmpty, IsNumberString, IsString, Length } from "class-validator"

export default class UpdateShelterControllerInput{
    @IsString()
    @IsNotEmpty()
    name: string
    @IsNumberString()
    @IsString()
    @IsNotEmpty()
    @Length(10,11)
    whatsapp: string
    @IsString()  /* Não precisa porque já ta validando no IsNumberString*/
    @IsNumberString()
    @Length(10,11)
    @IsNotEmpty()
    phone: string
    @IsNotEmpty()
    @IsEmail()
    email: string
}