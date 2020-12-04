import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PcListComponent } from './pc-list/pc-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { FormsModule } from '@angular/forms';
import { GamerbuyAboutComponent } from './gamerbuy-about/gamerbuy-about.component';
import { GamerbuyPcComponent } from './gamerbuy-pc/gamerbuy-pc.component';

@NgModule({
  declarations: [
    AppComponent,
    PcListComponent,
    ShoppingCartComponent,
    GamerbuyAboutComponent,
    GamerbuyPcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
