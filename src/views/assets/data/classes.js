import Case from 'case'

const classNames = [
  'Swordsman',
  'Wizard',
  'Archer',
  'Cleric',

  'Highlander',
  'Peltasta',
  'Pyromancer',
  'Cryomancer',
  'Quarrel Shooter',
  'Ranger',
  'Priest',
  'Krivis',

  'Hoplite',
  'Barbarian',
  'Psychokino',
  'Linker',
  'Hunter',
  'Sapper',
  'Bokor',
  'Dievdirby',

  'Cataphract',
  'Rodelero',
  'Thaumaturge',
  'Elementalist',
  'Wugushi',
  'Scout',
  'Sadhu',
  'Paladin',

  'Squire',
  'Corsair',
  'Sorcerer',
  'Chronomancer',
  'Rogue',
  'Fletcher',
  'Monk',
  'Pardoner',

  'Fencer',
  'Doppelsoeldner',
  'Necromancer',
  'Alchemist',
  'Falconer',
  'Schwarzer Reiter',
  'Druid',
  'Oracle',

  'Dragoon',
  'Templar',
  'Warlock',
  'Featherfoot',
  'Cannoneer',
  'Musketeer',
  'Plague Doctor',
  'Kabbalist',

  'Lancer',
  'Murmillo',
  'Sage',
  'Enchanter',
  'Hackspell',
  'Mergen',
  'Inquisitor',
  'Taoist',
]

const classTypes = (i) => {
  switch(i) {
    case 1: return 'warrior'
    case 2: return 'wizard'
    case 3: return 'archer'
    case 4: return 'cleric'
    default: return 'warrior'
  }
}

let classes = []
let body = {}
for(let i = 0; i < classNames.length; i++) {
  const classType = (i+1) <= 4 ? classTypes(i+1) : classTypes(Math.floor(((i-4)%8) / 2) + 1)
  const rank = (i+1) <= 4 ? 1 : (Math.floor((i-4)/8) + 2)
  body = {
    id: i+1,
    name: classNames[i],
    rank,
    class_type: classType,
    character_image: (rank < 6) ? Case.snake(classNames[i]) : 'none'
  }
  classes.push(body)
}

console.log(classes)
export default classes