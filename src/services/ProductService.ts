import axios, { AxiosInstance } from 'axios';
import { IProductGet } from '../dto/IProduct';


export default class ComicsService {

    #connection: AxiosInstance;
    #configs: any;

    constructor(){

        const baseURL = process.env.REACT_APP_BK_URL + ':'+process.env.REACT_APP_BK_PORT;
        const timeout = 10000;
        this.#configs = {
            baseURL,
            timeout
        }
        this.#connection = axios.create(this.#configs);
    }


    async getAll(): Promise<Array<IProductGet>>{
        

         let products: Array<IProductGet>=[];
        
         try{
           const result = await this.#connection.get('/products')
           products = result.data as Array<IProductGet> || [];
         }
         catch(err){
            console.log('erro')
            console.log(err)
         }
         
         return products;
         
    }
}