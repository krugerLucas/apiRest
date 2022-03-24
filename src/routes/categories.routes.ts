import { Router } from "express";
import { CategoriesRepositories } from "../modules/cars/repositories/CategoriesRepositories copy";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategory";

//cria rota para ser chamada no app
const categoriesRoutes = Router();


// cria a rota de POST
categoriesRoutes.post('/', (request, response) => {
    return createCategoryController.handle(request,response);
});

//criar uma rota de busca para rotornar a lista de categorias
categoriesRoutes.get('/', ( request, response ) => {
    return listCategoriesController.handle(request,response);
})

export { categoriesRoutes };