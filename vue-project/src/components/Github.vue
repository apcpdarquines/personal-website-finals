<template>
  <div class="github">
    <a href="https://github.com/apcpdarquines" target="_blank" rel="noopener noreferrer">
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub Logo" class="github-logo" />
    </a>
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'GitHub',
    }
  }
};
</script>

<style>
.github {
  display: inline-block;
  margin: 10px;
  padding: 10px;
  background-color: transparent; /* Changed background color to differentiate */
}

.github-logo {
  width: 50px; /* Adjust size as needed */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Center the logo */
  margin: 0 auto 10px; /* Center the logo and add space below */
}
</style>