import { Component } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from "../../service/ProductService/ProductService.service";

@Component({
    selector: 'dispcat',
    templateUrl: `./dispcat.html`,
    styleUrls: ['./dispbycat.component.css']
})

export class DispCatComponent {
    cat: any;
    allAdver: any;

    constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {
        this.cat = this.activatedRoute.snapshot.params['cat'];
        this.displayAd()
    }
    
    onSubmit(data: any) {
        this.productService.login(data).subscribe((data) => {
            console.log('Response: ', data)
        });

    }
    displayAd() {
        this.productService.getSpecificAdvertisements(this.cat).subscribe((data) => {
            console.log('new page ', data)
            this.allAdver = data.data.advertiseList;
            //console.log('Response! 2: ', this.allAdver);
        });
    }
}