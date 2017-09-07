import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ActivatedRoute } from '@angular/router';
import { ProductService } from "../../service/ProductService/ProductService.service";

@Component({
    selector: 'edit-form',
    templateUrl: './editadv.component.html',
})

export class EditFormComponent {
    hardvalue: any;
    id: any;
    categoryOptions: any = [];
    dispAllAdver: any;
    edescription: any; ename: any; ecategory: any; etitle: any;

    // ngOnInit(): void {
    // }

    constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {
        this.id = this.activatedRoute.snapshot.params['id'];
        console.log("Id after ", this.id);

        this.productService.getCategories().subscribe((data) => {
            console.log("Data", data);
            this.categoryOptions = data.data.itemList;
            console.log("Category ", this.categoryOptions);

        });

        this.dispAll();
    }

    title = "Edit Advertisement";
    //categoryOptions = [{ name: 'Furniture', value: 'Furniture' }, { name: 'Hardware', value: 'Cloths' }, { name: 'Mobile', value: 'Mobile' }, { name: 'Real Estate', value: 'Real Estate' }];
    fname: any;

    onSubmit(data: any) {
        this.productService.editAd(data, this.id).subscribe((data) => {
            console.log('Response edited data: ', data)
        });

        this.dispAll();

        this.onClick("adTable");
    }


    //getCategories to print all categories, use getCategories.html
    onClicked() {
        this.productService.getCategories().subscribe((data) => {
            console.log(data)
        });
    }

    dispAll() {
        this.productService.displayAllAdv().subscribe((data) => {
            //console.log('Response!: ', data);
            this.dispAllAdver = data.data.mypostList;
            //console.log('Response!: ', this.dispAllAdver);
            this.findTheId();
        });
    }

    findTheId() {
        this.hardvalue = this.dispAllAdver.find((x:any) => x.id === this.id);
        this.edescription = this.hardvalue.description;
        this.ename = this.hardvalue.name;
        this.ecategory = this.hardvalue.category;
        this.etitle = this.hardvalue.title;
        //console.log("hard code after", this.hardvalue);
    }
    onClick(goTo: any) {
        this.router.navigate([goTo]);
    }
}
