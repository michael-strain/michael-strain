<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-toolbar image="https://w0.peakpx.com/wallpaper/580/239/HD-wallpaper-super-mario-white-art-cosmic-random-nintendo-logos.jpg">
      <v-toolbar-title>
        <p class="toolbarheader">
          Nintendo's Inbox
        </p>
      </v-toolbar-title>
      <v-btn
        variant="text"
        icon="mdi-magnify"
      />
      <v-btn
        variant="text"
        icon="mdi-plus"
      />
    </v-toolbar>

    <!--Today List-->
    <v-list lines="two">
      <p class="listheader">
        Today
      </p>
      <v-list-item
        v-for="today in todays"
        :key="today.title"
      >
        <v-list-item-title>{{ today.title }}</v-list-item-title>
        <v-list-item-subtitle class="text-primary">
          {{ today.sender }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>{{ today.subtitle }}</v-list-item-subtitle>
        <template #prepend>
          <v-avatar>
            <v-img
              src="https://icon-library.com/images/icon-nintendo/icon-nintendo-21.jpg"
              alt="John"
            />
          </v-avatar>
          <!-- <v-avatar color="grey">
            {{ today.prependAvatar }}
          </v-avatar> -->
        </template>
      </v-list-item>
    </v-list>

    <!--Yesterday List-->
    <v-list lines="two">
      <p class="listheader">
        Yesterday
      </p>
      <v-list-item
        v-for="today in yesterday"
        :key="today.title"
      >
        <v-list-item-title>{{ today.title }}</v-list-item-title>
        <v-list-item-subtitle class="text-primary">
          {{ today.sender }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>{{ today.subtitle }}</v-list-item-subtitle>
        <template #prepend>
          <v-avatar>
            <v-img
              src="https://icon-library.com/images/icon-nintendo/icon-nintendo-21.jpg"
              alt="John"
            />
          </v-avatar>
        </template>
      </v-list-item>
    </v-list>
    

    <!--Earlier List-->
    <v-list lines="two">
      <p class="listheader">
        Earlier
      </p>
      <v-list-item
        v-for="today in yesterday"
        :key="today.title"
      >
        <v-list-item-title>{{ today.title }}</v-list-item-title>
        <v-list-item-subtitle class="text-primary">
          {{ today.sender }}
        </v-list-item-subtitle>
        <v-list-item-subtitle>{{ today.subtitle }}</v-list-item-subtitle>
        <template #prepend>
          <v-avatar>
            <v-img
              src="https://icon-library.com/images/icon-nintendo/icon-nintendo-21.jpg"
              alt="John"
            />
          </v-avatar>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
const todays = ref([
  // {
  //   prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
  //   title: 'Brunch this weekend?',
  //   sender: 'Ali Connors',
  //   subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
  // },
  // {
  //   "title": "Mushroom Kingdom Quest",
  //   "sender": "Mario",
  //   "subtitle": "We've defeated Bowser in the latest encounter and rescued Princess Peach, but we suspect he's up to something big. Stay tuned for more adventures!"
  // },
  {
    "title": "The Hero's Journey",
    "sender": "Link",
    "subtitle": "My quest to save Hyrule continues. Ganon's power is growing, but I've uncovered some ancient relics that might help us in the battle ahead."
  },
  // {
  //   "title": "Pikachu's Adventures",
  //   "sender": "Pikachu",
  //   "subtitle": "The world of Pokémon is vast, and I'm exploring new regions, meeting new friends, and discovering powerful new moves. It's an electrifying journey!"
  // },
  {
    "title": "Galactic Bounty Hunt",
    "sender": "Samus Aran",
    "subtitle": "I've tracked down several Space Pirates and eliminated them. The galaxy is safer, but I'm still hunting for clues about their ultimate plan."
  },
  {
    "title": "Luigi's Mansion Mysteries",
    "sender": "Luigi",
    "subtitle": "I've ventured into new haunted mansions and confronted some truly terrifying ghosts. It's been spooky, but I won't rest until they're all captured!"
  },])
const yesterday = ref([
  {
    "title": "Splatoon Turf Wars",
    "sender": "Inkling",
    "subtitle": "Our turf wars in Inkopolis are intense. We're winning battles, but rival teams are getting stronger. We need more strategies to maintain our dominance."
  },
  // {
  //   "title": "Exploring Dream Land",
  //   "sender": "Kirby",
  //   "subtitle": "I've devoured all sorts of enemies and gained amazing powers. Dream Land is full of surprises, and I'm ready to face any challenge that comes my way!"
  // },
  {
    "title": "The Great Pokémon Adventure",
    "sender": "Ash Ketchum",
    "subtitle": "My journey to become a Pokémon Master continues. I've earned more Gym Badges and made new friends. Pikachu and I are closer to our goal!"
  },
  {
    "title": "Fire Emblem Conquests",
    "sender": "Marth",
    "subtitle": "Our battles for kingdom and honor are fierce. New allies have joined our ranks, but formidable foes stand in our way. Victory is within reach!"
  },
  // {
  //   "title": "Animal Crossing Village Life",
  //   "sender": "Isabelle",
  //   "subtitle": "Life in the village is peaceful and thriving. We've added new residents and expanded our community. It's a wonderful place to live, work, and play!"
  // },
])
  const earlier = ref([
  {
    "title": "Yoshi's Island Adventure",
    "sender": "Yoshi",
    "subtitle": "The baby Mario brothers are safe, and I'm exploring new islands and saving more Yoshi eggs. The journey is never-ending, but we're having a blast!"
  },
  {
    "title": "Donkey Kong Jungle Trek",
    "sender": "Donkey Kong",
    "subtitle": "We're swinging through the jungle, collecting bananas, and thwarting Kremling plots. It's a barrel-blasting adventure that never gets old!"
  },
  {
    "title": "Star Fox Space Battles",
    "sender": "Fox McCloud",
    "subtitle": "The Lylat System is under threat again, and the Star Fox team is ready for action. We've engaged Andross's forces and are striving for victory!"
  },
  {
    "title": "Zelda's Wisdom Quest",
    "sender": "Princess Zelda",
    "subtitle": "I've been studying ancient texts and unlocking the secrets of Hyrule. Together with Link, we're working to restore peace to our beloved kingdom."
  },
  {
    "title": "Wario's Get-Rich-Quick Schemes",
    "sender": "Wario",
    "subtitle": "I've embarked on new get-rich-quick ventures, but things keep going awry. It's a wild ride filled with treasure hunts, odd jobs, and misadventures!"
  }
])

</script>