import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Establishment } from '../_model/establishment-model';
import { FilterDefaultModel } from '../_model/filter-default-model';
import { BoardModelService } from '../_services/board-model.service';
import { CategoryService } from '../_services/category.service';
import { EstablishmentService } from '../_services/establishment.service';
import { IonLoadingService } from '../_services/ion-loading.service';

@Component({
  selector: 'app-establishment-detail',
  templateUrl: './establishment-detail.page.html',
  styleUrls: ['./establishment-detail.page.scss'],
})
export class EstablishmentDetailPage implements OnInit {
  public establishmentId: string;
  category: any;
  public title: string;
  establishment: Establishment;
  constructor(private activatedRoute: ActivatedRoute, 
    private establishmentService: EstablishmentService,
    private boardModelService: BoardModelService,
    private ionLoaderService: IonLoadingService,
    private router: Router,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.establishmentId = this.activatedRoute.snapshot.paramMap.get('id');
    this.ionLoaderService.simpleLoader().then(()=>{
      this.establishmentService.getById(Number(this.establishmentId)).subscribe(result => {
      this.establishment = result;
      this.title = this.establishment.description;
      this.ionLoaderService.dismissLoader();
    });
  });
  }

  getImage(nomeImage) {
    return environment.urlImagesEstablishment + nomeImage;
}

onOrder() {
  this.router.navigate([`establishment-board-model/${this.establishment.id}`]);
}

}