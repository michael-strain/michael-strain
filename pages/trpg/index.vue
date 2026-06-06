<template>
  <NuxtLink to="/trpg/login"><v-btn>Login</v-btn></NuxtLink>
  <!-- Splash Page - Showcase the Game -->
   <p>A boundless TRPG.  Less rules-lawyering, more playing.  Unleash your creativity.  GM has all the power to create new skills, items, spells, races, monsters, and more.  Shape your character as you see fit.  Throw away the mindset of picking a role and filling that role, be who you want to be.  Swing an axe and follow it up with a fireball.  Cast your strongest attack spell as many times as you want - but beware, results may vary.</p>
   <p>Everything is extensible, and your GM can add as much or as little to your experience as they see fit, but the following are your base rules.</p>

   <h1>Getting Started</h1>
   <p>As a player, the first thing you will need to do is find a GM.  Your GM will decide the details of character creation.  You can either play online, where many of your stats and rolls will be tracked and managed for you, or you can create a character and print out a partially filled out character sheet.</p>
   <p>If you are an experienced trpg player, you should find many similarities between this and other tabletop games, with most of the differences being in the details.  The biggest difference probably being the absence of classes.  Your characters are only limited by your imagination.</p>
   <p>For new players, TRPGs are games designed to encourage group storytelling - enhanced with a bit of random chance.  You will either speak as your character, or tell your GM what you would like to do, and the GM will tell you if you succeed or fail - or have you roll a dice to determine outcomes.  Your rolls may be altered by some skill or feature of your character, and as you gain experience you will increase in capability.</p>
   <p>Feel free to read on and learn more about the basics, or get started with character creation by <NuxtLink to="/trpg/login"><v-btn>Joining A Campaign</v-btn></NuxtLink></p>

   <h2>Ability Scores</h2>
   <p>The three primary ability scores are: <strong>Physical</strong> A point value associated with the physical capabilities of your character such as strength and dexterity, <strong>Intellectual</strong> representing the mental capacity of your character, and <strong>Social</strong> representing the interpersonal accuity of your character.  As you level up, you may elect to increase these scores, in accordance with the training and experience of your character.</p>
   <p>Each ability score is associated with a variety of skills your character can use, and in addition, you can add ranks to these skills at each level to show a more specific focus in your training.</p>


   <!--Three columns on desktop-->
  <div>
    <v-row>
      <v-col cols="3">
        <v-card title="Physical" text="Your physical senses and abilities.  Carry something heavy.  Throw something accurately.  Smell your enemies coming." @mouseenter="hoverMe('Physical',true)" @mouseleave="hoverMe('Physical',false)" color="red" /><!--@hover change this to glow, along with all the skill cards associated with Phys-->
      </v-col>
      <v-col cols="3">
        <v-card title="Intellectual" text="Sharpen your mind.  Learn all you can, and use that knowledge to your advantage." @mouseenter="hoverMe('Intellectual',true)" @mouseleave="hoverMe('Intellectual',false)" color="blue" />
      </v-col>
      <v-col cols="3">
        <v-card title="Social" text="Make friends and figure out the latest gossip.  Manipulate others to do your bidding.  It's not what you know, it's who you know." @mouseenter="hoverMe('Social',true)" @mouseleave="hoverMe('Social',false)" color="green" />
      </v-col>
    </v-row>
  </div>

  <h2>Skills</h2>
  <p>Roll + Associated Ability Score + Ranks = Results</p>
  <div>
    <v-card v-for="skill in skills" ref="skillCards" :title="skill.name" :subtitle="skill.abilityScore" :text="skill.description" :prepend-icon="skill.icon" :color="colors[skill.name]" />
  </div>

  <h2>Races</h2>
  <p>Your race determines your size, age range, physical description, and may alter some other things such as ability score bonuses, walk speed, number of appendages, and may even give you special racial traits.</p>
  <p>Your GM will determine which races are allowed, what their stats are like, and may even add custom races of their own design, but the default races and values are listed below.</p>

  <template v-for="race in races">
    <v-card :title="race.name" :subtitle="race.description">
      <v-img :src="race.image" cover />
      <p>Ability Score Modifies: {{ race.abilityScoreModifiers }}</p>
      <p>Size: {{ race.size }}</p>
      <p>Adventuring Age Range: {{ race.ageMin }}-{{ race.ageMax }}</p>
      <p>Item Slots: {{ race.itemSlots }}</p>
      <p v-if="race.specialFeatures!=''">Special Features: {{ race.specialFeatures }}</p>
    </v-card>
  </template>

  <h2>Combat</h2>
  <p>Turn order is established by either diplomacy (no you go first), or a dice roll (1d20+Agility).</p>
  <p>On your turn, you have 2 Actions.  You may move at your base speed twice, take 2 standard actions (swing your greatsword twice, cast 2 spells, etc.), or take one of each.  Additionally, you may communicate freely.  Each turn theoretically lasts 10 seconds in-game.</p>
  <p>Each combatant will attempt to land a hit against their target(s) Hit Difficulty (HD) by rolling 1d20 and adding the appropriate skill (Melee, Ranged, Cast).  If successful, roll for damage as specified by the weapon, and add the appropriate Ability Score.</p>
  <p>Your HD is determined by adding 10 + character level to your Agility.  Surprise attacks and some spells ignore Agility.</p>
  <p>Armor can be used to reduce damage taken, however, some weapons and spells may ignore or reduce this bonus.</p>

  <h2>Weapons</h2>
  <p>A weapon is used to inflict damage on your foes.</p>
  <template v-for="weapon in weapons">
    <v-card :title="weapon.name" :subtitle="weapon.description">
      <p>Damage: {{ weapon.damage }}</p>
      <p>Cost: {{ weapon.cost }}</p>
      <p>Type: {{ weapon.type }}</p>
      <p>Range (5ft squares): {{ weapon.range }}</p>
      <p>Item Slot: {{ weapon.itemSlot }}</p>
      <v-img :src="weapon.image" cover />
    </v-card>
  </template>

  <h2>Armor</h2>
  <p>Armor can be used to reduce damage received when being hit.  Watch out, heavier armor comes at a cost of an Agility Reduction.</p>
  <template v-for="arm in armor">
    <v-card :title="arm.name" :subtitle="arm.description">
      <p>Damage Reduction: {{ arm.damageReduction }}</p>
      <p>Agility Cost: {{ arm.agilityCost }}</p>
      <p>Cost: {{ arm.cost }}</p>
      <p>Item Slot: {{ arm.itemSlot }}</p>
      <v-img :src="arm.image" cover />
    </v-card>
  </template>

  <h2>Accessories</h2>
  <p>Accessories can be anything worn, whether for style or for practical use.</p>
  <template v-for="accessory in accessories">
    <v-card :title="accessory.name" :subtitle="accessory.description">
      <p>Cost: {{ accessory.cost }}</p>
      <p>Item Slot: {{ accessory.itemSlot }}</p>
      <v-img :src="accessory.image" cover />
    </v-card>
  </template>

  <h2>Items</h2>
  <p>Items are anything kept that is not worn.  Random junk you throw in your backpack, health potions for a rainy day, it's all here.</p>
  <template v-for="item in items">
    <v-card :title="item.name" :subtitle="item.description">
      <p>Cost: {{ item.cost }}</p>
      <p>Consumable: {{ item.consumable?"Yes":"No" }}</p>
      <v-img :src="item.image" cover />
    </v-card>
  </template>

  <h2>Spells</h2>
  <p>Magic!  A caster must have sufficient rank to cast a given spell.  If you have ranks in Cast, you can attempt to cast an equivalent level spell, however, each cast you must roll a d20 to determine the effectiveness of the spell as stated in the spell description.  Cast as many times as you like, there is no spells per day limit.  New spells can be learned either through reading a spellbook, or training with a master.</p>
  <p>Start off knowing a number of spells equal to your ranks in caster + Intellectual Score.</p>
  <p>When rolling to hit with an attack spell, a caster will first roll Cast to determine if they succeeded at casting the spell Normally.  Each spell has a Conjuring Difficulty (CD) with different tiers of success. If you fail to meet the CD, you fail to create the spell at all.  If you exceed the CD by 3, you cast Effectively.  If you exceed the CD by 5, you cast Exceptionally.  If you exceed the CD by 10 or more, you cast Masterfully.  A Natural 20 is an automatic Masterful cast.  A Nat1 causes the magic to swell up out of control, dealing it's normal damage to the caster.</p>
  <p>Your Intellectual score enhances your spells - adding damage to your attack spells, making your Buffs more effective, etc.</p>
  <template v-for="spell in masterSpellbook">
    <v-card :title="spell.name" :subtitle="spell.description">
      <p>Spell Level: {{ spell.level }}</p>
      <p>Spellbook Cost: {{ spell.cost }}</p>
      <p>Category: {{ spell.category }}</p>
      <p>Casting Difficulty (CD): {{ spell.castingDifficulty }}</p>
      <p v-if="spell.damage">Spell Damage: {{ spell.damage }} </p>
      <v-img :src="spell.image" cover />
    </v-card>
  </template>

  <h2>Languages</h2>
  <p>Each region may speak a unique language.  Furthermore, language may vary and posess distinct dialects.  Every language requires significant time studying, and practice communicating in order to be learned.  The difficulty and time spent learning a new language is entirely up to the GM's discretion.</p>
  <p>For simplicity's sake, a GM may choose to largely utilize a common language in their world.</p>
  <p>Some of the more well-known, widely used languages can be found below:</p>
  <br/>
  <template v-for="language in languages">
    <p><strong>{{ language.name }}</strong>: {{ language.description }}</p><br/>
  </template>


  <h2>Currencies</h2>
  <p>Currencies can be unique to each culture, however, by default, currency is a 1:100 ratio of precious metals with inherent value.</p>
  <template v-for="currency in currencies">
    <v-card :title="currency.name" :subtitle="currency.description" :text="'Copper Equivalent Value: ' + currency.copperValueConversion">
      <v-img :src="currency.image" cover />
    </v-card>
  </template>

  <h2>Bestiary</h2>
  <p>Just a taste of the monsters to be found.  GMs have access to a wider array of monsters to use in their campaigns, I just don't want to spoil too much for the players.</p>
  <template v-for="monster in bestiary">
    <v-card :title="monster.name" :subtitle="monster.description">
      <p>Level: {{ monster.level }}</p>
      <p>Health: {{ monster.health }}</p>
      <p>Movement Speed (# of 5ft Squares): {{ monster.movement }}</p>
      <p>Size: {{ monster.size }}</p>
      <p>Height: {{ monster.height }}</p>
      <p>Weight: {{ monster.weight }}</p>
      <p>Ability Scores: {{ monster.abilityScores }}</p>
      <p>Inventory (Random Selection): {{ monster.inventory }}</p>
      <p>Item Slots: {{ monster.itemSlots }}</p>
      <p>Equipment (Random Selection): {{ monster.equipment }}</p>
      <p>Skills (Semi-Randomly Allocated): {{ monster.skills }}</p>
      <p v-if="monster.spells">Spells: {{ monster.spells }}</p>
      <p>Money (Semi-Random Amount): {{ monster.money }}</p>
    </v-card>
  </template>"

</template>

<script setup>
  // import { useCurrentUser } from 'vuefire';

  const skillCards = ref([])
  const colors = ref({})

  const skills = [
    {'name':'Melee','rank':0,'abilityScore':'Physical','description':'Hand-to-hand combat.  Swing a sword, punch a face.  You get the idea, whack \'em.', 'icon':'mdi-arm-flex'},
    {'name':'Ranged','rank':0,'abilityScore':'Physical','description':'Throwing, shooting, archery-ing.  Not up close an personal.  Usually.', 'icon':'mdi-bow-arrow'},
    {'name':'Sense','rank':0,'abilityScore':'Physical','description':'Use your physical senses to gather information.  See, hear, smell, taste, touch.', 'icon':'mdi-eye'},
    {'name':'Agility','rank':0,'abilityScore':'Physical','description':'Jump, climb, balance, sneak, sprint, dodge, or otherwise skillfully maneuver from one place to another.', 'icon':'mdi-run-fast'},
    {'name':'Cast','rank':0,'abilityScore':'Intellectual','description':'Your ability to conjure magical energy and shape it to your will.', 'icon':'mdi-magic-staff'},
    {'name':'Inspect','rank':0,'abilityScore':'Intellectual','description':'Your attention to details and your prior experiences may help your gather information.', 'icon':'mdi-magnify'},
    {'name':'Knowledge','rank':0,'abilityScore':'Intellectual','description':'Educate yourself.  Maybe read some books and learn some things.  You never know what could come in handy.', 'icon':'mdi-book'},
    {'name':'Create','rank':0,'abilityScore':'Intellectual','description':'Tinker, craft, engineer, and synthesize items into existence.', 'icon':'mdi-hammer-wrench'},
    {'name':'Disassemble','rank':0,'abilityScore':'Intellectual','description':'Take things apart, disable, or render less usable without destroying them.', 'icon':'mdi-lock-open-remove'},
    {'name':'Manipulate','rank':0,'abilityScore':'Social','description':'Lie, charm, seduce, negotiate, bribe, or intimidate your way to victory.', 'icon':'mdi-account-voice'},
    {'name':'Appraise','rank':0,'abilityScore':'Social','description':'What\'s this worth to you.  What is it worth to me?  What is it worth to others?', 'icon':'mdi-cash'},
    {'name':'Inquire','rank':0,'abilityScore':'Social','description':'Ask around.  Learn the latest gossip, or find the answers to your most obscure questions.', 'icon':'mdi-help'},
    {'name':'Steal','rank':0,'abilityScore':'Social','description':'What\'s yours is mine.  Take.', 'icon':'mdi-domino-mask'},
    {'name':'Perform','rank':0,'abilityScore':'Social','description':'Sing us a song, you\'re the piano man.', 'icon':'mdi-music'}
    // {'name':'','rank':0,'abilityScore':'','description':''}
  ]

  const races = [
    {
      'name':'Human',
      'description':'You know what you are.',
      'abilityScoreModifiers':{'Any':1},
      'size':'Medium',
      'ageMin':12,
      'ageMax':80,
      'itemSlots': {'fingers':10,'hands':2,'wrists':2,'head':1,'ears':2,'nose':1,'eyes':2,'neck':1,'torso':1,'waist':1,'back':1,'legs':2,'feet':2},
      'specialFeatures':{'Bonus Skill Ranks':2},
      'image':'/img/me.png'
    },
    {
      'name':'Elf',
      'description':'Pointy ears.  Generally snooty.',
      'abilityScoreModifiers':{'Intellectual':1},
      'size':'Medium',
      'ageMin':20,
      'ageMax':Infinity,
      'itemSlots':{'fingers':10,'hands':2,'wrists':2,'head':1,'ears':2,'nose':1,'eyes':2,'neck':1,'torso':1,'waist':1,'back':1,'legs':2,'feet':2},
      'specialFeatures':{'Agility':2},
      'image':''
    },
    {
      'name':'Dwarf',
      'description':'Stubby little guys that pack a punch and drink too much.',
      'abilityScoreModifiers':{'Physical':1},
      'size':'Medium',
      'ageMin':10,
      'ageMax':300,
      'itemSlots':{'fingers':10,'hands':2,'wrists':2,'head':1,'ears':2,'nose':1,'eyes':2,'neck':1,'torso':1,'waist':1,'back':1,'legs':2,'feet':2},
      'specialFeatures':{'Create':2},
      'image':''
    },
  ]

// 'itemSlots':{'fingers':10,'hands':2,'wrists':2,'head':1,'ears':2,'nose':1,'eyes':2,'neck':1,'torso':1,'waist':1,'back':1,'legs':2,'feet':2},
      
  const weapons = [
    {
      'name':'Dagger',
      'description':'Small and pointy',
      'image':'/img/mountain-coffeefarm.jpg',
      'damage':'1d4',
      'type':'Melee',
      'range':1,
      'itemSlot':{'hands':1},
      'cost':{'Copper':5}
    },
    {
      'name':'Shortsword',
      'description':'Short and sharp',
      'image':'',
      'damage':'1d6',
      'type':'Melee',
      'range':1,
      'itemSlot':{'hands':1},
      'cost':{'Copper':10}
    },
    {
      'name':'Shortbow',
      'description':'Short and sharp',
      'image':'',
      'damage':'1d6',
      'type':'Ranged',
      'range':60,
      'itemSlot':{'hands':1},
      'cost':{'Copper':10}
    }
  ]

  const armor = [
    {
      'name':'Leather Armor',
      'description':'Thanks cows.  Provides some padding.  Very fashionable.',
      'image':'',
      'damageReduction':1,
      'agilityCost':0,
      'itemSlot':{'torso':1},
      'cost':{'Copper':20}
    },
    {
      'name':'Chainmail',
      'description':'Carefully crafted one link at a time.  Not too heavy for pretty decent armor.',
      'image':'',
      'damageReduction':2,
      'agilityCost':0,
      'itemSlot':{'torso':1},
      'cost':{'Silver':1}
    },
    {
      'name':'Full Plate Armor',
      'description':'Heavy and very protective.',
      'image':'',
      'damageReduction':3,
      'agilityCost':2,
      'itemSlot':{'torso':1},
      'cost':{'Silver':5}
    }
  ]

  const accessories = [
    {
      'name':'Silver Ring',
      'description':'A simple ring made of silver.  One size somehow fits all sizes of fingers.',
      'image':'',
      'itemSlot':{'fingers':1},
      'cost':{'Silver':1}
    },
    {
      'name':'Golden Amulet',
      'description':'Makes you feel very pretty',
      'image':'',
      'itemSlot':{'neck':1},
      'cost':{'Gold':2},
      'specialFeature':'Attracts attention from those with an eye for value.'
    },
    // {
    //   'name':'',
    //   'description':'',
    //   'image':'',
    //   'itemSlot':{},
    //   'cost':{},
    //   'specialFeature':''
    // }
  ]

  const items = [
    {
      'name':'Healing Potion',
      'description':'Heals 1d8 damage upon consumption.  Tastes like raspberries.',
      'image':'',
      'consumable':true,
      'cost':{'Gold':1}
    },
    {
      'name':'Bread',
      'description':'Made of flour, water, sugar, yeast, butter, and love.  Mmmmm bread.',
      'image':'',
      'consumable':true,
      'cost':{'Copper':1}
    },
    {
      'name':'Pickles',
      'description':'Cucumbers and dill soaked in vinegar.  Love them?  Dill-ightful!  Hate them.  Dill with it.',
      'image':'',
      'consumable':true,
      'cost':{'Copper':1},
      'quantity':{'min':0,'max':5}
    }

    /*
    {
      'name':'',
      'description':'',
      'image':'',
      'consumable':false,
      'cost':{}
    }
    */
  ]

  const masterSpellbook = [
    {
      'name':'Fireball',
      'description':'Fire wells up in the palm of your hand, and launches toward your target at your command.',
      'level':1,
      'category':'Attack',
      'castingDifficulty':10,
      'damage':{'Normal':'1d4+INT', 'Effective':'1d6+INT', 'Exceptional':'2d4+INT','Masterful':'2d6+INT'},
      'spellbookCost':{'Gold':1}
    },
    {
      'name':'Water Bolt',
      'description':'Water is condensed from the air around you and forms a deadly projectile.',
      'level':1,
      'category':'Attack',
      'castingDifficulty':10,
      'damage':{'Normal':'1d4+INT', 'Effective':'1d6+INT', 'Exceptional':'2d4+INT','Masterful':'2d6+INT'},
      'spellbookCost':{'Gold':1}
    },
    {
      'name':'Wind Cutter',
      'description':'Wind gathers at your beckon a is released so forcefully that it cuts like a blade.',
      'level':1,
      'category':'Attack',
      'castingDifficulty':10,
      'damage':{'Normal':'1d4+INT', 'Effective':'1d6+INT', 'Exceptional':'2d4+INT','Masterful':'2d6+INT'},
      'spellbookCost':{'Gold':1}
    },
    {
      'name':'Rock Throw',
      'description':'Earth gathers and hardens into a rock that you hurl at your enemies.',
      'level':1,
      'category':'Attack',
      'castingDifficulty':10,
      'damage':{'Normal':'1d4+INT', 'Effective':'1d6+INT', 'Exceptional':'2d4+INT','Masterful':'2d6+INT'},
      'spellbookCost':{'Gold':1}
    },
    /*
    {
      'name':'',
      'description':'',
      'level':1,
      'category':'attack|buff|debuff|utility',
      'damage':''
    }
    */
  ]

  const languages = [
    {
      'name':'English',
      'description':'The most popular human language, with predominantly understandable variation.'
    },
    {
      'name':'Mandarin',
      'description':'The human language with the largest number of native speakers.  Posesses a great deal of regional variation.'
    },
    {
      'name':'Quenya',
      'description':'An elven language reserved for fancier use, often used by upper-class elves.'
    },
    {
      'name':'Sindarin',
      'description':'A more commonly spoken elven tongue, varying somewhat among differing regions.'
    },
    {
      'name':'Khuzdul',
      'description':'A highly traditional language, exclusively known and spoken by dwarves.'
    },
    {
      'name':'Khazalid',
      'description':'A more inclusive language known by dwarves and those working closely with them.  Almost no regional variation is observed.'
    },
    /*
    {
      'name':'',
      'description':''
    },
    */
  ]

  const currencies = [
    {
      'name':'Copper',
      'description':'The most basic form of currency, theoretically equivalent to goods or services produced through 6 minutes of menial labor.',
      'copperValueConversion':1,
      'image':''
    },
    {
      'name':'Silver',
      'description':'Theoretically equivalent to goods or services produced through one hour of menial labor.',
      'copperValueConversion':100,
      'image':''
    },
    {
      'name':'Gold',
      'description':'One gold piece is generally considered enough to sustain a small family for a month.  Equivalent to 100 Silver.',
      'copperValueConversion':10000,
      'image':''
    },
    {
      'name':'Platinum',
      'description':'Abundant wealth abides in a single platinum piece.  1 Platinum is worth 100 gold.',
      'copperValueConversion':1000000,
      'image':''
    },
  ]
  
  const bestiary = [
    {
      'name':'Goblin',
      'description':'Nasty green little buggers.  Not too bright, very impulsive, and almost always evil, these little bastards are here to reign havoc wherever they go.',
      'level':1,
      'health':'2d20*Level',
      'movement':6, //6 5-ft squares is 30 ft
      'size':'Medium',
      'height':'3ft + 3d6 inches',
      'weight':'28lbs + 2d8 lbs',
      'abilityScores': {'Physical':{'min':0,'max':2},'Intellectual':0,'Social':0},
      'inventory': [
        {
          'name':'Bread',
          'description':'Made of flour, water, sugar, yeast, butter, and love.  Mmmmm bread.',
          'image':'',
          'consumable':true,
          'cost':{'Copper':1},
          'quantity':{'min':0,'max':2}
        },
        {
          'name':'Pickles',
          'description':'Cucumbers and dill soaked in vinegar.  Love them?  Dill-ightful!  Hate them.  Dill with it.',
          'image':'',
          'consumable':true,
          'cost':{'Copper':1},
          'quantity':{'min':0,'max':5}
        }
      ],
      'equipment':[
        {'slot':'hand','slotsUsed':1,'name':'Shortsword','description':''},
        {'slot':'hand','slotsUsed':1,'name':'Dagger','description':''},
        {'slot':'hand','slotsUsed':2,'name':'Shortbow','description':''},
        {'slot':'waist','slotsUsed':1,'name':'Fanny Pack','description':''},
      ],
      'skills': [
        {'name':'Melee','rank':{'min':1,'max':3},'abilityScore':'Physical','description':'Hand-to-hand combat.  Swing a sword, punch a face.  You get the idea, whack \'em.'},
        {'name':'Ranged','rank':{'min':0,'max':2},'abilityScore':'Physical','description':'Throwing, shooting, archery-ing.  Not up close an personal.  Usually.'},
        {'name':'Sense','rank':{'min':0,'max':2},'abilityScore':'Physical','description':'Use your physical senses to gather information.  See, hear, smell, taste, touch.'},
        {'name':'Agility','rank':{'min':0,'max':2},'abilityScore':'Physical','description':'Jump, climb, balance, sneak, sprint, or otherwise skillfully maneuver from one place to another.'},
        {'name':'Cast','rank':{'min':0,'max':1},'abilityScore':'Intellectual','description':'Your ability to conjure magical energy and shape it to your will.'},
        {'name':'Steal','rank':{'min':1,'max':3},'abilityScore':'Social','description':'What\'s yours is mine.  Take.'},
      ],
      'spells':[
        {
          'name':'Rock Throw',
          'description':'Earth gathers and hardens into a rock that you hurl at your enemies.',
          'level':1,
          'category':'Attack',
          'castingDifficulty':10,
          'damage':{'Normal':'1d4+INT', 'Effective':'1d6+INT', 'Exceptional':'2d4+INT','Masterful':'2d6+INT'},
        }
      ],
      'money':{
        'Copper':{'min':0,'max':99},
        'Silver':{'min':0,'max':5},
      },
    },
    /*
    {
      'name':'',
      'description':'',
      'level':1,
      'health':0,
      'movement':6, //6 5-ft squares is 30 ft
      'size':'Medium',
      'height':'',
      'weight':'',
      'abilityScores': {'Physical':0,'Intellectual':0,'Social':0},
      'inventory': [],
      'itemSlots':{'fingers':10,'hands':2,'wrists':2,'head':1,'ears':2,'nose':1,'eyes':2,'neck':1,'torso':1,'waist':1,'back':1,'legs':2,'feet':2},
      'equipment':{'slot':'finger','slotsUsed':1,'name':'Ring of Lore','description':''},
      'skills': defaultSkills,
      'spells':[],
      'money':{},
    }
    */
  ]


  const hoverMe = (abilityScore, bool) => {
    if(bool){
      for(let card in skillCards.value){
        if (skillCards.value[card].subtitle==abilityScore){
          if(abilityScore=='Physical'){
            colors.value[skillCards.value[card].title] = "red"
          }
          if(abilityScore=='Intellectual'){
            colors.value[skillCards.value[card].title] = "blue"
          }
          if(abilityScore=='Social'){
            colors.value[skillCards.value[card].title] = "green"
          }
        }
      }
    } else{
      for(let card in skillCards.value){
        colors.value[skillCards.value[card].title] = ""
      }
    }
  }

  //If user is logged in already just redirect them to the account page
  onMounted(async()=>{ //does this need to be async?
    // if(useCurrentUser().value != null){
    //   return navigateTo('/trpg/account')
    // }
    for(let card in skills.value){
      colors.value[skills.value[card].name] = ""
    }
    console.log(colors.value)
  })
</script>