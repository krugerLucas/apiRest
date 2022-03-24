import { ISpecificationRepositories } from "../repositories/ISpecificationRepositories";

interface Irequest{
    name: string,
    description: string
}

class CreateSpecificationService {

    constructor(private SpecificationRepositories: ISpecificationRepositories){};

    execute({name, description}: Irequest): void{
        const specificationAlreadyExists = this.SpecificationRepositories.findByName(name);
        
        if(specificationAlreadyExists) {
            //precisamos criar uma exceção de erro -> throw
            throw new Error('Specification already exists');
          }

        this.SpecificationRepositories.create({name, description})
    }
};

export {CreateSpecificationService};