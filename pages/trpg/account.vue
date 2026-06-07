<template>
  <v-btn @click="signOut()">Logout</v-btn>
  <v-button>Join A Game</v-button>
  <v-button @click="showHostingPopup = true">Host A Game</v-button> 
  <v-list lines="one"> Campaigns I'm Playing
    <v-list-item v-for="c in campaigns" :key="c" :title="'Campaign ID: ' + c.id" :subtitle="c.name + ' | Player: ' + c.players[userProfile.uid].name" :prepend-avatar="c.players[userProfile.uid].avatar"/>
  </v-list>
  <v-list lines="one"> Campaigns I'm Hosting
    <v-list-item v-for="h in hosting" :key="h.data().name" :title="h.data().name" :subtitle="'Campaign ID: ' + h.id + ' | Created: ' + h.data().createDate"><NuxtLink :to="'/trpg/'+h.id+'/gm/'"><v-btn>View</v-btn></NuxtLink></v-list-item>
  </v-list>
  <PopUp v-if="showHostingPopup">
    <template #popuptitle>
        New Campaign
      </template>
      <template #exitbtn> 
        <button
          class="w-full h-full"
          @click="showHostingPopup=false"
        >
          X
        </button>
      </template>
      <v-form
        ref="valid"
        @submit.prevent
      >
        <div
          class="twocolinputs"
        >
          <v-text-field
            id="name"
            v-model="newCampaignInfo.name"
            :rules="[rules.required]"
            type="text"
            label="Campaign Name"
          />
          <v-text-field
            id="worldName"
            v-model="newCampaignInfo.worldConfig.name"
            :rules="[rules.required]"
            type="text"
            label="World Name"
          />
          <!-- <v-text-field
            id="password"
            v-model="newCampaignInfo.password"
            type="text"
            label="New Player Password"
          /> -->
        </div>
        <div class="vbtn w-full btn-secondary text-secondary-content">
          <v-btn
            type="submit"
            variant="text"
            class="w-full"
            @click="hostCampaign(newCampaignInfo)"
          >
            Save
          </v-btn>
        </div>
      </v-form>
  </PopUp>
</template>

<script setup>
  import { useCurrentUser, usePendingPromises, useFirestore, useCollection } from 'vuefire';
  import { query, collection, orderBy, where, and, limit, limitToLast, startAfter, endBefore, getDocs, addDoc } from 'firebase/firestore'
  import { useUserDataStore } from '../../stores/userData'

  const showHostingPopup = ref(false)
  const valid = ref()

  const hosting = ref([])
  const campaigns = ref([])

  const rules = ref({
    required: value => !!value || 'Required.',
  })

  const userProfile = computed(()=>useCurrentUser().value)
  const db = useFirestore()


  // const userData = ref().value = useUserDataStore()

  onMounted(async()=>{ //does this need to be async?
    if(useCurrentUser().value == null){
      return navigateTo('/trpg/login')
    }
    const q1 = query(collection(db,'campaigns'),where('playerIds','array-contains',userProfile.value.uid))
    let campaignDocs = await getDocs(q1)
    campaignDocs.forEach((d)=>{
      const data = d.data()
      data.id = d.id
      campaigns.value.push(data)
    })
    const q2 = query(collection(db,'campaigns'),where('host','==',userProfile.value.uid))
    let hostingDocs = await getDocs(q2)
    hostingDocs.forEach((d)=>{
      const data = d.data()
      data.id = d.id
      hosting.value.push(d)
    })
  })

  

  const defaultRaces = [
    {
      'name':'Human',
      'description':'You know what you are.',
      'abilityScoreModifiers':{'Any':1, 'Physical':0,'Intellectual':0,'Social':0},
      'size':'Medium',
      'height':'3ft-8ft6in',
      'weight':'50lbs-400lbs',
      'movement':6,
      'age':[12,80],
      'itemSlots': {'fingers':10,'hands':2,'wrists':2,'head':1,'ears':2,'nose':1,'eyes':2,'neck':1,'torso':1,'waist':1,'back':1,'legs':2,'feet':2},
      'specialFeatures':{'Bonus Skill Ranks':2}
    },
    {
      'name':'Elf',
      'description':'Pointy ears.  Generally snooty.',
      'abilityScoreModifiers':{'Any':0, 'Physical':0,'Intellectual':1,'Social':0},
      'size':'Medium',
      'height':'4ft-10ft',
      'weight':'100lbs-200lbs',
      'movement':6,
      'age':[20,Infinity],
      'itemSlots':{'fingers':10,'hands':2,'wrists':2,'head':1,'ears':2,'nose':1,'eyes':2,'neck':1,'torso':1,'waist':1,'back':1,'legs':2,'feet':2},
      'specialFeatures':{'Agility':2}
    },
    {
      'name':'Dwarf',
      'description':'Stubby little guys that pack a punch and drink too much.',
      'abilityScoreModifiers':{'Any':0, 'Physical':1,'Intellectual':0,'Social':0},
      'size':'Medium',
      'height':'2ft-5ft6in',
      'weight':'80lbs-300lbs',
      'movement':6,
      'age':[10,300],
      'itemSlots':{'fingers':10,'hands':2,'wrists':2,'head':1,'ears':2,'nose':1,'eyes':2,'neck':1,'torso':1,'waist':1,'back':1,'legs':2,'feet':2},
      'specialFeatures':{'Create':2}
    },
  ]

  const defaultSkills = [
    {'name':'Melee','rank':0,'abilityScore':'Physical','description':'Hand-to-hand combat.  Swing a sword, punch a face.  You get the idea, whack \'em.'},
    {'name':'Ranged','rank':0,'abilityScore':'Physical','description':'Throwing, shooting, archery-ing.  Not up close an personal.  Usually.'},
    {'name':'Sense','rank':0,'abilityScore':'Physical','description':'Use your physical senses to gather information.  See, hear, smell, taste, touch.'},
    {'name':'Agility','rank':0,'abilityScore':'Physical','description':'Jump, climb, balance, sneak, sprint, or otherwise skillfully maneuver from one place to another.'},
    {'name':'Cast','rank':0,'abilityScore':'Intellectual','description':'Your ability to conjure magical energy and shape it to your will.'},
    {'name':'Inspect','rank':0,'abilityScore':'Intellectual','description':'Your attention to details and your prior experiences may help your gather information.'},
    {'name':'Knowledge','rank':0,'abilityScore':'Intellectual','description':'Educate yourself.  Maybe read some books and learn some things.  You never know what could come in handy.'},
    {'name':'Create','rank':0,'abilityScore':'Intellectual','description':'Tinker, craft, engineer, and synthesize items into existence.'},
    {'name':'Disassemble','rank':0,'abilityScore':'Intellectual','description':'Take things apart, disable, or render less usable without destroying them.'},
    {'name':'Manipulate','rank':0,'abilityScore':'Social','description':'Lie, charm, seduce, negotiate, bribe, or intimidate your way to victory.'},
    {'name':'Appraise','rank':0,'abilityScore':'Social','description':'What\'s this worth to you.  What is it worth to me?  What is it worth to others?'},
    {'name':'Inquire','rank':0,'abilityScore':'Social','description':'Ask around.  Learn the latest gossip, or find the answers to your most obscure questions.'},
    {'name':'Steal','rank':0,'abilityScore':'Social','description':'What\'s yours is mine.  Take.'},
    {'name':'Perform','rank':0,'abilityScore':'Social','description':'Sing us a song, you\'re the piano man.'}
    // {'name':'','rank':0,'abilityScore':'','description':''}
  ]
  const defaultPlayerConfig = {
    'name':'',
    'level':1,
    'health':0,
    'movement':6, //6 5-ft squares is 30 ft
    'age':0,
    'height':'',
    'weight':'',
    'size':'M', //Or should we make this numerical?
    'abilityScores': {'Physical':0,'Intellectual':0,'Social':0},
    'abilityPoints':3,
    'inventory': [],
    'equipment':{'slot':'finger','slotsUsed':1,'name':'Ring of Lore','description':''},
    // 'skills': defaultSkills,
    'skillRanks':5,
    'race': '',
    'spells':[],
    'money':{
      'Copper':0,
      'Silver':0,
      'Gold':1,
      'Platinum':0
    },
  }
  const defaultNPC = {}
  const bestiary = [
    {
      'name':'Goblin',
      'description':'Nasty green little buggers.  Not too bright, very impulsive, and almost always evil, these little bastards are here to reign havoc wherever they go.',
      'level':[1,3],
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
  ]
  const defaultWeapons = [
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
  const defaultArmor = [
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
  const defaultAccessories = [
    {
      'name':'Silver Ring',
      'description':'A simple ring made of silver.  One size somehow fits all sizes of fingers.',
      'image':'',
      'itemSlot':{'fingers':1},
      'cost':{'Silver':1},
      'specialFeature':''
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
  const defaultItems = [
    {
      'name':'Healing Potion',
      'description':'Heals 1d8 damage upon consumption.  Tastes like raspberries.',
      'image':'',
      'consumable':true,
      'cost':{'Gold':1},
      'effect':{'Health':'1d8'},
      'permanent':false
    },
    {
      'name':'Bread',
      'description':'Made of flour, water, sugar, yeast, butter, and love.  Mmmmm bread.',
      'image':'',
      'consumable':true,
      'cost':{'Copper':1},
      'effect':{'Health':'1d4'},
      'permanent':false
    },
    {
      'name':'Pickles',
      'description':'Cucumbers and dill soaked in vinegar.  Love them?  Dill-ightful!  Hate them.  Dill with it.',
      'image':'',
      'consumable':true,
      'cost':{'Copper':1},
      'quantity':{'min':0,'max':5},
      'effect':{'Health':'1'},
      'permanent':false
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
  const defaultSpells = [
    {
      'name':'Fireball',
      'description':'Fire wells up in the palm of your hand, and launches toward your target at your command.',
      'level':1,
      'category':'Attack',
      'castingDifficulty':10,
      'damage':{'Normal':'1d4+INT', 'Effective':'1d6+INT', 'Exceptional':'2d4+INT','Masterful':'2d6+INT'},
      'spellbookCost':{'Gold':1},
      'range':5,
      'duration':0
    },
    {
      'name':'Water Bolt',
      'description':'Water is condensed from the air around you and forms a deadly projectile.',
      'level':1,
      'category':'Attack',
      'castingDifficulty':10,
      'damage':{'Normal':'1d4+INT', 'Effective':'1d6+INT', 'Exceptional':'2d4+INT','Masterful':'2d6+INT'},
      'spellbookCost':{'Gold':1},
      'range':5,
      'duration':0
    },
    {
      'name':'Wind Cutter',
      'description':'Wind gathers at your beckon a is released so forcefully that it cuts like a blade.',
      'level':1,
      'category':'Attack',
      'castingDifficulty':10,
      'damage':{'Normal':'1d4+INT', 'Effective':'1d6+INT', 'Exceptional':'2d4+INT','Masterful':'2d6+INT'},
      'spellbookCost':{'Gold':1},
      'range':5,
      'duration':0
    },
    {
      'name':'Rock Throw',
      'description':'Earth gathers and hardens into a rock that you hurl at your enemies.',
      'level':1,
      'category':'Attack',
      'castingDifficulty':10,
      'damage':{'Normal':'1d4+INT', 'Effective':'1d6+INT', 'Exceptional':'2d4+INT','Masterful':'2d6+INT'},
      'spellbookCost':{'Gold':1},
      'range':5,
      'duration':0
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
  const defaultLanguages = [
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
  const defaultCurrencies = [
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

  const hostCampaign = ref(async(data)=>{
    //Create a campaign doc
    
    const newCampaign = await addDoc(collection(db,'campaigns'),data)
    // hosting.value.push({data:()=>{return newCampaignInfo.value},id:newCampaign.id})
    // showHostingPopup.value = false
    //instead of just looking at the campaigns, let's navigate to the new campaign
    await navigateTo('/trpg/'+newCampaign.id+'/gm/')
  })

  const newCampaignInfo = ref(
    {
      'name':'',
      'host':userProfile.value.uid,
      'password':'',
      'worldConfig':{name:''},
      'createDate': new Date().toDateString(),
      'players':[],
      'playerIds':[],
      'races':defaultRaces,
      'skills':defaultSkills,
      'playerConfig':defaultPlayerConfig,
      'party':[],
      'livingNPCs':[],
      'characters':[], //All living NPCs in existence
      'graveyard':[], //Dead NPCs - could be fun to log dead monsters too
      'bestiary':bestiary,
      'weapons':defaultWeapons,
      'armor':defaultArmor,
      'accessories':defaultAccessories,
      'items':defaultItems,
      'languages':defaultLanguages,
      'currencies':defaultCurrencies,
      'battlefield':[],
      'masterSpellbook':defaultSpells,
      'gmNotes':'',
      'publicNotes':'',
      'rolls':[],
      'activeMapId':''

    }
  )

  const signOut = async ()=>{
    await navigateTo('/trpg/logout')
  }
  //Join a game should present an input box where users enter a code to get to a specific lobby where they can create a character.
</script>