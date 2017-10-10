import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { MyTeamsPage } from '../pages';

@Component({
  templateUrl: 'team-detail.page.html',
})
export class TeamDetailPage {

  team: any;

  constructor(private nav: NavController, private navParams: NavParams) {

    this.team = this.navParams.data;

    console.log('**nav params:', this.navParams.data);
  
  }

  goHome() {
    this.nav.parent.parent.popToRoot();
  }

}
