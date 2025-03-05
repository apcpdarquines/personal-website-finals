<template>
    <h1>Goals</h1>
    <ul>
      <li v-for="goals in goals" :key="goals.id">{{ Goals.name }}</li>
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

const goals = ref([])

async function getGoals() {
  const { data } = await supabase.from('goals').select()
  goals.value = data
}

onMounted(() => {
  getGoals()
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