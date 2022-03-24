import { Category } from "../../model/category";
import { ICategoryRepositories } from "../../repositories/ICategoriesRepositories";

// essa classe nao tem acesso ao req e res, entao precisamos de uma interface
interface IRequest{
    name: string;
    description: string;
}

class ListCategoriesUseCase {

    //toda vez que eu instancear a classe preciso colocar o repositorio que ja foi criado
    //foi feito porque nao podemos chamar o repositorio em cada metodo nas classes de serviço
    constructor(private categoriesRepository: ICategoryRepositories){}
    
    execute(): Category[] {
       return this.categoriesRepository.list()
    }
};

export {ListCategoriesUseCase};