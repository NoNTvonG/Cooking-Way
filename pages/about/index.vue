<template>
    <div class="colors">
        <div class="Primary">Primary</div>
        <div class="Dark">Dark</div>
        <div class="Secondary">Secondary</div>
        <div class="Bright">Bright</div>
    </div>
</template>
<script lang="ts" setup>
definePageMeta({
    layout: 'main'
});
</script>

<style lang="scss" scoped>
.colors > div {
    margin: .625rem;
    padding: .625rem;
}
.Primary {
    background: #4CAF50;
}
.Dark {
    background: #1B1B1B;
}
.Secondary {
    background: #A3D9A5;
}
.Bright {
    background: #FCF1E6;
}
</style>

