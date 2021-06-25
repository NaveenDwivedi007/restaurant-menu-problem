import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/content/home/home.component';
import { MenuCardComponent } from './component/content/menu-card/menu-card.component';
import { PagenotfoundComponent } from './component/content/pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: 'solution', component: MenuCardComponent},
  { path: '', component: HomeComponent},
  { path: '**',      component:  PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
