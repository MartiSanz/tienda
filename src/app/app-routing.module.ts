import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { TiendaAboutComponent } from './tienda-about/tienda-about.component';
import { TiendaProductosComponent } from './tienda-productos/tienda-productos.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'productos',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component: TiendaProductosComponent
  },
  {
    path: 'about',
    component: TiendaAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
