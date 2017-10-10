import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { TeamsPage } from '../pages';
import { EliteApi } from '../../shared/shared';

@Component({
  templateUrl: 'tournaments.page.html',
})
export class TournamentsPage {

  tournaments: any;

  constructor(private nav: NavController, private api: EliteApi, private loadingController: LoadingController) {

  }

  itemTapped($event, tourney) {
    this.nav.push(TeamsPage, tourney);
  }

  ionViewDidLoad(){


    var loader = this.loadingController.create({content:'Loading...'});
    loader.present().then(()=>{
      this.api.getTournaments().then(data => {
        this.tournaments = data
        loader.dismiss();
      });
    });

    
    console.log('## lifecycle ## ionViewDidLoad');
  }

  ionViewWillEnter() {
    console.log('## lifecycle ## ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('## lifecycle ## ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('## lifecycle ## ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('## lifecycle ## ionViewDidLeave');
  }

  ionViewDidUnload() {
    console.log('## lifecycle ## ionViewDidUnload');
  }
}
