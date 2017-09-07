import { Injectable } from "@angular/core";

@Injectable()
export class UserAuthService{
    userLoggedIn : boolean = false;
    authToken : any;
    //call this function when login status changes
    changeLoginStatus(status: boolean, authT: any){
        this.userLoggedIn = status;
        this.authToken = authT;
    }
}