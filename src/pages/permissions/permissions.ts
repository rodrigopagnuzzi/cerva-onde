import { TabsPage } from './../tabs/tabs.page';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {StatusBar} from "@ionic-native/status-bar";
import {Firebase} from '@ionic-native/firebase';

/*
  Generated class for the Permissions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-permissions',
  templateUrl: 'permissions.html'
})
export class PermissionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              statusBar: StatusBar,
              private firebase: Firebase) {

    statusBar.backgroundColorByHexString('#683027');

  }

  ionViewDidLoad() {

      this.firebase.setScreenName('Permissions');
    console.log('ionViewDidLoad PermissionsPage');
  }

  onActivateLocation() {

  }

  onSkip() {

    this.navCtrl.setRoot(TabsPage);

  }
}
