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
    <div id="weather-info">
   <div id="icon-temperature">
    <img :src="weather.icon"/>
    <p id="temperature">{{weather.temperature}}c</p>
   </div>
   <p id="description">{{weather.description}}</p>
   <p>{{weather.additionalInformation}}</p>
</div>
</template>

<style scoped>
#weather-info
{
  border-color: white;
  border-style: solid;
}

#icon-temperature{
    display: flex;
}

#temperature{
    font-size: 5em;
    margin: auto;
}

#description{
    
  margin-left: 40%;
 }
</style>