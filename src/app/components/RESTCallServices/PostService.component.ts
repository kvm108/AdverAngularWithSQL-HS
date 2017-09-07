import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from "../../service/ProductService/ProductService.service";
import { UserAuthService } from "../../service/userAuth/userAuth.service";


@Component({
    selector: 'debug-form',
    templateUrl: './postForm.html',
    styleUrls:  ['./postAd.css']
})

export class PostFormComponent {
    title = "Add Advertisement";
    //categoryOptions = [{ name: 'Furniture', value: 'Furniture' }, { name: 'Hardware', value: 'Cloths' }, { name: 'Mobile', value: 'Mobile' }, { name: 'Real Estate', value: 'Real Estate' }];
    fname: any;
    categoryOptions: any = [];
    a_token: any;
    public disp=false; 

    constructor(private productService: ProductService, private router: Router, private authService: UserAuthService) {
        console.log("auth token add product", authService.authToken);
        this.a_token = authService.authToken;
        if(this.a_token!= null) {
            this.disp = true;
            console.log("post", this.a_token, this.disp);
        }
        else {
            console.log("Null auth token", this.a_token);
             console.log("null post", this.a_token, this.disp);
        }
        this.productService.getCategories().subscribe((data) => {
            this.categoryOptions = data.data.itemList;
            console.log("Category ", data);

        });
    }

    onSubmit(data: any) {
        console.log("on post once"+data);
        this.productService.postAd(data).subscribe((data) => {
            console.log('Response: ', data)
        });

        this.dispAll();

        this.onClick("adTable");
    }


    //getCategories to print all categories, use getCategories.html
    onClicked() {
        this.productService.getCategories().subscribe((data) => {
            console.log("In post ad", data)
        });
    }

    dispAll() {
        console.log("On submit diaplay ");
        this.productService.displayAllAdv().subscribe((data) => {
            console.log('Response!: ', data)
        });
    }

    onClick(goTo: any) {
        this.router.navigate([goTo]);
    }
}
