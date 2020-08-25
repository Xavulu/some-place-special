<template>
    <div>
        <blog> 
            <nuxt-content :document="blog" /> 
        </blog>
    </div>
</template>

<script>
    export default {
        layout(context) {
            return 'default'
        },
        async asyncData({$content, params}){
            const blog = await $content('blogs', params.slug).fetch() 

            return {blog}
        }
    }
</script>

<style lang="scss" scoped>

</style>