export class Character {
  char_info: CharInfo = new CharInfo();
  char_status: CharStatus = new CharStatus();
  characteristics: Characteristics = new Characteristics();
}

export class CharInfo {
  m_name: string = '';
  m_birthplace: string = '';
  m_pronoun: string = '';
  m_occupation: string = '';
  m_residence: string = '';
  m_age: number = 0;
}

export class Characteristics {
  m_strength: number = 0;
  m_constitution: number = 0;
  m_dexterity: number = 0;
  m_intelligence: number = 0;
  m_size: number = 0;
  m_power: number = 0;
  m_appearance: number = 0;
  m_education: number = 0;
  m_hp: number = 0;
  m_hp_current: number = 0;
  m_mp: number = 0;
  m_mp_current: number = 0;
  m_luck: number = 0;
  m_luck_current: number = 0;
  m_sanity: number = 0;
  m_sanity_current: number = 0;
  m_sanity_max: number = 0;
}

export class CharStatus {
  m_temporary_insanity: boolean = false;
  m_indefinite_insanity: boolean = false;
  m_major_wound: boolean = false;
  m_unconscious: boolean = false;
  m_dying: boolean = false;
}

export class CharSkills {
  accounting: Skill = new Skill('accounting');
  anthropology: Skill = new Skill('anthropology');
  archaeology: Skill = new Skill('archaeology');
  appraise: Skill = new Skill('appraise');
  art_craft: Skill = new Skill('art_craft');
  fighting: Skill = new Skill('fighting');
  charm: Skill = new Skill('charm');
  climb: Skill = new Skill('climb');
  credit_rating: Skill = new Skill('credit rating');
  cthulhu_mythos: Skill = new Skill('cthulhu mythos');
  disguise: Skill = new Skill('disguise');
  dodge: Skill = new Skill('dodge');
  drive_auto: Skill = new Skill('drive auto');
  electric_repair: Skill = new Skill('electric repair');
  fast_talk: Skill = new Skill('fast talk');
  fighting_brawl: Skill = new Skill('fighting', 'brawl', true);
  other_fighting: Array<Skill> = new Array<Skill>();
  firearms_handgun: Skill = new Skill('firearms', 'handgun');
  firearms_rifleShotgun: Skill = new Skill('firearms', 'rifle/Shotgun');
  first_aid: Skill = new Skill('first aid');
  history: Skill = new Skill('history');
  intimidate: Skill = new Skill('intimidate');
  jump: Skill = new Skill('jump');
  //language_x: Skill = new Skill('language_x');
  language_own: OwnLanguageSkill = new OwnLanguageSkill(
    'own language',
    '',
    true
  );
  other_languages: Array<Skill> = new Array<Skill>();
  law: Skill = new Skill('law');
  library_use: Skill = new Skill('library use');
  listen: Skill = new Skill('listen');
  locksmith: Skill = new Skill('locksmith');
  mechanical_repair: Skill = new Skill('mechanical repair');
  medicine: Skill = new Skill('medicine');
  natural_world: Skill = new Skill('natural world');
  navigate: Skill = new Skill('navigate');
  occult: Skill = new Skill('occult');
  persuade: Skill = new Skill('persuade');
  pilot_x: Skill = new Skill('pilot', '', true);
  psychoanalysis: Skill = new Skill('psychoanalysis');
  psychology: Skill = new Skill('psychology');
  ride: Skill = new Skill('ride');
  science_x: Skill = new Skill('science', '', true);
  sleight_of_hand: Skill = new Skill('sleight of hand');
  spot_hidden: Skill = new Skill('spot hidden');
  stealth: Skill = new Skill('stealth');
  survival_x: Skill = new Skill('survival', '', true);
  swim: Skill = new Skill('swim');
  throw: Skill = new Skill('throw');
  track: Skill = new Skill('track');
}

export class Skill {
  m_skill_name: string = '';
  m_detail_name: string = ''; //i.e. specific language or weapon (usually empty)
  m_detail_required: boolean = false;
  m_base_val: number = 0;
  m_addition: number = 0;

  constructor(n: string, d: string = '', dr: boolean = false) {
    this.m_skill_name = n;
    this.m_detail_name = d;
    this.m_detail_required = dr;
  }

  set_base(char: Character): void {
    return;
  }

  get_value(): number {
    return this.m_base_val + this.m_addition;
  }

  get_name(): string {
    return (
      this.m_skill_name +
      (this.m_detail_name != '' ? '(' + this.m_detail_name + ')' : '')
    );
  }
}

export class OwnLanguageSkill extends Skill {
  set_base(char: Character): void {
    this.m_base_val = char.characteristics.m_education;
  }
}

export class DodgeSkill extends Skill {
  set_base(char: Character): void {
    this.m_base_val = Math.floor(char.characteristics.m_dexterity / 2);
  }
}

const DEFAULT_SKILL_BASE = {
  accounting: 5,
  anthropology: 1,
  archaeology: 1,
  appraise: 5,
  art_craft: 5,
  fighting: 0,
  charm: 15,
  climb: 20,
  credit_rating: 0,
  cthulhu_mythos: 0,
  disguise: 5,
  dodge: 0,
  drive_auto: 20,
  electric_repair: 10,
  fast_talk: 5,
  fighting_brawl: 25,
  firearms_handgun: 20,
  firearms_rifleShotgun: 25,
  first_aid: 30,
  history: 5,
  intimidate: 15,
  jump: 20,
  language_x: 1,
  language_own: 0,
  law: 5,
  library_use: 20,
  listen: 20,
  locksmith: 1,
  mechanical_repair: 10,
  medicine: 1,
  natural_world: 10,
  navigate: 10,
  occult: 5,
  persuade: 10,
  pilot_x: 1,
  psychoanalysis: 1,
  psychology: 10,
  ride: 5,
  science_x: 1,
  sleight_of_hand: 10,
  spot_hidden: 25,
  stealth: 20,
  survival_x: 10,
  swim: 20,
  throw: 20,
  track: 10,
};
