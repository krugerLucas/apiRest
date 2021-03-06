//criar a classe modelo para o category[array] que sera usado no categoriesRepositories
//criar tabelasnmaisfniawf
import { v4 as uuidv4 } from 'uuid';

class Category {

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

export { Category };