import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { AsyncComponent } from './async/async.component';
import { MaterialComponent } from './material/material.component';


const routes: Routes = [
  {path:'', component:ProductListComponent},
  {path:'products/:productId', component:ProductDetailsComponent},
  {path:'cart', component:CartComponent},
  {path:'shipping', component:ShippingComponent},
  {path:'async', component:AsyncComponent},
  {path:'mat', component:MaterialComponent},
  {
    path: 'customers',
    loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
