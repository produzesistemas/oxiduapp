import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstablishmentDetailPage } from './establishment-detail.page';

import { EstablishmentDetailPageModule } from './establishment-detail.module';

const routes: Routes = [
  {
    path: '',
    component: EstablishmentDetailPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstablishmentDetailPageRoutingModule {}
