enum CharacterSpecies {
   Human = 'Human',
   Alien = 'Alien',
   Humanoid = 'Humanoid',
   unknown = 'unknown',
   MythologicalCreature = 'Mythological Creature',
   Poopybutthole = 'Poopybutthole',
   Animal = 'Animal',
   Robot = 'Robot',
   Cronenberg = 'Cronenberg',
   Disease = 'Disease',
   Null = 'reset',
}

export const arrCharacterSpecies: CharacterSpecies[] = [
   CharacterSpecies.Human,
   CharacterSpecies.Alien,
   CharacterSpecies.Humanoid,
   CharacterSpecies.unknown,
   CharacterSpecies.MythologicalCreature,

   CharacterSpecies.Poopybutthole,
   CharacterSpecies.Animal,
   CharacterSpecies.Robot,
   CharacterSpecies.Cronenberg,
   CharacterSpecies.Disease,
   CharacterSpecies.Null,
];

enum CharacterGender {
   Female = 'Female',
   Male = 'Male',
   Genderless = 'Genderless',
   unknown = 'newSpecies',
   Null = 'reset',
}

export const arrCharacterGender: CharacterGender[] = [
   CharacterGender.Female,
   CharacterGender.Male,
   CharacterGender.Genderless,
   CharacterGender.unknown,
   CharacterGender.Null,
];

enum CharacterStatus {
   Alive = 'Alive',
   Dead = 'Dead',
   Unknown = 'unknown',
   Null = 'reset',
}

export const arrStatusCharacter: CharacterStatus[] = [
   CharacterStatus.Alive,
   CharacterStatus.Dead,
   CharacterStatus.Unknown,
   CharacterStatus.Null,
];
