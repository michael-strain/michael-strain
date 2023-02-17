<template>
  <main class="wrapper" :class="mode">
    <div class="grid">
      <AppButton text="Hello VueDose!" />
      
    </div>
  </main>
</template>

<script>
import AppButton from "/components/AppButton";


export default {
  name: "App",
  data: () => ({
    mode: "light",
  }),
  components: {
    AppButton,
  },
  methods: {
    toggleTheme() {
      this.mode = this.mode === "light" ? "dark" : "light";
    },
  },
};
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
<style scoped>
.light {
  --background-color: white;
  --on-background-color: #222;
}

.dark {
  --background-color: #222;
  --on-background-color: white;
}

.custom-theme {
  --button-border-color: pink;
  --button-hover-background-color: rgb(206, 161, 195);
}

.wrapper {
  width: 100%;
  min-height: 100vh;

  margin: 0;
  padding: 0;
  transition: 1s ease-in-out background-color;
  background-color: var(--background-color);
}

.grid {
  color: var(--on-background-color);
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 24px;
}
</style>
