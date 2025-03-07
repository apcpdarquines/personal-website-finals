import { createApp } from 'vue';
import App from './App.vue';
import Github from './components/Github.vue';
import Linkedin from './components/LinkedIn.vue'; // Ensure the import name matches
import PersonalProfile from './components/PersonalProfile.vue';
import CommentForm from './components/CommentForm.vue';
import W3Schools from './components/W3Schools.vue'; // Capitalized the component name
import Comment from './components/Comment.vue';
import Goals from './components/Goals.vue'; // If the file is named Goals.vue
import Hobbies from './components/Hobbies.vue'; // If the file is named Goals.vue

// Create the Vue application
const app = createApp(App);

// Register components
app.component('github', Github);
app.component('linkedin', Linkedin); // Use the correct case for the component name
app.component('comment-form', CommentForm);
app.component('comment', Comment);
app.component('personal-profile', PersonalProfile);
app.component('w3schools', W3Schools); // Use the capitalized name for consistency
app.component('goals', Goals); // Use the capitalized name for consistency
app.component('hobbies', Hobbies); // Use the capitalized name for consistency

// Mount the application
app.mount('#app');