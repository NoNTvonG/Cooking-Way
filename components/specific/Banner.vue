<template>
    <div id="box-banner">
        <div class="relative px-16 py-12 rounded-2xl bg-white overflow-hidden">
            <NuxtImg class="w-full absolute inset-0" src="/images/Salad_with_Asparagus.jpg" />
            <h3 class="text-white text-base tracking-wider mb-2 relative z-10">Tasty Recipes for Every Season</h3>
            <h2 class="text-white text-3xl font-bold leading-snug max-w-3xl mb-6 font-poppins relative z-10">Discover the Most Popular Seasonal Dishes Everyone is Talking About</h2>
            <p class="text-white max-w-3xl relative z-10">Explore our curated collection of seasonal recipes, featuring fresh ingredients and flavors perfect for any occasion. Elevate your cooking with these must-try dishes!</p>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
#box-banner {
    >div{
        &::before{
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 30%;
            background: linear-gradient(90deg, #4CAF50 0%, transparent 100%);
            z-index: 1;
        }

        &::after{
            content: '';
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 30%;
            background: linear-gradient(-90deg, #4CAF50 0%, transparent 100%);
            z-index: 1;
        }
    }
}
</style>