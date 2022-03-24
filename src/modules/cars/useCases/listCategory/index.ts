import { CategoriesRepositories } from "../../repositories/CategoriesRepositories copy";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRepositories = CategoriesRepositories.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepositories);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export {listCategoriesController};