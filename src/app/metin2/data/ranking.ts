import { GuildRanking, PlayerRanking } from "../interfaces/ranking.interface";



export const playerRankingData: PlayerRanking[] = [
  {"rank": 1,"name": "DarkBlade","level": 120,"class": "Warrior","kingdom": 'chunjo',},
  {"rank": 2,"name": "ShadowQueen","level": 119,"class": "Ninja","kingdom": "chunjo"},
  {"rank": 3,"name": "FireDrake","level": 118,"class": "Sura","kingdom": "jinno"},
  {"rank": 4,"name": "IceFang","level": 117,"class": "Shaman","kingdom": "shinsoo"},
  {"rank": 5,"name": "NightWolf","level": 117,"class": "Ninja","kingdom": "chunjo"},
  {"rank": 6,"name": "BladeMaster","level": 116,"class": "Warrior","kingdom": "jinno"},
  {"rank": 7,"name": "SkyBreaker","level": 115,"class": "Sura","kingdom": "shinsoo"},
  {"rank": 8,"name": "DivineLight","level": 114,"class": "Shaman","kingdom": "chunjo"},
  {"rank": 9,"name": "SilentArrow","level": 113,"class": "Ninja","kingdom": "jinno"},
  {"rank": 10,"name": "WarTiger","level": 112,"class": "Warrior","kingdom": "shinsoo"}
];

export const guildRankingData: GuildRanking[] = [
  { rank: 1, name: 'LosDeJinno', kingdom: 'jinno', points: 15800 },
  { rank: 2, name: 'ImperioFuego', kingdom: 'chunjo', points: 14650 },
  { rank: 3, name: 'Guardianes', kingdom: 'shinsoo', points: 13920 },
  { rank: 4, name: 'SombraEterna', kingdom: 'jinno', points: 12800 },
  { rank: 5, name: 'LobosDelDesierto', kingdom: 'shinsoo', points: 12100 },
  { rank: 6, name: 'Templarios', kingdom: 'chunjo', points: 11750 },
  { rank: 7, name: 'AlmasPerdidas', kingdom: 'jinno', points: 11200 },
  { rank: 8, name: 'Titanes', kingdom: 'chunjo', points: 10980 },
  { rank: 9, name: 'CazadoresDelSol', kingdom: 'shinsoo', points: 10500 },
  { rank: 10, name: 'EspadaSagrada', kingdom: 'jinno', points: 10120 },
];