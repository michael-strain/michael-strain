<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <v-navigation-drawer
    permanent
    class=""
  >
    <h2>LSDope</h2>
    <v-tabs
      v-model="tab"
      bg-color="transparent"
      grow
      direction="vertical"
    >
      <v-tab
        v-for="item in items"
        :key="item"
        :value="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-list
      density="compact"
    >
      <v-list-item
        prepend-icon="mdi-star"
        title="Search"
        value="Placeholder"
      />
      <v-list-item
        prepend-icon="mdi-star"
        title="My Account"
        value="Placeholder"
      />
      <v-list-item
        prepend-icon="mdi-star"
        title="Search"
        value="Placeholder"
      />
      <v-list-item
        prepend-icon="mdi-star"
        title="Cart"
        value="Placeholder"
      />
    </v-list>
    <template #append>
      <div class="">
        <v-list-item>
          Log Out of Account
        </v-list-item>
      </div>
    </template>
  </v-navigation-drawer>
</template> 

<script>
  export default {
    data () {
      return {
        tab: 'Appetizers',
        items: [
          'All', 'Cups', 'Shirts', 'Towels',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>