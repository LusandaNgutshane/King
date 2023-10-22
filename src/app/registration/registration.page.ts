import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentRegistrationSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Registration Successful',
      message: 'Thank you for registering with Eric King Design!',
      buttons: ['OK']
    });
  
    await alert.present();
  }
  

}
