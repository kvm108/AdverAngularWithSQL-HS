import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule} from '@angular/router'; 

// All Components
import { PostFormComponent } from './components/RESTCallServices/PostService.component'
import { NavBarComponent } from "./components/NavBar/navbar.component";
import { StartPageComponent } from "./components/StartPage/startpage.component";
import { AdvertisementTableComponent } from "./components/AdverTable/advertable.component";
import { EditFormComponent } from "./components/EditAdv/EditAdv.component";
import { RegFormComponent } from "./components/RegServices/DebugService.component";
import { ProdDetailComponent } from "./components/ProdDetails/ProdDetail.component";
import { DispCatComponent } from "./components/DispByCategories/dispCat.component";

@NgModule({
  imports: [BrowserModule,  HttpModule, FormsModule, ReactiveFormsModule, 
    RouterModule.forRoot([{path: 'postAd', component: PostFormComponent},
                          {path: '', component: StartPageComponent},
                          {path: 'adTable', component: AdvertisementTableComponent},
                          {path: 'editForm/:id', component: EditFormComponent},
                          {path: 'dispCat/:cat', component: DispCatComponent},
                          {path: 'prodDet/:id', component: ProdDetailComponent},
                          ])],
  declarations: [ AppComponent , PostFormComponent, NavBarComponent, StartPageComponent, AdvertisementTableComponent, EditFormComponent, DispCatComponent, RegFormComponent, ProdDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
