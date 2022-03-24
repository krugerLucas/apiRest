import { Category } from "../model/category";

// DTO -> data transfer object - usado para que as rotas nao saibam qual é o modelo total dos dados da tabela
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

//interface que diz o que o meu repositorio de categoria deve ter -> principio de liskov 
interface ICategoryRepositories{
    //precisa ter uma funcao que me retorna um obj category
    findByName(name: string): Category;

    //precisa ter uma funcao que me retorna um array de categorys
    list(): Category[];
    
    //precisa de um metodo create que nao retorna 
    create({name, description}: ICreateCategoryDTO): void;
}

export {ICategoryRepositories, ICreateCategoryDTO};
