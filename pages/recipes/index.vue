<template>
    <NuxtLayout name="recipes">
        <template #banner>
            <SpecificBanner />
        </template>
        <template #sidebar>
            <LayoutSidebar />
        </template>
        <template #content>
            <div class="p-4 bg-green-100 rounded-xl">
                content
            </div>
        </template>
    </NuxtLayout >
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>