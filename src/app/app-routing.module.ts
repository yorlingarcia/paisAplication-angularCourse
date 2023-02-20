import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    // configuracion de la ruta principal
    path: '', // el primer componente
    component: PorPaisComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: PorRegionComponent,
  },
  {
    path: 'capital',
    component: PorCapitalComponent,
  },
  {
    path: 'pais/:id', //para poder ser dinamico
    component: VerPaisComponent,
  },
  {
    // Para redireccionar para algo que no exista
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [],
  exports: [],
})
export class AppRoutingModule {}
