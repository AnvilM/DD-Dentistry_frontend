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
import DentistPageComponent from './components/Dentist/DentistPageComponent.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: () => import('./components/Main/MainComponent.vue')
        },
        {
            name: 'Services',
            path: '/services',
            component: () => import('./components/Services/ServicesPageComponent.vue')
        },
        {
            name: 'Service',
            path: '/service/:id',
            component: () => import('./components/Service/ServicePageComponent.vue')
        },
        {
            name: 'Dentists',
            path: '/dentists',
            component: () => import('./components/Dentists/DentistsPageComponent.vue')
        },
        {
            name: 'Dentist',
            path: '/dentist/:id',
            component: () => import('./components/Dentist/DentistPageComponent.vue')
        },
        {
            name: 'About',
            path: '/about',
            component: () => import('./components/About/AboutPageComponent.vue')
        },
        {
            name: 'Contacts',
            path: '/contacts',
            component: () => import('./components/Contacts/ContactsPageComponent.vue')
        },
        {
            name: 'Appointment',
            path: '/appointment',
            component: () => import('./components/Appointment/AppointmentPageComponent.vue')
        }
]
})

createApp(App)
    .use(router)
    .mount('#app')
