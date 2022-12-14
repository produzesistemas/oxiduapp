import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstablishmentBoardModelRoutingModule } from './establishment-board-model-routing.module';

import { EstablishmentBoardModelPage } from './establishment-board-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstablishmentBoardModelRoutingModule
  ],
  declarations: [EstablishmentBoardModelPage]
})
export class EstablishmentBoardModelPageModule {}
