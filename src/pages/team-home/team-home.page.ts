import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyTeamsPage, StandingsPage, TeamDetailPage } from '../pages';

@Component({
  templateUrl: 'team-home.page.html',
})
export class TeamHomePage {

  team: any;

  standingsTab = StandingsPage;

  teamDetailTab = TeamDetailPage;

  constructor(private nav: NavController, private navParams: NavParams) {

    this.team = navParams.data;
  }

  goHome() {

    // this.nav.push(MyTeamsPage);
    this.nav.popToRoot();
  }

}
