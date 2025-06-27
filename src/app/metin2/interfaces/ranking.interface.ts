import { KingdomType } from "./kingdom.type";


export interface RankingBase {
    rank: number;
    name: string;
    kingdom: KingdomType
}


export interface PlayerRanking extends RankingBase {
    level: number;
    class?: string;
}

export interface GuildRanking extends RankingBase {
    points: number;
}

export type RankingType = 'PLAYER' | 'GUILD'
