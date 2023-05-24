<script lang="ts">
import type { City } from '@/model/city';
import CityList from '../components/CityList.vue'
import SearchField from '../components/SearchField.vue'
import WeatherInformation from '../components/WeatherInformation.vue'
const data = {
  cities: new Array<City>()
}

export default {
  components: { CityList },
  data() { return data },
  created() {
    
  }
}

</script>

<template>
  <CityList :cities="cities"/>
</template>
