//criar a classe modelo para o specification[array] que sera usado no categoriesRepositories
import { v4 as uuidv4 } from 'uuid';

class Specification {

    //id opcional
    id?: string;
    
    name: string;

    description: string;
    
    created_at : Date;

    // metodo que é chamado quando a classe é instanceada
    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }

};

export { Specification };