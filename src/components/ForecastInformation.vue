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
        <h2>Hourly forecast</h2>
    </div>
    <div id="weather-info">
   <ul>
    <li v-for="forecast in weather.forecast">
        <div id="info">
      <img :src="forecast.icon">
      <p>{{ forecast.temperature }}c</p>
      <p>{{ forecast.time }} </p>
    </div>
    </li>
  </ul>
</div>
</template>

<style scoped>
#weather-info
{
  border-color: white;
  border-style: solid;
}

h2{
    margin-left: 25%;
}
#info{
    display: flex;
}

p{
    margin:auto;
}
li{
    list-style-type: none;
}
</style>