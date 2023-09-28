<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="">
    <div>
      <v-toolbar color="primary">
        <!-- <v-btn
          variant="text"
          icon="mdi-menu"
        /> -->

        <v-toolbar-title>
          <p class="toolbarheader text-center">
            My Files
          </p>
        </v-toolbar-title>

        <!--Search Btn-->
          <v-btn
            variant="text"
            icon="mdi-magnify"
          />
        <!--New Email Btn-->
          <v-btn
            variant="text"
            icon="mdi-upload"
          />
      </v-toolbar>
      <!--Lists-->
      <v-list lines="two">
        <p class="listheader">
          Folders
        </p>

        <v-list-item
          v-for="folder in folders"
          :key="folder.title"
          :title="folder.title"
          :subtitle="folder.subtitle"
        >
          <template #prepend>
            <v-avatar color="grey">
              <v-icon color="white">
                mdi-folder
              </v-icon>
            </v-avatar>
          </template>

          <template #append>
            <div>
              <v-btn
                color="grey-lighten-1"
                icon="mdi-information"
                variant="text"
              />
              <v-tooltip
                activator="parent"
                location="start"
              >
                Additional Information
              </v-tooltip>
            </div>
          </template>
        </v-list-item>

        <v-divider
          thickness="2"
          class="my-5"
        />
        

        <p class="listheader">
          Uploads
        </p>

        <v-list-item
          v-for="file in files"
          :key="file.title"
          :title="file.title"
          :subtitle="file.subtitle"
        >
          <template #prepend>
            <v-avatar :color="file.color">
              <v-icon color="white">
                {{ file.icon }}
              </v-icon>
            </v-avatar>
          </template>

          <template #append>
            <v-btn
              color="grey-lighten-1"
              icon="mdi-information"
              variant="text"
            />
            <v-tooltip
              activator="parent"
              location="start"
            >
              Additional Information
            </v-tooltip>
          </template>
        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script setup>
const files = ref([
  {
  color: 'blue',
  icon: 'mdi-clipboard-text',
  subtitle: 'Feb 17th, 2023',
  title: 'Anniversary Plans',
  },
  {
  color: 'amber',
  icon: 'mdi-cash',
  subtitle: 'Aug 10th, 2023',
  title: 'Electronic Payment Confirmation',
  },
  ],)
const folders = ref([
  {
  subtitle: 'Jan 9, 2023',
  title: 'Photos',
  },
  {
  subtitle: 'Feb 17, 2023',
  title: 'Recipes',
  },
  {
  subtitle: 'Mar 28, 2023',
  title: 'Work',
  },
  ],
  )

</script>