<script lang="ts">
import type { WeatherInformation } from '@/model/weatherInformation';
import type {PropType} from  "vue";
import {defineComponent} from "vue";
export default defineComponent({
    props: {
        weather: {
            type: Object as PropType<WeatherInformation>,
            required: true
            }
        }
})

</script>

<template>
   <div>
    <img :src="weather.icon"/>
    <p>{{weather.temperature}}</p>
   </div>
   <p>{{weather.description}}</p>
   <p>{{weather.additionalInformation}}</p>
</template>

<style scoped>

</style>