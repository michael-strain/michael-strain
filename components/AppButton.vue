<template>
  <button>{{ text }}</button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    text: String
  }
};
</script>

<style scoped>
button {
  color: inherit;
  border: 4px solid #41b883;
  font-weight: bold;
  border-radius: 9999px;
  padding: 12px 24px;
  transition: 0.25s ease-in-out all;
}

button:hover {
  color: white;
  background-color: #41b883;
}
</style>
