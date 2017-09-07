import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { UserAuthService } from "../../service/userAuth/userAuth.service";
import { ProductService } from "../../service/ProductService/ProductService.service";
declare var jQuery: any;

@Component({
    selector: 'nav-bar',
    templateUrl: `./navbar.component.html`,
    styleUrls: ['./navbar.component.css']
})

export class NavBarComponent {

    authToken: any;
    public edited = false;
    username: any;
    public regSuccess = true;
    public success = true;

    constructor(private router: Router, private productService: ProductService, private authService: UserAuthService) {
    }

    editObject(obj: any) {
        console.log("Index of del", obj.id);
        this.router.navigate(['/blank', obj.id]);
    }

    onSubmit(data: any) {
        console.log('Response: sending obj', data);
        this.productService.login(data).subscribe((data) => {
            console.log( data);
            this.username = data.data.userId;
            //console.log('Name: ', this.username);
            this.authToken = data.data["auth-token"];
            console.log('auth token ', this.authToken);
            console.log("setting auth token!",this.productService.setAuthToken(this.authToken));

            if (this.authToken === null) {
                console.log("canoot login wrong credentials");
                this.edited = true;
            }
            else {
                this.edited = false;
                console.log("successful");
                jQuery("#myModal").modal('hide');
                this.authService.changeLoginStatus(true, this.authToken);
                console.log("changed", this.authToken, this.authService.authToken);
                //this.refresh();
                //this.onClick('');
            }
        });
    }

    onRegister(data: any) {
        // console.log('Response: sending obj', data);
        this.productService.register(data).subscribe((data) => {
            // console.log("after register returning going here?");
            try {
                console.log("data reg message here: ", data.message);
                if(data.message === "Registration Successful"){
                    this.regSuccess = true;
                    this.success = false;
                    console.log("successful");
                }
                else {
                    this.regSuccess = false;
                    this.success = true;
                    console.log("not successful");
                }
            }
            catch(error) {
                 this.regSuccess = false;
                 console.log("not successful", error);
            }
            
        });
         console.log("after this ish", data);
    }

    onClick(goTo: any) {
        this.router.navigate([goTo]);
    }
    refresh(): void {
        window.location.reload();
    }
    Logout() {
        this.authService.changeLoginStatus(false, null);
    }

}