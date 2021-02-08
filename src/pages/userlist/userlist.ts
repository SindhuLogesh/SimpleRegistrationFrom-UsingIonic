import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'page-userlist',
  templateUrl: 'userlist.html'
})
export class UserListPage {
  users = [];
  constructor(public navCtrl: NavController, public storage: Storage) {
    
  }
  ionViewWillEnter(){
    this.storage.get('users').then((val) => {
      this.users = val || [];
      console.log(val);
    });
  }
}
