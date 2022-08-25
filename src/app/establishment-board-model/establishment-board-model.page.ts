import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Establishment } from '../_model/establishment-model';
import { FilterDefaultModel } from '../_model/filter-default-model';
import { CategoryService } from '../_services/category.service';
import { EstablishmentService } from '../_services/establishment.service';
import { LoadingController } from '@ionic/angular';
import { IonLoadingService } from '../_services/ion-loading.service';
import { BoardModelService } from '../_services/board-model.service';
import { BoardModel } from '../_model/board-model-model';
@Component({
  selector: 'app-establishment-board-model',
  templateUrl: './establishment-board-model.page.html',
  styleUrls: ['./establishment-board-model.page.scss'],
})
export class EstablishmentBoardModelPage implements OnInit {
  public parameter: string;
  boardModels: BoardModel[];
  constructor(private activatedRoute: ActivatedRoute, 
    private boardModelService: BoardModelService,
    private ionLoaderService: IonLoadingService,
    private router: Router) { }

  ngOnInit() {
    this.parameter = this.activatedRoute.snapshot.paramMap.get('id');
    const filter: FilterDefaultModel = new FilterDefaultModel();
    filter.establishmentId = Number(this.parameter);
    this.ionLoaderService.simpleLoader().then(()=>{
      this.boardModelService.filterAnonymous(filter).subscribe(result => {
        this.boardModels = result;
        this.ionLoaderService.dismissLoader();
      });

    });
  }

  getImage(nomeImage) {
    return environment.urlImagesLojas + nomeImage;
}

detail(establishment) {
  this.router.navigate([`establishment-board-model-detail/${establishment.id}`]);
}



}