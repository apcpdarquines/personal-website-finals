<template>
    <h1>My Hobbies</h1>
    <ul>
      <li v-for="hobbies in hobbies" :key="hobbies.id">{{ hobbies.name }}</li>
    </ul>
  </template>
  
  <script></script>
  
  <style>
    #app > div {
      border: dashed black 1px;
      display: inline-block;
      margin: 10px;
      padding: 10px;
      background-color: lightyellow;
    }
  </style>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const hobbies = ref([])

async function getHobbies() {
  const { data } = await supabase.from('hobbies').select()
  hobbies.value = data
}

onMounted(() => {
  getHobbies()
})

</script>


<style>
  #app > div {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightyellow;
  }
</style>