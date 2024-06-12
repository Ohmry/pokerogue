import { SimpleTranslationEntries } from "#app/plugins/i18n";

export const battle: SimpleTranslationEntries = {
  "bossAppeared": "{{bossName}} erscheint.",
  "trainerAppeared": "{{trainerName}}\nmöchte kämpfen!",
  "trainerAppearedDouble": "{{trainerName}}\nmöchten kämpfen!",
  "trainerSendOut": "{{trainerName}} setzt\n{{pokemonName}} ein!",
  "singleWildAppeared": "Ein wildes {{pokemonName}} erscheint!",
  "multiWildAppeared": "Ein wildes {{pokemonName1}}\nund {{pokemonName2}} erscheinen!",
  "playerComeBack": "Komm zurück, {{pokemonName}}!",
  "trainerComeBack": "{{trainerName}} ruft {{pokemonName}} zurück!",
  "playerGo": "Los! {{pokemonName}}!",
  "trainerGo": "{{trainerName}} sendet {{pokemonName}} raus!",
  "switchQuestion": "Möchtest du\n{{pokemonName}} auswechseln?",
  "trainerDefeated": "{{trainerName}}\nwurde besiegt!",
  "moneyWon": "Du gewinnst\n{{moneyAmount}} ₽!",
  "pokemonCaught": "{{pokemonName}} wurde gefangen!",
  "partyFull": "Dein Team ist voll.\nMöchtest du ein Pokémon durch {{pokemonName}} ersetzen?",
  "pokemon": "Pokémon",
  "sendOutPokemon": "Los, {{pokemonName}}!",
  "hitResultCriticalHit": "Ein Volltreffer!",
  "hitResultSuperEffective": "Das ist sehr effektiv!",
  "hitResultNotVeryEffective": "Das ist nicht sehr effektiv…",
  "hitResultNoEffect": "Es hat keine Wirkung auf {{pokemonName}}…",
  "hitResultOneHitKO": "Ein K.O.-Treffer!",
  "attackFailed": "Es ist fehlgeschlagen!",
  "attackHitsCount": "{{count}}-mal getroffen!",
  "expGain": "{{pokemonName}} erhält\n{{exp}} Erfahrungspunkte!",
  "levelUp": "{{pokemonName}} erreicht\nLv. {{level}}!",
  "learnMove": "{{pokemonName}} erlernt\n{{moveName}}!",
  "learnMovePrompt": "{{pokemonName}} versucht, {{moveName}} zu erlernen.",
  "learnMoveLimitReached": "Aber {{pokemonName}} kann nur\nmaximal vier Attacken erlernen.",
  "learnMoveReplaceQuestion": "Soll eine bekannte Attacke durch\n{{moveName}} ersetzt werden?",
  "learnMoveStopTeaching": "{{moveName}} nicht\nerlernen?",
  "learnMoveNotLearned": "{{pokemonName}} hat\n{{moveName}} nicht erlernt.",
  "learnMoveForgetQuestion": "Welche Attacke soll vergessen werden?",
  "learnMoveForgetSuccess": "{{pokemonName}} hat\n{{moveName}} vergessen.",
  "countdownPoof": "@d{32}Eins, @d{15}zwei @d{15}und@d{15}… @d{15}… @d{15}… @d{15}@s{pb_bounce_1}schwupp!",
  "learnMoveAnd": "Und…",
  "levelCapUp": "Das Levelbeschränkung\nwurde auf {{levelCap}} erhöht!",
  "moveNotImplemented": "{{moveName}} ist noch nicht implementiert und kann nicht ausgewählt werden.",
  "moveNoPP": "Es sind keine AP für\ndiese Attacke mehr übrig!",
  "moveDisabled": "{{moveName}} ist deaktiviert!",
  "noPokeballForce": "Eine unsichtbare Kraft\nverhindert die Nutzung von Pokébällen.",
  "noPokeballTrainer": "Du kannst das Pokémon\neines anderen Trainers nicht fangen!",
  "noPokeballMulti": "Du kannst erst einen Pokéball werfen,\nwenn nur noch ein Pokémon übrig ist!",
  "noPokeballStrong": "Das Ziel-Pokémon ist zu stark, um gefangen zu werden!\nDu musst es zuerst schwächen!",
  "noEscapeForce": "Eine unsichtbare Kraft\nverhindert die Flucht.",
  "noEscapeTrainer": "Du kannst nicht\naus einem Trainerkampf fliehen!",
  "noEscapePokemon": "{{pokemonName}}'s {{moveName}}\nverhindert {{escapeVerb}}!",
  "runAwaySuccess": "Du bist entkommen!",
  "runAwayCannotEscape": "Flucht gescheitert!",
  "escapeVerbSwitch": "auswechseln",
  "escapeVerbFlee": "flucht",
  "skipItemQuestion": "Bist du sicher, dass du kein Item nehmen willst?",
  "notDisabled": "{{pokemonName}}'s {{moveName}} ist\nnicht mehr deaktiviert!",
  "eggHatching": "Oh?",
  "ivScannerUseQuestion": "IV-Scanner auf {{pokemonName}} benutzen?",
  "wildPokemonWithAffix": "{{pokemonName}} (wild)",
  "foePokemonWithAffix": "{{pokemonName}} (Gegner)",
  "useMove": "{{pokemonNameWithAffix}} setzt {{moveName}} ein!",
  "drainMessage": "{{pokemonName}} wurde Energie abgesaugt",
  "regainHealth": "KP von {{pokemonName}} wurden wieder aufgefrischt!",
  "statRose": "rose",
  "statSharplyRose": "sharply rose",
  "statRoseDrastically": "rose drastically",
  "statWontGoAnyHigher": "won't go any higher",
  "statFell": "fell",
  "statHarshlyFell": "harshly fell",
  "statSeverelyFell": "severely fell",
  "statWontGoAnyLower": "won't go any lower",
} as const;
