import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
// import Vue3EasyDataTable from 'vue3-easy-data-table';
// import 'vue3-easy-data-table/dist/style.css';
// import Multiselect from 'vue-multiselect'
// import VueDataset from 'vue-dataset'

const app = createApp(App);

// app.component('multiselect', Multiselect)
// app.component('EasyDataTable', Vue3EasyDataTable)



createApp(App).use(store).use(router).mount('#app')
