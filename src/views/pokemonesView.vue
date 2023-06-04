<script setup>
import {useGetData} from "@/composables/getPokemon"


const {data,getpokemones,error,loading} = useGetData();

getpokemones('https://pokeapi.co/api/v2/pokemon')
</script>
<template>
  
<div v-if="loading">
cargando
</div>
<div v-if="data && !error">
  <ul>
   <li v-for="poke in data.results"
    :key="poke">
<router-link :to="`/${poke.name}`">{{ poke.name }}</router-link>
    </li>
  </ul>
</div>

<div class="alert alert-danger" v-if="error
">{{ error }}</div>

<button :disabled="!data.previous" class="btn btn-danger  me-2" @click="getpokemones(data.previous)">atras</button>
<button :disabled="!data.next" class="btn btn-warning" @click="getpokemones(data.next)">sigueinte</button>

</template>