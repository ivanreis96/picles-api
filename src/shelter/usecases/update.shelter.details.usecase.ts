import UpdateShelterDetailsUseCaseInput from "../dtos/update.shelter.usecase.input";
import UpdateShelterDetailsUseCaseOutput from "../dtos/update.shelter.usecase.output";
import { IUseCase } from "src/domain/iusecase.interface";

export default class UpdateShelterDetailsUsecase implements IUseCase<UpdateShelterDetailsUseCaseInput, UpdateShelterDetailsUseCaseOutput>

{
    run(input: UpdateShelterDetailsUseCaseInput): Promise<UpdateShelterDetailsUseCaseOutput>{
        throw new Error("Method not implemented.");
    }
}