import { Component, inject, OnInit, signal } from '@angular/core';
import { AsideListComponent } from "../aside-list/aside-list.component";
import { GuildRanking, PlayerRanking } from '../../../metin2/interfaces/ranking.interface';
import { RankingService } from '../../../metin2/services/ranking.service';

@Component({
  selector: 'app-left-sidebar',
  imports: [AsideListComponent],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent implements OnInit {

  private rankingService = inject(RankingService);

  public playerRanking = signal<PlayerRanking[]>([]);

  public guildRanking = signal<GuildRanking[]>([]);

  ngOnInit(): void {
    
    this.rankingService.getPlayerRanking()
      .subscribe (
        ranking => this.playerRanking.set(ranking)
      );

    this.rankingService.getGuildRanking()
      .subscribe(
        ranking => this.guildRanking.set(ranking)
      );
    
  }

}
