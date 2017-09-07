import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from "../../service/ProductService/ProductService.service";


@Component({
    selector: 'prod-det',
    templateUrl: './proddetail.html',
})

export class ProdDetailComponent {
    title = "Add Advertisement";
    
    //categoryOptions = [{ name: 'Furniture', value: 'Furniture' }, { name: 'Hardware', value: 'Cloths' }, { name: 'Mobile', value: 'Mobile' }, { name: 'Real Estate', value: 'Real Estate' }];

    categoryOptions: any = [];

    constructor(private productService: ProductService) {
        this.productService.getCategories().subscribe((data) => {
            this.categoryOptions = data.data.itemList;
            console.log("Category ", data);
        });
    }
   
    onSubmit(data: any) {
        console.log("on post twice !! ");
        this.productService.postAd(data).subscribe((data) => {
            console.log('Response: ', data)
        });

        this.dispAll();
    }


    //getCategories to print all categories, use getCategories.html
    onClicked() {
        this.productService.getCategories().subscribe((data) => {
            console.log(data)
        });
    }

    dispAll() {
        this.productService.displayAllAdv().subscribe((data) => {
            console.log('Response!: ', data)
        });
    }
}