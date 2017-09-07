import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { ProductService } from "../../service/ProductService/ProductService.service";
import { UserAuthService } from "../../service/userAuth/userAuth.service";

@Component({
    selector: 'advertisementTable',
    templateUrl: `./advertable.component.html`,
    styleUrls: ['./advertable.component.css']
})

export class AdvertisementTableComponent {
    allAdver: any;
    a_token: any;
    constructor(private productService: ProductService, private router: Router, private authService: UserAuthService) {
        console.log("auth token add product", authService.authToken);
        this.a_token = authService.authToken;
        if(this.a_token!= null) {
            this.displayAd();
             console.log("Null not going here auth token", this.a_token);
        }
        else {
            console.log("Null auth token", this.a_token);
        }
    }

    displayAd() {
        this.productService.displayAllAdv().subscribe((data) => {
            console.log('Response! a : ', data)
            this.allAdver = data.data.mypostList;
            //console.log('Response! 2: ', this.allAdver);
        });
    }
    deleteObject(obj: any) {
        console.log("Index of del", obj.id);
        this.productService.deleteAd(obj.id).subscribe((data) => {
            console.log("Delete ", data);
            this.displayAd();
        });
        
        //console.log("After delete ",this.displayAd());
    }
    editObject(obj: any) {
        console.log("Index of del", obj.id);
        this.router.navigate(['/editForm', obj.id]);
    }

}
