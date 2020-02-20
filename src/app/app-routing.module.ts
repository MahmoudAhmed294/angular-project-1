import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LtloginComponent } from './share/layouts/ltlogin/ltlogin.component';
import { LoginComponent } from './share/Component/login/login.component';
import { RegisterComponent } from './share/Component/register/register.component';
import { HomeComponent } from './share/Component/home/home.component';
import { AccessGuard } from './share/access.guard';
import { ProductsComponent } from './share/Component/products/products.component';
import { CartComponent } from './share/Component/cart/cart.component';
import { NavbarsComponent } from './share/layouts/navbars/navbars.component';


const routes: Routes = [
  {
    

  
    path:'',
    component:LtloginComponent,
    children:[
      {
        path:'login',
        component:LoginComponent
      },
              {
            path:'',
            component:LoginComponent
              },
  {
path:'register',
component:RegisterComponent
  }
]
},
{
path:'details',
component:NavbarsComponent,
canActivate:[AccessGuard],
children:[
{
  path:'h',
component:HomeComponent,
// canActivate:[AccessGuard]
},
{path:'products',
component:ProductsComponent,
// canActivate:[AccessGuard]
},
{path:'cart',
component:CartComponent,
// canActivate:[AccessGuard]
}
]
}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
