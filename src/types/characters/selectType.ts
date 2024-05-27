enum SpeciesCharacter {
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

export const arrSpeciesCharacter: SpeciesCharacter[] = [
   SpeciesCharacter.Human,
   SpeciesCharacter.Alien,
   SpeciesCharacter.Humanoid,
   SpeciesCharacter.unknown,
   SpeciesCharacter.MythologicalCreature,

   SpeciesCharacter.Poopybutthole,
   SpeciesCharacter.Animal,
   SpeciesCharacter.Robot,
   SpeciesCharacter.Cronenberg,
   SpeciesCharacter.Disease,
   SpeciesCharacter.Null,
];

enum GenderCharacter {
   Female = 'Female',
   Male = 'Male',
   Genderless = 'Genderless',
   unknown = 'newSpecies',
   Null = 'reset',
}

export const arrGenderCharacter: GenderCharacter[] = [
   GenderCharacter.Female,
   GenderCharacter.Male,
   GenderCharacter.Genderless,
   GenderCharacter.unknown,
   GenderCharacter.Null,
];

enum StatusCharacter {
   Alive = 'Alive',
   Dead = 'Dead',
   Unknown = 'unknown',
   Null = 'reset',
}

export const arrStatusCharacter: StatusCharacter[] = [
   StatusCharacter.Alive,
   StatusCharacter.Dead,
   StatusCharacter.Unknown,
   StatusCharacter.Null,
];
