import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProjectpageComponent } from './component/projectpage/projectpage.component';
import { SeavepageComponent } from './component/seavepage/seavepage.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutsComponent } from './component/abouts/abouts.component';
const routes: Routes = [
  {
    path: "",
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: "home",
    component: HomeComponent,

  },
  {
    path: "project",
  
    component:ProjectpageComponent
  },
  {
    path: "seave",
  
    component:SeavepageComponent 
  },
  {
    path: "contact",
  
    component:ContactComponent
  },
  {
    path: "abouts",
  
    component:AboutsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
