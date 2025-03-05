<template>
  <div class="comment-form">
    <h2>Leave a Comment</h2>
    <form @submit.prevent="submitComment">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required class="form-control" />
      </div>
      <div class="form-group">
        <label for="comment">Comment:</label>
        <textarea id="comment" v-model="comment" required class="form-control"></textarea>
      </div>
      <button type="submit" class="btn">Submit</button>
      <div v-if="submissionStatus" class="submission-status">
        {{ submissionStatus }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '../lib/supabaseClient';

const name = ref('');
const comment = ref('');
const submissionStatus = ref(null);
const tableName = 'comments'; // Name of your Supabase table

async function submitComment() {
  submissionStatus.value = "Submitting...";
  try {
    const { error } = await supabase
      .from(tableName)
      .insert([{ name: name.value, comment: comment.value }]);

    if (error) {
      console.error("Error inserting comment:", error.message); // Log the error message
      submissionStatus.value = "Error submitting comment: " + error.message; // Show the error message
    } else {
      submissionStatus.value = "Comment submitted successfully!";
      name.value = ''; // Clear form fields
      comment.value = '';
    }
  } catch (err) {
    console.error("An unexpected error occurred:", err);
    submissionStatus.value = "An unexpected error occurred. Please try again later.";
  }
}
</script>

<style scoped>
.comment-form {
  background-color: #f9f9f9; /* Light background for the form */
  padding: 20px;
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  max-width: 500px; /* Limit the width of the form */
  margin: 20px auto; /* Center the form */
}

h2 {
  color: #333; /* Darker color for the heading */
  margin-bottom: 20px; /* Space below the heading */
}

.form-group {
  margin-bottom: 1.5rem; /* Increased space between form groups */
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold; /* Bold labels for better visibility */
}

.form-control {
  width: 100%;
  padding: 0.75rem; /* Increased padding for better touch targets */
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s; /* Smooth transition for border color */
}

.form-control:focus {
  border-color: #007bff; /* Change border color on focus */
  outline: none; /* Remove default outline */
}

.btn {
  padding: 0.75rem 1.5rem; /* Increased padding for buttons */
  background-color: #007bff; /* Primary button color */
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s; /* Smooth transition for background color */
}

.btn:hover {
  background-color: #0056b3; /* Darker shade on hover */
}

.submission-status {
  margin-top: 10px; /* Space above the status message */
  color: #28a745; /* Green color for success messages */
  font-weight: bold; /* Bold text for emphasis */
}
</style>