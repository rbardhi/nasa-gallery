<template>
    <div>
        <div>
            <div v-for="(photo, index) in photos" :key="index">
                <photo :photo="photo"/>
            </div>
        </div>
        <infinite-scroll :busy="busy" @load-more="handleLoadMore"/>
    </div>
</template>
<script>
import Photo from './Photo';
import InfiniteScroll from './InfiniteScroll';

import {mapGetters, mapActions} from 'vuex';

export default {
    components: {
       Photo,
        InfiniteScroll,
    },
    data(){
        return {
            busy: false,
        }
    },
    computed: {
        ...mapGetters(['getPhotos']),
        photos(){
            return this.getPhotos;
        }
    },
    methods: {
        ...mapActions(['fetchPhotos']),
        handleLoadMore({pageNumber}){
            this.busy = true
            this.fetchPhotos({pageNumber, paginate: true,})
            .catch(error => {
                console.log(error);
            })
            .finally( () => {
                this.busy = false;
            });
        }
    },
    created(){
        this.fetchPhotos({pageNumber: 1, paginate: false,})
            .catch(error => {
                console.log(error);
            });
    }
}    
</script>