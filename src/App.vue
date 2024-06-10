<script setup>
import NavBarComponent from './components/NavBarComponent.vue'
import MainComponent from './components/Main/MainComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import ServicesPageComponent from './components/Services/ServicesPageComponent.vue'
import DentistsPageComponent from './components/Dentists/DentistsPageComponent.vue'
import ContactsPageComponent from './components/Contacts/ContactsPageComponent.vue'
import AboutPageComponent from './components/About/AboutPageComponent.vue'
import AppointmentPageComponent from './components/Appointment/AppointmentPageComponent.vue'
import ServicePageComponent from './components/Service/ServicePageComponent.vue'
import DentistPageComponent from './components/Dentist/DentistPageComponent.vue'
import axios from 'axios'

</script>

<template>
    <NavBarComponent/>

    <RouterView/>
    

    <FooterComponent class="mt-12"/>


</template>



