import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstablishmentBoardModelPage } from './establishment-board-model.page';

const routes: Routes = [
  {
    path: '',
    component: EstablishmentBoardModelPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstablishmentBoardModelRoutingModule {}
