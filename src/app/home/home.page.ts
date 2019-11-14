import { Component } from '@angular/core';
import { NavController, IonNav, ActionSheetController, ToastController } from '@ionic/angular';
import { ButtonsPage } from '../buttons/buttons.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navctrl: NavController, public rr: Router, public asc: ActionSheetController,
    public tc: ToastController) {
    console.log("HOME PAGE");
  }

  gotoOffice() {
    console.log("NAV")
    // this.rr.navigateByUrl('buttons');
    //this.navctrl.navigateForward('buttons')
    //this.navctrl.navigateRoot('buttons')
  }

  actionsheet() {
    console.log("ACTIONSHEET")

    let a = this.asc.create({
      header: 'Select from below',
      buttons: [
        {
          text: 'Delete', role: 'destructive', icon: 'logo-facebook', handler: () => {
            console.log("Delete Clicked");
            let t = this.tc.create({
              header: 'Toast header',
              message: "Delete Clicked",
              showCloseButton: true,
              duration: 2000
            }).then(tst => {
              tst.present();
            });
          }
        },
        { text: 'Share' },
        {
          text: 'Play', handler: () => {
            console.log("PLay Clicked");
            const toast = this.tc.create({
              header: 'Toast header',
              message: 'Click to Close',
              position: 'middle',
              buttons: [
                {
                  side: 'start',
                  icon: 'star',
                  text: 'Favorite',
                  handler: () => {
                    console.log('Favorite clicked');
                  }
                }, {
                  text: 'Done',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                  }
                }
              ]
            }).then(tst => {
              tst.present();
            });
          }
        },
        { text: 'Favorite' },
        { text: 'Cancel', role: 'cancel' }
      ]
    }).then(actionSheet => {
      actionSheet.present();
    });


  }


}
