import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { UserAuthService } from "../userAuth/userAuth.service";
@Injectable()

export class ProductService {
    products: Array<any> = [];
    a_token: any;
    url = 'http://localhost:9090/advertise/categories';
    constructor(private _http: Http, private authService: UserAuthService) {
        console.log("auth token Product Services", authService.authToken);
       
    }
    setAuthToken(authToken: any) {
          this.a_token = authToken;
    }
    getAllAdvertises() {
        return this.products;
    }
    addAdvertise(item: Object) {
        this.products.push(item);
        console.log("Added the object: ", this.products);
    }
    deleteAdvertise(index: any) {
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    }
    editAdvertise(index: any, value: Object) {
        this.products.splice(index, 1, value)
    }
    getCategories() {
        console.log("In get categories "+this._http.get(this.url).
            map((response: Response) => response.json()));
        return this._http.get(this.url).
            map((response: Response) => response.json());
    }
    postAd(item: any) {
        let url = "http://localhost:9090/advertise/postAd"; //Akshay machine
        let headers = new Headers();
        headers.append('auth-token', this.a_token);
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = { "title": item.price, "name": item.name, "category": item.category, "description": item.description };
        return this._http.post(url, jsonReq, options)
            .map((response: Response) => response.json());

    }

    displayAllAdv() {

        //let url = "http://localhost:9090/advertise/posts"; //Akshay machine
        let url = "http://localhost:9090/advertise/postedUser";
        let headers = new Headers();
        headers.append('auth-token', this.a_token);
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        console.log("In product services !"+this._http.get(url, options).
            map((response: Response) => response.json()));
        return this._http.get(url, options).
            map((response: Response) => response.json());


    }
    deleteAd(id: any) {
        let url = "http:/localhost:9090/advertise/post?postId="+id; //Akshay machine
 let headers = new Headers();
        headers.append('auth-token', this.a_token);
        headers.append('Content-Type', 'application/json');
          let options = new RequestOptions({ headers: headers });

        return this._http.delete(url, options).
            map((response: Response) => response.json());
    }
    editAd(item: any, id: any) {
        let url = "http://192.168.3.144:9000/postAd"; //Akshay machine
        let headers = new Headers();
        headers.append('auth-token', this.a_token);
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });

        let jsonReq = { "postId": id, "status": "Open", "title": item.price, "name": item.name, "category": item.category, "description": item.description };
        console.log("id after", id, "Json: ", jsonReq);
        return this._http.put(url, jsonReq, options)
            .map((response: Response) => response.json());
    }
    login(jsonReq: any) {
        let url = "http://localhost:9090/advertise/login"; 
        return this._http.post(url, jsonReq)
            .map((response: Response) => response.json());
    }
    register(jsonReq: any) {
        let url = "http://localhost:9090/advertise/register"; 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });

        console.log("register returning : "+this._http.post(url, jsonReq, options)
            .map((response: Response) => response.json()));
        return this._http.post(url, jsonReq, options)
            .map((response: Response) => response.json());
    }
    getSpecificAdvertisements(index:string){
        let url = 'http://192.168.3.144:9000/posts/search?category=';
        let headers = new Headers();
        headers.append('auth-token', '5976ea531c0edf75e32798d5');
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this._http.get(url+index,options).
            map((response: Response) => response.json());
    }


}