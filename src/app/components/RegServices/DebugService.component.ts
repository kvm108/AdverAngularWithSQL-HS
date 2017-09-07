import { Component, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from "../../service/ProductService/ProductService.service";


@Component({
    selector: 'debug-form',
    templateUrl: './debugForm.html',
})

export class RegFormComponent {
    title = "Reg Advertisement";
    
    categoryOptions: any = [];

    constructor(private productService: ProductService) {
        this.productService.getCategories().subscribe((data) => {
            this.categoryOptions = data.data.itemList;
            console.log("Category ", data);
        });
    }
   
    onSubmit(data: any) {
        this.productService.register(data).subscribe((data) => {
            console.log('Response: ', data)
            console.log("message ",data.data.message);
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