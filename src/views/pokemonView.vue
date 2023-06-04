<script setup>
import {useGetData} from "@/composables/getPokemon"
import { useRoute } from "vue-router";

const Route = useRoute();
const {data,getpokemones} = useGetData();
getpokemones(`https://pokeapi.co/api/v2/pokemon/${Route.params.nombre}`)
</script>
<template>
     <img :src="data.sprites.front_default" alt="">
    {{ data.name }}
</template>