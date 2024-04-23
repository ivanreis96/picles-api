import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export default class CreatePetControllerInput{

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'Name of Pet'})
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'Type of pet'})
    type: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'Size of pet'})
    size: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description: 'Gender of pet'})
    gender: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(1024)
    @ApiProperty({description: 'Bio of pet'})
    bio: string;
}