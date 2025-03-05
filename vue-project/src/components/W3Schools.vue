<template>
  <div class="w3schools">
    <!-- Link to W3Schools website -->
    <a href="https://www.w3schools.com" target="_blank" rel="noopener noreferrer">
      <img src="https://www.w3schools.com/images/w3schools_logo_436_2.png" alt="W3Schools Logo" class="w3schools-logo" />
    </a>
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<style>
.w3schools {
  display: inline-block; /* Aligns the component inline */
  margin: 10px; /* Space around the component */
  padding: 10px; /* Space inside the component */
  background-color: transparent; /* Transparent background */
  text-align: center; /* Center text and logo */
}

.w3schools-logo {
  width: 175px; /* Adjust size as needed */
  height: auto; /* Maintain aspect ratio */
  display: block; /* Block display for centering */
  margin: 0 auto 10px; /* Center the logo and add space below */
}
</style>