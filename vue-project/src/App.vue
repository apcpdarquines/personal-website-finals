<template>
    <personal-profile/>
    <h2>Please Leave A Comment Here</h2> <!-- Changed <hi> to <h2> -->
    <comment-form/>
    <comment/>
</template>

<style>
* {
  box-sizing: border-box;
}

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
  padding: 20px 0;
  border-radius: 8px 8px 0 0;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Shadow for depth */
}

main {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.main-content {
  flex: 3;
  padding: 20px;
}

.sidebar {
  flex: 1;
  background-color: rgba(255, 255, 255, 0.9); /* Slightly transparent sidebar */
  padding: 20px;
  border-left: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Shadow for depth */
}

h2 {
  color: white; /* Change header text color to white for better contrast */
  margin-top: 20px;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7); /* Text shadow for depth */
  background-color: rgba(255, 255, 255, 0.9); /* Slightly transparent background */
  padding: 10px; /* Add padding for better spacing */
  display: inline-block; /* Make the background wrap around the text */
  border-radius: 5px; /* Optional: rounded corners for the background */
}

p {
  color: #f0f0f0; /* Lighter text color for better readability */
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
  border-radius: 5px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Deeper shadow for images */
  transition: transform 0.3s; /* Smooth hover effect */
}

.gallery img:hover {
  transform: scale(1.05); /* Scale up on hover */
}

.section {
  margin: 20px;
  padding: 15px;
  background-color: rgba(255, 255, 255, 0.8); /* Slightly transparent white */
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Shadow for depth */
}

footer {
  text-align: center;
  margin-top: 20px;
  padding: 10px 0;
  background-color: rgb(175, 76, 76);
  color: white;
  border-radius: 0 0 8px 8px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2); /* Shadow for depth */
}
</style>