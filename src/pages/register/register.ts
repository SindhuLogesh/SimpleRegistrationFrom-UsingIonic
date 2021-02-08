import { Component } from '@angular/core';
import { NavController, Toast } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  user = {
    name: "",
    gender:"",
    dob:"",
    mail: "",
    address:"",
    phoneno:0,


  };

  users = [];

  constructor(public navCtrl: NavController, public storage: Storage, public toastCtrl: ToastController) {

  }
  ionViewWillEnter() {
    this.storage.get('users').then((val) => {
      this.users = val || [];
    });

  }
  register() {

    if (this.user.name == undefined || this.user.name == "") {
      alert("Please enter your name");
      return;
    }

    if (this.user.mail == undefined || this.user.mail == ""
        || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.mail))) {
      alert("Please enter valid mail id");
      return;
        }
    
        if(this.user.phoneno==undefined||this.user.phoneno==0){
          alert("Please enter valid mobile no");
        return;
      }
      this.users.push(this.user);
      this.storage.set('users', this.users);

      this.toastMessage('User Registered Successfully');
  }

  toastMessage(string) {
    let toast = this.toastCtrl.create({
      message: string,
      duration: 2000,
      position: 'middle'
    });
    toast.present(toast);
  }

}