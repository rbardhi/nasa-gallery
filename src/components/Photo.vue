<template>
    <div>
        <img v-if="!photo.img_src" src="some url" class="picture">
        <img v-else :src="photo.img_src" class="picture">
    </div>
</template>
<script>
export default {
    props: {
        photo: {
            type: Object,
            required: false,
        }
    }
}
</script>
<style scoped>
    .picture{
        width: 300px;
        height: 300px;
    }
</style>