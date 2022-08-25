import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutModule)
  },
  {
    path: 'establishment/:id',
    loadChildren: () => import('./establishment/establishment.module').then( m => m.EstablishmentPageModule)
  },
  {
    path: 'establishment-detail/:id',
    loadChildren: () => import('./establishment-detail/establishment-detail.module').then( m => m.EstablishmentDetailPageModule)
  },
  {
    path: 'establishment-board-model/:id',
    loadChildren: () => import('./establishment-board-model/establishment-board-model.module').then( m => m.EstablishmentBoardModelPageModule)
  },

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
