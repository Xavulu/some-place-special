<template>
    <div>
        <blog> 
            <nuxt-content :document="blog" /> 
        </blog>
    </div>
</template>

<script>
    export default {
        async asyncData({$content, params}){
            const blog = await $content('blogs', params.slug).fetch() 

            return {blog}
        }
    }
</script>

<style lang="scss" scoped>

</style>