<script lang="ts">
import ForecastInformation from '@/components/ForecastInformation.vue';
import weatherService from '@/service/weatherService';
import WeatherInformation from '../components/WeatherInformation.vue';
const data = {
  weather: WeatherInformation,
  input: "",
  index: null,
  countSaved: 0,
  button1: localStorage.button1,
  button2: localStorage.button2,
  button3: localStorage.button3,
}

export default {
  components: { WeatherInformation, ForecastInformation },
  data() { return data },

  created() {
    //Creates a search if no search exists from before or gets the weather from the first spot in local storage
    if(localStorage.button1 === undefined){
      this.input = "London";
      this.getWeather();
    }
    else{
      this.input = localStorage.button1;
      this.getWeather();
    }
  },

  mounted(){
  },

  methods: {
    onBlur(){
      this.getWeather();
    },

    //When you type you restart the timer
    onChange(){
      clearTimeout(this.index);
      this.index = setTimeout(this.getWeather, 2000);
    },

    getWeather(){
      weatherService.getWeather(this.input).then(data => this.weather = data);
      
    },

    onPressed(button){
      if(button === "button1"){
        this.input = localStorage.button1;
      }
      else if(button === "button2"){
        this.input = localStorage.button2;
      }
      else if(button === "button3"){
        this.input = localStorage.button3;
      }
      this.getWeather();
      
    }
  },

  watch: {
  input: function() {
    this.onChange();
  },

  weather: function(){
    //Checks so you don't get duplicate cities on the buttons
    if(this.countSaved === 0){
      if(!(localStorage.button1 === this.weather.name || localStorage.button2 === this.weather.name || localStorage.button3 === this.weather.name))
      {
        localStorage.button1 = this.weather.name;
        this.button1 = localStorage.button1;
        this.countSaved++;
      }
        
      }
      else if (this.countSaved === 1){
        if(!(localStorage.button1 === this.weather.name || localStorage.button2 === this.weather.name || localStorage.button3 === this.weather.name))
      {
        localStorage.button2 = this.weather.name;
        this.button2 = localStorage.button2;
        this.countSaved++;
      }
      }
      else if (this.countSaved === 2){
        if(!(localStorage.button1 === this.weather.name || localStorage.button2 === this.weather.name || localStorage.button3 === this.weather.name))
      {
        localStorage.button3 = this.weather.name;
        this.button3 = localStorage.button3;
        this.countSaved = 0;
      }
    }
  }
}


}


</script>

<template>
  
  <div id="big-border">
    <header>
    <h1>Weather App</h1>
  </header>
    <div>
      <button id="button1" @click="onPressed('button1')">{{this.button1}}</button>
      <button id="button2" @click="onPressed('button2')">{{this.button2}}</button>
      <button id="button3" @click="onPressed('button3')">{{this.button3}}</button>
    </div>
    <div>
    <input id="input-text" type="text" @change="onBlur" v-model="input">
  </div>

  <WeatherInformation :weather="weather"/>
  <ForecastInformation :weather="weather"/>
</div>
</template>


<style scoped>
h1{
  margin-left: 25%;
}
header{
  background-color: rgba(128, 128, 128, 0.116);
  width:100%;
  
}
button{
  width: 33%;
}
div{
  margin: auto;
  padding: 1em;
}

#input-text{
  width: 100%;
}

#big-border{
  border-color: white;
  border-style: solid;
}

</style>