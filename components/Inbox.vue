<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <v-toolbar color="primary">
      <v-toolbar-title>
        <p class="toolbarheader text-center">
          Inbox
        </p>
      </v-toolbar-title>
      <!--Search Btn-->
      <div>
        <v-btn
          variant="text"
          icon="mdi-magnify"
        />
        <v-tooltip
          text="Search Emails"
          location="start"
          activator="parent"
        />
      </div>
      

      <!--New Email Btn-->
      <div>
        <v-btn
          variant="text"
          icon="mdi-plus"
        />
        <v-tooltip
          text="Write New Email"
          location="start"
          activator="parent"
        />
      </div>
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
          <v-avatar color="grey">
            {{ today.prependAvatar }}
          </v-avatar>
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
          <v-avatar color="grey">
            {{ today.prependAvatar }}
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
          <v-avatar color="grey">
            {{ today.prependAvatar }}
          </v-avatar>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
const todays = ref([
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'Brunch this weekend?',
    sender: 'Ali Connors',
    subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
  },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    title: 'Title',
    sender: 'Sender',
    subtitle: 'Message'
  },
])

const yesterday = ref([
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'Brunch this weekend?',
    sender: 'Ali Connors',
    subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
  },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    title: 'Title',
    sender: 'Sender',
    subtitle: 'Message'
  },
])
const earlier = ref([
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'Brunch this weekend?',
    sender: 'Ali Connors',
    subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
  },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    title: 'Title',
    sender: 'Sender',
    subtitle: 'Message'
  },
])

  // onMounted(async()=>{
  //   if(props.category=="photography"){
  //     items.value = [{src:'backgrounds/bg.jpg'}]
  //     console.log("I'm on the photography category")
  //   }
  //   if(props.category=="handDrawn"){
  //     items.value = [{src:'backgrounds/md.jpg'}]
  //     console.log("I'm on the handDrawn category")
  //   }
  //   if(props.category=="favorites"){
  //     items.value = [{src:'backgrounds/md2.jpg'}]
  //     console.log("I'm on the favorites category")
  //   }
  // })
</script>