import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../_services/category.service';
import { NavController, ToastController } from '@ionic/angular';
import { PluginListenerHandle } from '@capacitor/core';
import { Network } from '@capacitor/network';
import { FilterDefaultModel } from '../_model/filter-default-model';
import { IonLoadingService } from '../_services/ion-loading.service';
import { EstablishmentService } from '../_services/establishment.service';
import { Establishment } from '../_model/establishment-model';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  states: any[];
  toggled = false;
  hasFilter = false;
  networkStatus: any;
  networkListener: PluginListenerHandle;
  establishments: Establishment[];
  titleFilter: any;
  form: FormGroup;
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private establishmentService: EstablishmentService,
    private ionLoaderService: IonLoadingService,
    public toastController: ToastController,
    private formBuilder: FormBuilder
    ) { }

    slideOpts = {
      initialSlide: 0,
      slidesPerView: 1,
      autoplay: true,
      speed: 400
    }

    afterslidesLoad(slides) {
      slides.startAutoplay();
    }

  async ngOnInit() {
    this.states = this.categoryService.getStates();
    this.form = this.formBuilder.group({
      search: ['', Validators.required]
  });
  }

  async filter(state) {
    this.networkStatus = await Network.getStatus();
    if (this.networkStatus.connected === false) {
      return this.presentToast("Dispositivo sem internet. Verifique a conexão e tente novamente.");
    }
    const filter: FilterDefaultModel = new FilterDefaultModel();
    this.ionLoaderService.simpleLoader().then(() => {
    filter.id = state.id;
    this.establishmentService.getByState(filter)
    .subscribe(establisments => {
      if (establisments.length === 0) {
        this.establishments = [];
      return this.presentToast("Nenhum registro encontrado!");
     } else {
      this.establishments = establisments;
      this.titleFilter = this.establishments.length + ' encontrado(s) na ' + state.description;
      this.hasFilter = true;
     }
     this.ionLoaderService.dismissLoader();
    });
    });
  }

  async presentToast(error: string) {
    const toast = await this.toastController.create({
      message: error,
      duration: 2000,
      position: 'top'
    });

    toast.present();
  }

  getImage(nomeImage) {
    return environment.urlImagesEstablishment + nomeImage;
  }

onBackFilter() {
  this.hasFilter = false;
}

public toggle(): void {
  this.toggled = !this.toggled;
}

async search() {
  if (this.form.invalid) {
      return;
  }
  this.networkStatus = await Network.getStatus();
  if (this.networkStatus.connected === false) {
    return this.presentToast("Dispositivo sem internet. Verifique a conexão e tente novamente.");
  }
  const filter: FilterDefaultModel = new FilterDefaultModel();
  this.ionLoaderService.simpleLoader().then(() => {
  filter.name = this.form.controls.search.value;
  this.establishmentService.getByDescription(filter).subscribe(establisments => {
    this.ionLoaderService.dismissLoader();
    if (establisments.length === 0) {
      this.establishments = [];
    return this.presentToast("Nenhum registro encontrado!");
   } else {
    this.establishments = establisments;
    this.titleFilter = this.establishments.length + ' encontrado(s)';
    this.hasFilter = true;
    this.toggled = !this.toggled;
   }

  });
  });
}

}
