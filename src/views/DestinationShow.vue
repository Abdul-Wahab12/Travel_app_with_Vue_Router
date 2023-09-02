<template>
    <section class="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/public/images/${destination.image}`" :alt="destination.name">
            <p>{{ destination.description }}</p>
        </div>
    </section>
</template>

<script>
import { onMounted } from 'vue';
import sourceData from '../data.json';

export default {
    computed: {
        destinationId() {
            return parseInt(this.$route.params.id);
        },
        destination() {
            const data = sourceData.destinations.find((destination) => destination.id === this.destinationId);
            console.log("Data: ", data);
            return data;
        }
    },
}
</script>