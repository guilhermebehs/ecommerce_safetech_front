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


    async getAll(limit=10, offset=0, nameLike= ''): Promise<Array<IProductGet>>{
        

         let products: Array<IProductGet>=[];

         const query = `limit=${limit}&offset=${offset}&nameLike=${nameLike}`
        
         try{
           const result = await this.#connection.get('/products?'+query)
           products = result.data as Array<IProductGet> || [];
         }
         catch(err){
            console.log('erro')
            console.log(err)
         }
         
         return products;
         
    }
}