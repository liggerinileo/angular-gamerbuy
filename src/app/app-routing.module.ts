import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamerbuyAboutComponent } from './gamerbuy-about/gamerbuy-about.component';
import { GamerbuyPcComponent } from './gamerbuy-pc/gamerbuy-pc.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pcComponents',
    pathMatch: 'full'
  },
  {
    path: 'pcComponents',
    component: GamerbuyPcComponent
  },
  {
    path: 'about',
    component: GamerbuyAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
