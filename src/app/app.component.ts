import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from './_services/category.service';
import { NavController, ToastController, Platform } from '@ionic/angular';
import { PluginListenerHandle } from '@capacitor/core';
import { Network } from '@capacitor/network';
import { App } from '@capacitor/app';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  lstCategorys: any[];
  states: any[];
  toggle = false;
  networkStatus: any;
  networkListener: PluginListenerHandle;

  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private platform: Platform,
    public toastController: ToastController,
    //  private routerOutlet: IonRouterOutlet,
    private navCtrl: NavController
  ) {
    // this.platform.backButton.subscribeWithPriority(10, () => {
    //   if (!this.routerOutlet.canGoBack()) {
    //     App.exitApp();
    //   }
    // });
  }

  async ngOnInit() {
    this.states = this.categoryService.getStates();

  }

  sidemenuClick() {
    this.toggle ? this.toggle = false : this.toggle = true;
  }

  async filter(state) {
    this.networkStatus = await Network.getStatus();
    if (this.networkStatus.connected === false) {
      return this.presentToast("Dispositivo sem internet. Verifique a conexão e tente novamente.");
    }
    this.navCtrl.navigateForward(["establishment", state.id]);
  }

  async presentToast(error: string) {
    const toast = await this.toastController.create({
      message: error,
      duration: 2000,
      position: 'top'
    });

    toast.present();
  }

  onMenu() {
    this.navCtrl.navigateForward(["about"]);
  }
}
