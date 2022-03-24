// classe de repositorio das categorias, para tirar o acesso ao db diretamente das rotas
import { Category } from '../model/category';
import { ICategoryRepositories, ICreateCategoryDTO } from './ICategoriesRepositories'



class CategoriesRepositories implements ICategoryRepositories {
    
//cria um array mas nao inicializa
private categories: Category[];

private static INSTANCE: CategoriesRepositories;



    // quando a classe for instanceada o array é ativado
    constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoriesRepositories{
        if(!CategoriesRepositories.INSTANCE){
            CategoriesRepositories.INSTANCE = new CategoriesRepositories();
        }
        return CategoriesRepositories.INSTANCE;
    }
    //criar uma funcao que coloca o objeto dentro do array -> o void significa que a funcao nao vai ter retorno nenhum
    create({name, description} : ICreateCategoryDTO): void{

        //cria um objeto que armazena os valores request e atribui o model
        const category = new Category();
    
        //ha duas possibilidades de atribuir os valores -> category.name, category.description... ou Object.assign
        Object.assign(category, {
            name,
            description, 
            created_at: new Date()
        })

        //adiciona o objeto no array categories 
        this.categories.push(category);
    }

    //lista todos as categorias cadastradas
    list(): Category[]{
        return this.categories;
    }

    //funcao de consulta no array se ja existe algum objeto com esse nome
    findByName(name: string): Category | undefined {
        const category = this.categories.find((category) => category.name === name);

        return category;
    }
};

export {CategoriesRepositories};