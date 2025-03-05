<template>
  <div>
    <h1>Comments</h1>
    <ul>
      <li v-for="comment in comments" :key="comment.id">{{ comment.name }}: {{ comment.comment }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../lib/supabaseClient';

const comments = ref([]);

async function getComments() {
  const { data, error } = await supabase.from('comments').select();
  if (error) {
    console.error("Error fetching comments:", error);
  } else {
    comments.value = data;
  }
}

onMounted(() => {
  getComments();
});
</script>

<style>
#app > div {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightyellow;
}

h1 {
  color: #333; /* Darker color for the heading */
  margin-bottom: 20px; /* Space below the heading */
}

</style>