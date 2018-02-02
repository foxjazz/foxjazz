import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {LinksComponent} from "./links/links.component";
import {PortfolioComponent} from "./portfolio/portfolio.component";

const appRoutes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'links',      component: LinksComponent }];

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    LinksComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
        { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
