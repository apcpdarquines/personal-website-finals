<template>
  <header>
    <h1>Personal Profile Web Page</h1>
  </header>
  <main>
    <section class="about-me container">
      <h2>About Me</h2>
      <p>I am Peter D Arquines Jr, a 2nd year Computer Science College Student at Asia Pacific College</p>
    </section>

    <section class="education container">
      <h2>Education / Achievements</h2>
      <div class="social-links">
        <github />
        <linkedin />
        <w3schools />
      </div>
    </section>

    <section class="hobbies container">
      <h2>Hobbies & Interests</h2>
      <p><!-- Add your hobbies and interests here --></p>
    </section>

    <section class="goals container">
      <h2>Goals In Life / Dream</h2>
      <goals />
    </section>

    <section class="gallery-section container">
      <h2>Picture Gallery</h2>
      <div class="gallery">
        <!-- Add your images here -->
      </div>
    </section>
  </main>
</template>

<script>
  // You can add any necessary script logic here
</script>

<style>
<template>
  <header>
    <h1>Personal Profile Web Page</h1>
  </header>
  <main>
    <section class="container">
      <h2>About Me</h2>
      <p>I am Peter D Arquines Jr, a 2nd year Computer Science College Student at Asia Pacific College</p>
    </section>

    <section class="container">
      <h2>Education / Achievements</h2>
      <div class="social-links">
        <github/>
        <linkedin/>
        <w3schools/>
      </div>
    </section>

    <section class="container">
      <h2>Hobbies & Interests</h2>
        <hobbies/>
    </section>

    <section class="container">
      <h2>Goals In Life / Dream</h2>
        <goals/>
    </section>

    <section class="container">
      <h2>Picture Gallery</h2>
      <div class="gallery">
        <!-- Add your images here -->
      </div>
    </section>
  </main>
</template>

<script>
  // You can add any necessary script logic here
</script>

<style>
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  height: 100vh; /* Ensure the body takes the full height */
  background: linear-gradient(270deg, rgb(117, 36, 36), rgb(102, 37, 37), rgb(104, 16, 16));
  background-size: 600% 600%; /* Increase the size for smoother animation */
  animation: gradientAnimation 5s ease infinite; /* Animation properties */
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

header {
  text-align: center;
  color: white;
  padding: 30px 0;
  border-radius: 0 0 20px 20px; /* Rounded bottom corners */
  background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent background */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Shadow for depth */
}

h1 {
  font-size: 2.5em; /* Larger font size for the main title */
  margin: 0;
}

main {
  display: grid;
  flex-direction: column; /* Stack sections vertically */
  align-items: center; /* Center align sections */
  padding: 20px;
  grid-template-columns: 1fr; /* Single column layout */
  grid-gap: 20px; /* Space between grid items */
}

.container {
  flex: 1;
  max-width: 800px; /* Limit the width for better readability */
  padding: 30px;
  border-radius: 20px; /* Rounded corners */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Shadow for depth */
  margin-bottom: 20px; /* Space between sections */
}

/* Individual styles for each section */
.about-me {
  background-color: rgba(255, 255, 255, 0.9); /* Light background */
  border-left: 5px solid #4CAF50; /* Green left border */
  grid-column: 1; /* Position in the first column */
  margin: 20px 0; /* Adjust vertical spacing */
}

.education {
  background-color: rgb(255, 255, 255); /* Light gray background */
  border-left: 5px solid #2196F3; /* Blue left border */
  grid-column: 2; /* Position in the first column */
  margin: 20px 0; /* Adjust vertical spacing */
}

.hobbies {
  background-color: rgba(255, 245, 157, 0.9); /* Light yellow background */
  border-left: 5px solid #FF9800; /* Orange left border */
  grid-column: 1; /* Position in the first column */
  margin: 20px 20px; /* Adjust vertical spacing */
}

.goals {
  background-color: rgba(220, 220, 255, 0.9); /* Light blue background */
  border-left: 5px solid #3F51B5; /* Indigo left border */
  grid-column: 2; /* Position in the first column */
  margin: 20px 0; /* Adjust vertical spacing */
}

.gallery-section {
  background-color: rgba(255, 228, 225, 0.9); /* Light pink background */
  border-left: 5px solid #E91E63; /* Pink left border */
  grid-column: 1; /* Position in the first column */
  margin: 20px 0; /* Adjust vertical spacing */
}

h2 {
  color: #333;
  margin-top: 20px;
  font-size: 1.8em; /* Slightly larger font size for section titles */
  border-bottom: 2px solid rgba(117, 36, 36, 0.5); /* Underline effect */
  padding-bottom: 10px; /* Space below the title */
}

p {
  line-height: 1.6;
  color: #555;
  margin-bottom: 20px; /* Space between paragraphs */
}

.social-links {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.social-links > * {
  transition: transform 0.3s; /* Smooth hover effect */
}

.social-links > *:hover {
  transform: scale(1.1); /* Scale up on hover */
}

.gallery {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.gallery img {
  width: 30%;
  margin-bottom: 10px;
  border-radius: 10px; /* Rounded corners for images */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Shadow */
}
</style>