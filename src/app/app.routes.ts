import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SummaryComponent } from './pages/summary-component/summary-component.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  {path:'Menu' , component:MenuComponent},
  { path: '**', redirectTo: '' },
  {path:'summary' , component:SummaryComponent},

];
