import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PcListComponent } from './pc-list/pc-list.component';

// import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GamerbuyAboutComponent } from './gamerbuy-about/gamerbuy-about.component';
import { GamerbuyPcComponent } from './gamerbuy-pc/gamerbuy-pc.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    PcListComponent,
    GamerbuyAboutComponent,
    GamerbuyPcComponent,
    InputIntegerComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
