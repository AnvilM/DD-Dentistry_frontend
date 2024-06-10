import './assets/main.css'

import { createWebHistory, createRouter } from 'vue-router'

import { createApp } from 'vue'

import App from './App.vue'

import MainComponent from './components/Main/MainComponent.vue'
import ServicesPageComponent from './components/Services/ServicesPageComponent.vue'
import DentistsPageComponent from './components/Dentists/DentistsPageComponent.vue'
import AboutPageComponent from './components/About/AboutPageComponent.vue'
import ContactsPageComponent from './components/Contacts/ContactsPageComponent.vue'
import AppointmentPageComponent from './components/Appointment/AppointmentPageComponent.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: MainComponent
        },
        {
            name: 'Services',
            path: '/services',
            component: ServicesPageComponent
        },
        {
            name: 'Dentists',
            path: '/dentists',
            component: DentistsPageComponent
        },
        {
            name: 'About',
            path: '/about',
            component: AboutPageComponent
        },
        {
            name: 'Contacts',
            path: '/contacts',
            component: ContactsPageComponent
        },
        {
            name: 'Appointment',
            path: '/appointment',
            component: AppointmentPageComponent
        }
]
})

createApp(App)
    .use(router)
    .mount('#app')
