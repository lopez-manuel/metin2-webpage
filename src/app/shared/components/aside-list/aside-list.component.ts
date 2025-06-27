import { Component, input } from '@angular/core';
import { GuildRanking, PlayerRanking,RankingType } from '../../../metin2/interfaces/ranking.interface';
import { TitleCasePipe } from '@angular/common';




@Component({
  selector: 'app-aside-list',
  imports: [TitleCasePipe],
  templateUrl: './aside-list.component.html',
  styleUrl: './aside-list.component.css'
})
export class AsideListComponent {

  public rankingData = input.required<PlayerRanking[] | GuildRanking[]>();

  public rankType = input.required<RankingType>();

  public getPlayerRanking(){

    if(this.rankingData().length === 0 || !this.rankingData()[0].hasOwnProperty('level')){
      return [];
    }

    return this.rankingData() as PlayerRanking[];
  }

  public getGuildRanking(){
    if(this.rankingData().length === 0 || !this.rankingData()[0].hasOwnProperty('points')){
      return [];
    }

    return this.rankingData() as GuildRanking[];
  }

}
