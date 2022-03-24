//precisamos do servico que sera chamado nas rotas
//classe de servicos serve para tirar o peso das rotas de chamar todas as funcoes
//principio da responsabilidade unica

import { ICategoryRepositories } from "../../repositories/ICategoriesRepositories";

// essa classe nao tem acesso ao req e res, entao precisamos de uma interface
interface IRequest{
    name: string;
    description: string;
}

class CreateCategoryUseCase {

    //toda vez que eu instancear a classe preciso colocar o repositorio que ja foi criado
    //foi feito porque nao podemos chamar o repositorio em cada metodo nas classes de serviço
    constructor(private categoriesRepository: ICategoryRepositories){}
    
    execute({name, description}: IRequest): void {

        //ver se ja existe uma categoria com esse nome
        const categorieAlreadyExists = this.categoriesRepository.findByName(name);

        if(categorieAlreadyExists) {
            //precisamos criar uma exceção de erro -> throw
            throw new Error('name aready exists');
          }

        this.categoriesRepository.create({name, description})
    }
};

export {CreateCategoryUseCase};