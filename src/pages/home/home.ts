import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  counter : number = 0;
  message : string = "";
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public toastCtrl: ToastController) {
  }

  increment(){
  	this.counter++;
	this.message="";
  	// console.log('up > '+this.counter);
  }

  decrement(){

  	// console.log('down > '+this.counter);
  	if(this.counter<=0)
  	{
  		let toast = this.toastCtrl.create({
	      message: 'NUmber cannot be lesser than 0!',
	      duration: 1000
	    });
	    toast.present();
  		// this.message="number is less than 0";
  		// let alert = this.alertCtrl.create({
	   //    title: 'Alert!',
	   //    subTitle: 'NUmber cannot be lesser than 0!',
	   //    buttons: ['OK']
	   //  });
	   //  alert.present();
  	}
  	else
  	{
  		this.counter--;
  		this.message="";
  	}
  }

  reset(){
  	let confirm = this.alertCtrl.create({
      title: 'RESET',
      message: 'Do you agree to reset?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            // console.log('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {
          	this.counter = 0;
			this.message="";
            // console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  	
  	// console.log('reset > '+this.counter);
  }



}
