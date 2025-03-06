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
  background: linear-gradient(270deg, rgb(117, 36, 36), rgb(112, 29, 29), rgb(117, 36, 36));
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

main {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.main-content {
  flex: 3;
  padding: 20px;
}

h2 {
  color: white; /* Change header text color to white for better contrast */
  margin-top: 20px;
  text-shadow: 1px 1px 2px rgba(150, 0, 0, 0.5); /* Text shadow for depth */
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