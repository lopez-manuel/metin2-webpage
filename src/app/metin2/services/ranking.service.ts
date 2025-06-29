import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { GuildRanking, PlayerRanking } from "../interfaces/ranking.interface";
import { guildRankingData, playerRankingData } from "../data/ranking";




@Injectable({providedIn: 'root'})
export class RankingService {

    

    public getPlayerRanking():Observable<PlayerRanking[]>{
        return of(playerRankingData).pipe(
            delay(300),
        );
    }

    public getGuildRanking():Observable<GuildRanking[]>{
        return of(guildRankingData).pipe(
            delay(400),
        );
    }

}