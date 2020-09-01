<template>
    <div>
        <img v-if="mode === 'light'" class="logo" src="~/static/images/exef_logo_light.png/" style="width:700px" alt="exef.dev logo"/> 
        <img v-else-if="mode === 'dark'" class="logo" src="~/static/images/exef_logo_dark.png/" style="width:700px" alt="exef.dev logo"/>
    </div>
</template>

<script>
    export default {
        computed: {
            mode() {
                return this.$colorMode.preference;
            }
    }
}
</script>

<style lang="scss" scoped>

</style>