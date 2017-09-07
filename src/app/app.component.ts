import { Component } from '@angular/core';

import { UserAuthService } from "./service/userAuth/userAuth.service";
import { ProductService } from "./service/ProductService/ProductService.service";

@Component({
  selector: 'my-app',
  template: `<nav-bar></nav-bar><router-outlet></router-outlet>`,
  providers: [ProductService, UserAuthService],
})
export class AppComponent  { name = 'Angular'; }
