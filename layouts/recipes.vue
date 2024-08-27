<template>
    <div>
        <LayoutHeader />
        
        <div class="container">
            <slot name="banner" />
        </div>
        
        <div class="container">
            <div class="flex flex-row mt-16 gap-4">
                <aside class="w-1/4">
                    <slot name="sidebar" />
                </aside>
                <main class="w-3/4 h-screen">
                    <slot name="content" />
                </main>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>

</style>