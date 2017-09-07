import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { UserAuthService } from "../../service/userAuth/userAuth.service";
import { ProductService } from "../../service/ProductService/ProductService.service";

@Component({
    selector: 'start-page',
    templateUrl: `./startpage.component.html`,
    styleUrls:  ['./startpage.component.css']
})

export class StartPageComponent {
     constructor(private productService: ProductService, private router: Router, private authService: UserAuthService) {
         console.log("auth token start page", authService.authToken);
    }
    onClick(goTo: any) {
        this.router.navigate([goTo]);
    }
    callCat(cat: any) {
        //  this.productService.getSpecificAdvertisements(cat).subscribe((data) => {
        //     console.log('Category data ', data)
        // });
        this.router.navigate(['/dispCat', cat]);
    }
}