<template>
    <div>
        <h2>{{blog.title}}</h2>
        <blog> 
            <nuxt-content 
            class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto text-black dark:text-white"
            :document="blog" /> 
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