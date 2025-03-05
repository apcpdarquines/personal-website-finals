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
  font-family: Arial, sans-serif;
  background: rgb(59, 22, 22)
}

header {
  text-align: center;
  color: Black;
  padding: 20px 0;
  border-radius: 8px 8px 0 0;
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
  background-color: #f9f9f9;
  padding: 20px;
  border-left: 1px solid #ddd;
}

h1, h2, h3 {
  color: black;
  margin-top: 20px;
}

p {
  line-height: 1.6;
  color: #555;
}

.social-links {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
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
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.section {
    margin: 20px;
    padding: 15px;
    background-color: #fff;
    border-radius: 5px;
}

footer {
  text-align: center;
  margin-top: 20px;
  padding: 10px 0;
  background-color:rgb(175, 76, 76);
  color: white;
  border-radius: 0 0 8px 8px;
}
</style>
