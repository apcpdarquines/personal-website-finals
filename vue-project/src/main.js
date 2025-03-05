import { createApp } from 'vue'
import App from './App.vue'
import Github from './components/Github.vue'
import Linkedin from './components/LinkedIn.vue' // Ensure the import name matches
import Country from './components/Country.vue'
import CommentForm from './components/CommentForm.vue'
import Comment from './components/Comment.vue'

const app = createApp(App)
app.component('github', Github)
app.component('linkedin', Linkedin) // Use the correct case for the component name
app.component('country', Country)
app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.mount('#app')