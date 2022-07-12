import { Component, OnInit, } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-payement',
  templateUrl: './payement.page.html',
  styleUrls: ['./payement.page.scss'],
})
export class PayementPage implements OnInit {

  constructor(private loadingControler: LoadingController) { }

  ngOnInit() {
  }

}


export class LoadingExample {
  constructor(public loadingController: LoadingController) {}

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
  }
}