import i18next from "i18next";

export enum BattleStat {
  ATK,
  DEF,
  SPATK,
  SPDEF,
  SPD,
  ACC,
  EVA,
  RAND
}

export function getBattleStatName(stat: BattleStat) {
  switch (stat) {
  case BattleStat.ATK:
    return i18next.t("modifierType:TempBattleStatBoosterStatName.ATK");
  case BattleStat.DEF:
    return i18next.t("modifierType:TempBattleStatBoosterStatName.DEF");
  case BattleStat.SPATK:
    return i18next.t("modifierType:TempBattleStatBoosterStatName.SPATK");
  case BattleStat.SPDEF:
    return i18next.t("modifierType:TempBattleStatBoosterStatName.SPDEF");
  case BattleStat.SPD:
    return i18next.t("modifierType:TempBattleStatBoosterStatName.SPD");
  case BattleStat.ACC:
    return i18next.t("modifierType:TempBattleStatBoosterStatName.ACC");
  case BattleStat.EVA:
    return i18next.t("modifierType:TempBattleStatBoosterStatName.EVA");
  default:
    return i18next.t("modifierType:TempBattleStatBoosterStatName.DEFAULT");
  }
}

export function getBattleStatLevelChangeDescription(levels: integer, up: boolean) {
  if (up) {
    switch (levels) {
    case 1:
      return i18next.t("battle:statRose");
    case 2:
      return i18next.t("battle:statSharplyRose");
    case 3:
    case 4:
    case 5:
    case 6:
      return i18next.t("battle:statRoseDrastically");
    default:
      return i18next.t("battle:statWontGoAnyHigher");
    }
  } else {
    switch (levels) {
    case 1:
      return i18next.t("battle:statFell");
    case 2:
      return i18next.t("battle:statHarshlyFell");
    case 3:
    case 4:
    case 5:
    case 6:
      return i18next.t("battle:statSeverelyFell");
    default:
      return i18next.t("battle:statWontGoAnyLower");
    }
  }
}
