import { Specification } from "../model/specification";

//interface para fazer a ponte entre a rota e o servico
interface ICreateSpecificationDTO{
    name: string;
    description: string;
}

// interface que define o que o repositorio precisa ter
interface ISpecificationRepositories{

    create({name, description}: ICreateSpecificationDTO): void;

    findByName(name: string): Specification;
};

export {ISpecificationRepositories, ICreateSpecificationDTO};