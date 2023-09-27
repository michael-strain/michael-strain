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
        <v-btn>
          Search
          <v-tooltip
            activator="parent"
            location="start"
            open-on-hover
          >
            Search
          </v-tooltip>
        </v-btn>
        <v-btn>
          Sun
          <v-tooltip
            activator="parent"
            location="start"
            open-on-hover
          >
            Sun
          </v-tooltip>
        </v-btn>
        <v-btn>
          Admin
          <v-tooltip
            activator="parent"
            location="start"
            open-on-hover
          >
            Admin
          </v-tooltip>
        </v-btn>
      </div>


      <v-tooltip
        location="top"
      >
        <template #activator="{ props }">
          <v-btn
            icon
            v-bind="props"
          >
            <v-icon color="grey-lighten-1">
              mdi-flower
            </v-icon>
          </v-btn>
        </template>
        <span>flower</span>
      </v-tooltip>
      

      <!--New Email Btn-->
      <v-tooltip
        location="top"
      >
        <template #activator="{ props }">
          <v-btn
            icon
            v-bind="props"
          >
            <v-icon color="grey-lighten-1">
              mdi-cart
            </v-icon>
          </v-btn>
        </template>
        <span>Tooltip</span>
      </v-tooltip>
      <!-- <div>
      <v-btn>
              New
              <v-tooltip
                activator="parent"
                location="start"
                open-on-hover
              >
                Write New Email
              </v-tooltip>
            </v-btn></div> -->
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
</script>