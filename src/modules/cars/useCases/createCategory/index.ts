// arquivo para criar o nosso array de repositorio 
import { CategoriesRepositories } from "../../repositories/CategoriesRepositories copy";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./createCategoryUseCase";

//chama o repositorio
const categoriesRepositories = CategoriesRepositories.getInstance();

const categoriesUseCase = new CreateCategoryUseCase(categoriesRepositories);

const createCategoryController = new CreateCategoryController(categoriesUseCase);

export {createCategoryController};