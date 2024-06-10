<script setup>
import ClockIconComponent from './icons/ClockIconComponent.vue';
import LocationIconComponent from './icons/LocationIconComponent.vue';
import PhoneIconComponent from './icons/PhoneIconComponent.vue';
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

    <div class="wrapper w-full">
        <div class="w-full h-[40px] [&>*]:h-full font-semibold [&>*]:cursor-pointer flex items-center justify-start [&>*]:flex [&>*]:items-center [&>*]:duration-200">
            <div class="hover:bg-green-500 px-5 group [&>*]:duration-200">
                <div class="group-hover:mb-2">Главная</div>
            </div>
            <div class="hover:bg-green-500 px-5 group [&>*]:duration-200 ml-4">
                <div class="group-hover:mb-2">Наши услуги</div>
            </div>
            <div class="hover:bg-green-500 px-5 group [&>*]:duration-200 ml-4">
                <div class="group-hover:mb-2">Специалисты клиники</div>
            </div>
            <div class="hover:bg-green-500 px-5 group [&>*]:duration-200 ml-4">
                <div class="group-hover:mb-2">Контакты</div>
            </div>
            <div class="hover:bg-green-500 px-5 group [&>*]:duration-200 ml-4">
                <div class="group-hover:mb-2">О нас</div>
            </div>

            <div class="hover:bg-green-500 px-5 group [&>*]:duration-200 ml-auto">
                <div class="group-hover:mb-2">Запись онайлн</div>
            </div>
        </div>


        <!-- <div class="w-full flex justify-between items-center all-roboto h-[50px] bg-red-100">
            <div class="min-h-[35px] h-[35px] flex items-center [&>*+*]:ml-5 [&>*]:cursor-pointer [&>*]:font-medium [&>*]:duration-100 [&>*]:ease-out">
                <div class="hover:mb-2 ">Главная</div>
                <div class="hover:mb-2 ">Услуги</div>
                <div class="hover:mb-2 ">Специалисты</div>
                <div class="hover:mb-2">О нас</div>
                <div class="hover:mb-2">Контакты</div>
            </div>

            <div class="cursor-pointer font-bold border-b-[2px] border-[#0a9dff00] hover:border-[#0a9dff] duration-200 ease-out">Запись онлайн</div>
        </div> -->
    </div>
</template>
