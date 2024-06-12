<script setup>
import ClockIconComponent from './icons/ClockIconComponent.vue';
import LocationIconComponent from './icons/LocationIconComponent.vue';
import PhoneIconComponent from './icons/PhoneIconComponent.vue';
import LogoutIconComponent from './icons/LogoutIconComponent.vue';

</script>

<template>
    <div class="wrapper bg-gray-100">
        <div class="w-full h-10 items-center flex justify-start">
            <div class="flex items-center mr-10">
                <div class="mr-2 w-[20px] items-center justify-center">
                    <ClockIconComponent/>
                </div>
                <div>Время работы: пн-пт 8:00-15:00</div>
            </div>

            <div class="flex items-center">
                <div class="mr-2 w-[20px] items-center justify-center">
                    <LocationIconComponent/>
                </div>
                <div>Адрес: г.Новочеркасск ул.Комитетская 1</div>
            </div>

            <div class="flex items-center ml-auto">
                <div class="mr-2 w-[20px] items-center justify-center">
                    <PhoneIconComponent/>
                </div>
                <a class="font-medium" href="tel:+79991234567">+7 (999) 123-45-67</a>
            </div>
        </div>
    </div>

    <div class="wrapper w-full mb-12">
        <div class="w-full h-[40px] [&>*]:h-full font-semibold [&>*]:cursor-pointer flex items-center justify-start [&>*]:flex [&>*]:items-center [&>*]:duration-200">
            <RouterLink to="/" class="hover:bg-emerald-600 px-5 group [&>*]:duration-200">
                <div class="group-hover:mb-2 group-hover:text-gray-200">Главная</div>
            </RouterLink>
            <RouterLink to="/services" class="hover:bg-emerald-600 px-5 group [&>*]:duration-200 ml-4">
                <div class="group-hover:mb-2 group-hover:text-gray-200">Наши услуги</div>
            </RouterLink>
            <RouterLink to="/dentists" class="hover:bg-emerald-600 px-5 group [&>*]:duration-200 ml-4">
                <div class="group-hover:mb-2 group-hover:text-gray-200">Специалисты клиники</div>
            </RouterLink>
            <RouterLink to="/contacts" class="hover:bg-emerald-600 px-5 group [&>*]:duration-200 ml-4">
                <div class="group-hover:mb-2 group-hover:text-gray-200">Контакты</div>
            </RouterLink>
            <RouterLink to="/about" class="hover:bg-emerald-600 px-5 group [&>*]:duration-200 ml-4">
                <div class="group-hover:mb-2 group-hover:text-gray-200">О нас</div>
            </RouterLink>

            <RouterLink to="/appointment"class="hover:bg-emerald-600 px-5 group [&>*]:duration-200 ml-auto">
                <div class="group-hover:mb-2 group-hover:text-gray-200">Запись онайлн</div>
            </RouterLink>
            <div class="flex h-full" v-if="admin">
                <RouterLink to="/admin"class="h-full flex items-center hover:bg-emerald-600 px-5 bg-emerald-500 group [&>*]:duration-200 ml-auto">
                    <div class="group-hover:mb-2 group-hover:text-gray-200">Панель администратора</div>
                </RouterLink>
                <div class="h-full w-[40px] flex justify-center items-center hover:bg-emerald-600 bg-emerald-500" @click="logout()">
                    <div class="w-[30px]">
                        <LogoutIconComponent/>
                    </div>
                </div>
            </div>
                
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                admin: false
            }
        },
        created(){
            if(localStorage.getItem('api_key') != null){
                this.admin = true;
            }
        },
        methods: {
            logout(){
                localStorage.removeItem('api_key')
                window.location = '/'
            }
        }
    }
</script>
