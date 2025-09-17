import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { CarouselComponent } from './pages/carousel/carousel.component';

const routes: Routes = [
           // Default route
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  {path:'carousel',component:CarouselComponent},

  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
