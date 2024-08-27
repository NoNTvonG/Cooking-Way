<template>
    <header class="bg-white">
        <div class="container">
            <div class="flex items-center justify-between gap-4 py-10">
                <div class="flex-shrink-0">
                    <NuxtLink to="/">
                        <span class="text-3xl font-medium">
                            Cooking<span class="text-c-green font-pacifico">Way</span>
                        </span>
                    </NuxtLink>
                </div>

                <nav class="flex-1 mx-4">
                    <ul class="flex items-center justify-center gap-10">
                        <li v-for="rout in routs" :key="rout.name">
                            <NuxtLink :to="rout.path" activeClass="border-b-2 border-c-green">{{ rout.title }}</NuxtLink>
                        </li>
                    </ul>
                </nav>

                <div class="flex-shrink-0">
                    <ul class="flex items-center justify-between gap-4">
                        <li>
                            <NuxtLink to="/login">Login</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/register">Register</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
    const routs = [
        { name: 'home', path: '/', title: 'Home' },
        { name: 'recipes', path: '/recipes', title: 'Recipes' },
        { name: 'about', path: '/about', title: 'About' },
    ]
</script>

<style lang="scss" scoped>

</style>