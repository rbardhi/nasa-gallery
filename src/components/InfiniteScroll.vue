<template>
    <div v-if="busy">...Loading...</div>
</template>
<script>
    export default {
        props: {
            busy: {
                type: Boolean,
                required: true,
            }
        },
        data(){
            return {
                pageNumber: 1,
            }
        },
        methods:{
            scrollCallback() {
                if(this.reachedEnd() && !this.busy){
                    this.pageNumber += 1;
                    this.$emit('load-more', {pageNumber: this.pageNumber});
                }
            },
            reachedEnd(){
                const docElement = document.documentElement;
                return docElement.scrollHeight - docElement.scrollTop === docElement.clientHeight;
            }
        },
        created(){
            document.addEventListener('scroll', this.scrollCallback)
        }
    }
</script>