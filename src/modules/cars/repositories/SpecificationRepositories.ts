import { Specification } from "../model/specification";
import { ISpecificationRepositories, ICreateSpecificationDTO } from "./ISpecificationRepositories";


class SpecificationRepositories implements ISpecificationRepositories{
    //crio um array -> tabela fake no db
    private specifications: Specification[];

    constructor(){
        //toda vez que eu chamar o new specificationRepositories o array vira array
        this.specifications = [];
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find((specification) => specification.name === name); 

        return specification;
    }

    create({name, description}: ICreateSpecificationDTO): void{
        //crio um objeto atraves do meu model
        const specification = new Specification();

        //atribuo valores para as partes do objeto
        Object.assign(specification, {
            name: name,
            description: description,
            created_at: new Date()
        });

        //adiciono o objeto criado ao meu array
        this.specifications.push(specification);
    }

    
}

export {SpecificationRepositories};