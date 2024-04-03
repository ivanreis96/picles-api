import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";

export default class GetShelterDetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutput>{
    run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
        return Promise.resolve(new GetShelterDetailsUseCaseOutput({
            shelterName: "Abrigo bigo",
            shelterEmail: 'abb@gmail.com',
            shelterPhone: '19982853590',
            shelterWhatsApp: '19982853590',
            createdAt: new Date(),
            updateAt: new Date()

        }))
    }
    
}