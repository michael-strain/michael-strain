<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-card>
      <!--Toolbar-->
      <v-toolbar
        density="compact"
        class="bg-pink"
      >
        <v-toolbar-title
          class="toolbarheader"
        >
          Princess Peach's Phone
        </v-toolbar-title>
        <template #append>
          <v-icon
            icon="mdi-wifi-strength-4"
            size="small"
          />
          <v-icon
            icon="mdi-signal"
            size="small" 
            class="ms-2"
          />
          <v-icon
            icon="mdi-battery"
            size="small" 
            class="ms-2"
          />
        </template>
      </v-toolbar>
      <div class="flex justify-center bg-pink-150">
        <v-tabs
          v-model="tab"
          elevation="5"
        >
          <v-tab value="one">
            Bowser
          </v-tab>
          <v-tab value="two">
            Daisy
          </v-tab>
          <v-tab value="three">
            Mario
          </v-tab>
        </v-tabs>
      </div>
      <!--Working-->
      <v-card-text>
        <v-window
          v-model="tab"
          scrollable
        >
          <v-window-item value="one">
            <v-timeline
              density="compact"
              align="start"
            >
              <v-timeline-item
                v-for="message in bowser"
                :key="message"
                :dot-color="message.color"
                size="x-small"
              >
                <div>
                  <div class="font-weight-normal">
                    <strong>{{ message.from }}</strong> @{{ message.time }}
                  </div>
                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-window-item>

          <v-window-item value="two">
            <v-timeline
              density="compact"
              align="start"
            >
              <v-timeline-item
                v-for="message in daisy"
                :key="message"
                :dot-color="message.color"
                size="x-small"
              >
                <div>
                  <div class="font-weight-normal">
                    <strong>{{ message.from }}</strong> @{{ message.time }}
                  </div>
                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-window-item>

          <v-window-item value="three">
            <v-timeline
              density="compact"
              align="start"
            >
              <v-timeline-item
                v-for="message in mario"
                :key="message"
                :dot-color="message.color"
                size="x-small"
              >
                <div>
                  <div class="font-weight-normal">
                    <strong>{{ message.from }}</strong> @{{ message.time }}
                  </div>
                  <div>{{ message.message }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup>
const tab = ref ()

// const contacts =ref ([
//   'bowser',
//   'daisy',
//   'mario'
// ])
// const selectedContact = ref(contacts.value[0])
 
const bowser = ref([
{
  from: 'Bowser',
  message: 'Hey Peach, I heard you\'re throwin\' a big shindig. Mind if I crash the party?',
  time: '10:45',
  color: 'blue'
},

{
  from: 'Princess Peach',
  message: 'Bowser, you know how these parties go. It\'s all about fun and peace. Can you keep it civil?',
  time: '11:00',
  color: 'pink'
},

{
  from: 'Bowser',
  message: 'Come on, Peach! I promise I won\'t kidnap you or anything. I just want to enjoy some cake and games.',
  time: '11:05',
  color: 'blue'
},

{
  from: 'Princess Peach',
  message: 'Alright, Bowser, but no mischief. We\'re celebrating harmony in the kingdom. Behave, and you\'re welcome to join.',
  time: '11:10',
  color: 'pink'
},

{
  from: 'Bowser',
  message: 'Thanks, Peach. I\'ll be on my best behavior. See you there!',
  time: '11:20',
  color: 'blue'
},
])

const daisy = ref([
  {
    "from": "Princess Peach",
    "message": "Hi Daisy! I was thinking it's time for another royal party in the Mushroom Kingdom. What do you say?",
    "time": "08:12",
    "color": "pink",
  },
  {
    "from": "Daisy",
    "message": "Oh, Peach! You read my mind! I'm in for a fabulous party. Let's make it unforgettable!",
    "time": "08:34",
    "color": "yellow",
  },
  {
    "from": "Princess Peach",
    "message": "Fantastic! I'll get Toadsworth to start the preparations. Any theme ideas?",
    "time": "09:02",
    "color": "pink",
  },
  {
    "from": "Daisy",
    "message": "How about a tropical luau? Grass skirts, leis, and lots of delicious fruit!",
    "time": "09:23",
    "color": "yellow",
  },
  {
    "from": "Princess Peach",
    "message": "Love it! And we can have a dance-off with the Toads. They've got some moves!",
    "time": "09:41",
    "color": "pink",
  },
  {
    "from": "Daisy",
    "message": "Haha! The Toads are surprisingly good dancers. It's a plan, then. Let's make this party pop, Peach!",
    "time": "09:57",
    "color": "yellow",
  }
]
)
const mario = ref([
  {
    from: 'Princess Peach',
    message: "Hi Mario! I'm hosting a party in the Mushroom Kingdom. Would you like to come?",
    time: '10:13am',
    color: 'pink',
  },
  {
    from: 'Mario',
    message: "Oh, that sounds-a great! What kind of party is it, Peach?",
    time: '10:20am',
    color: 'red',
  },
  {
    from: 'Princess Peach',
    message: "It's a luau, Mario! Grass skirts, leis, and tropical fun.",
    time: '10:28am',
    color: 'pink',
  },
  {
    from: 'Mario',
    message: "That's-a fantastic! You know, Luigi really likes luaus.",
    time: '10:35am',
    color: 'red',
  },
  {
    from: 'Princess Peach',
    message: "Luigi is welcome too, Mario! The more, the merrier. It's going to be a blast!",
    time: '10:42am',
    color: 'pink',
  },
  {
    from: 'Mario',
    message: "Great-a news, Peach! We'll be there with our dancing shoes on!",
    time: '10:50am',
    color: 'red',
  },
]
)

// selectedContact.value = 'bowser'
// conversation.value = bowser.value

// const allConversations = ref([{bowser:bowser.value},{daisy:daisy.value},{mario:mario.value}])

// onMounted(()=>{
//   selectedContact.value = 'bowser'
//   conversation.value = bowser.value
// })

// watch(selectedContact,(newSelect)=>{
//   conversation.value = allConversations.value[newSelect] ? allConversations.value[newSelect] : allConversations.value[selectedContact.value]; 
  // if(selectedContact.value=='bowser'||newSelect=='bowser'){
  //   conversation.value = bowser.value
  // }
  // if(selectedContact.value=='daisy'||newSelect=='daisy'){
  //   conversation.value = daisy.value
  // }
  // if(selectedContact.value=='mario'||newSelect=='mario'){
  //   conversation.value = mario.value
  // }
// })
</script>