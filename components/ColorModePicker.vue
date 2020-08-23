<template> 
    <div>
        <button class="btn border border-white capitalize" @click="changeMode">
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