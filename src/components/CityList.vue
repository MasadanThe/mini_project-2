<script lang="ts">
import type { City } from '@/model/city';
import type {PropType} from  "vue";
import {defineComponent} from "vue";
export default defineComponent({
    props: {
      cities: {
            type: Object as PropType<Array<City>>,
              required:true
            
        }
      }
})

</script>

<template>
  <ul>
    <li v-for="city in cities">
      <p>{{ city.city }} </p>
    </li>
  </ul>
</template>

<style scoped>

</style>