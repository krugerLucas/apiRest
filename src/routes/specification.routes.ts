import { request, response, Router } from "express";
import { SpecificationRepositories } from "../modules/cars/repositories/SpecificationRepositories";
import { CreateSpecificationService } from "../modules/cars/service/createSpecificationService";

const specificationRoutes = Router();

const specificationRepository = new SpecificationRepositories();

specificationRoutes.post('/', (request, response) =>{
    const {name, description}= request.body;

    const createSpecification = new CreateSpecificationService(specificationRepository);

    createSpecification.execute({name, description})

    return response.status(201).send();
})

export {specificationRoutes};