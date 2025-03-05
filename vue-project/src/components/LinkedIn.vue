<template>
  <div class="linkedin">
    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="LinkedIn Logo" class="linkedin-logo" />
    </a>
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'LinkedIn',
      message: 'I like LinkedIn'
    }
  }
};
</script>

<style>
.linkedin {
  border: dashed black 1px;
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: lightyellow; /* Keeping the same background color */
  text-align: center; /* Center the text and logo */
}

.linkedin-logo {
  width: 50px; /* Adjust size as needed */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Center the logo */
  margin: 0 auto 10px; /* Center the logo and add space below */
}
</style>