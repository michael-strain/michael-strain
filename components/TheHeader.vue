<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        permanent
      >
        <v-list nav>
          <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox" />
          <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Supervisors" value="supervisors" />
          <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin" />
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 500px" />
    </v-layout>
  </v-card>
</template>