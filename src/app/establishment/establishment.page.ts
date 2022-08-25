import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Establishment } from '../_model/establishment-model';
import { FilterDefaultModel } from '../_model/filter-default-model';
import { CategoryService } from '../_services/category.service';
import { EstablishmentService } from '../_services/establishment.service';
import { NavController } from '@ionic/angular';
import { IonLoadingService } from '../_services/ion-loading.service';
@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.page.html',
  styleUrls: ['./establishment.page.scss'],
})
export class EstablishmentPage implements OnInit {
  public stateId: string;
  category: any;
  public title: string;
  establishments: Establishment[];
  constructor(private activatedRoute: ActivatedRoute,
    private establishmentService: EstablishmentService,
    private categoryService: CategoryService,
    private ionLoaderService: IonLoadingService,
    private navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {
    this.stateId = this.activatedRoute.snapshot.paramMap.get('id');
    let state = this.categoryService.getState(Number(this.stateId));
    this.title = 'Fabricantes de pranchas de surf - ' + state.description;
    const filter: FilterDefaultModel = new FilterDefaultModel();
    this.ionLoaderService.simpleLoader().then(() => {
    filter.id = Number(this.stateId);
    this.establishmentService.getByState(filter).subscribe(establisments => {
      this.establishments = establisments;
      this.ionLoaderService.dismissLoader();
    });
    });
  }

  getImage(nomeImage) {
    return environment.urlImagesEstablishment + nomeImage;
  }

  onDetail(establishment) {
    this.navCtrl.navigateForward(["establishment-detail", establishment.id]);
  }

  onOrder(establishment) {
    this.navCtrl.navigateForward(["establishment-board-model", establishment.id]);
  }
  

}