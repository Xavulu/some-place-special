<template> 
    <div > 
        <button aria-label="light and dark mode switch" class="bg-light-lavender dark:bg-dark-grey border-light-hover dark:border-dark-dhover hover:bg-light-hover dark-hover:bg-dark-dhover font-bold py-2 px-4 rounded-full rounded shadow" @click="changeMode">
        
        {{ btnLabel }}
        </button> 
    </div>
</template>

<script>
export default {
  computed: {
    mode() {
      return this.$colorMode;
    },
    btnLabel() {
      return this.$colorMode.preference === "light" ? "dark" : "light";
    }
  },
  methods: {
    changeMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === "light" ? "dark" : "light";
    }
  }
};
</script>

<style lang="scss" scoped>

</style>