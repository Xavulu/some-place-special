<template>
    <div>
      <div class="container mx-auto  bg-light-lavender dark:bg-dark-teal max-w-sm rounded shadow overflow-hidden shadow-lg">
        <div class="px-6 py-4"> 
          <li style="list-style-type: none;" aria-label="list of links to blog posts" v-for="post of posts" :key="post.slug">
            <div class="border border-black rounded"> 
              <NuxtLink class="font-bold hover:text-light-logo dark-hover:text-dark-logo" :to="post.slug">{{ post.title }} </NuxtLink>
              <p class="semi-bold">{{post.createdAt}}</p>
              <p> {{post.description}} </p> 
            </div>
          </li>
        </div>
      </div>
    </div>
</template>

<script>
export default {
        layout(context) {
            return 'default'
        },
   async asyncData({ $content }) {
    const posts = await $content("blogs").fetch();
  //
    return {
      posts,
    };
  },
};
</script>