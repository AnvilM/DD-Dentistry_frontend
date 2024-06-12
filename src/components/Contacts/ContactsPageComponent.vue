<script setup>
    import ClockIconComponent from '../icons/ClockIconComponent.vue';
    import LocationIconComponent from '../icons/LocationIconComponent.vue';
    import PhoneIconComponent from '../icons/PhoneIconComponent.vue';
    import MailIconComponent from '../icons/MailIconComponent.vue';
</script>

<template>
    <div class="wrapper all-roboto">
        <div class="flex flex-col w-full">
            <div class="text-3xl font-semibold mb-2">Контакты</div>
            
            <div class="w-full [&>*]:mt-5">
                <a href="https://maps.app.goo.gl/nPNpW45hApuRAVpT6" class="flex justify-between">
                    <div class="px-10 py-5 flex border-[1px] border-gray-200 w-full hover:-translate-y-2 duration-200 hover:shadow-lg cursor-pointer">
                        <div class="">
                            <div class="text-lg font-semibold w-auto flex">
                                <div class="w-[20px]"><LocationIconComponent/></div>
                                <div class="ml-2">Адрес</div>
                            </div>
                            <div>ООО  «Зубная фея» Адрес: 346400 г. Новочеркасск ул. Комитетская 1, 2 этаж.<br>Время работы: пн-пт 8:00-15:00</div>
                        </div>
                    </div>
                </a>

                <a href="tel:+79991234567" class="flex justify-between">
                    <div class="px-10 py-5 flex border-[1px] border-gray-200 w-full hover:-translate-y-2 duration-200 hover:shadow-lg cursor-pointer">
                        <div class="">
                            <div class="text-lg font-semibold w-auto flex">
                                <div class="w-[20px]"><PhoneIconComponent/></div>
                                <div class="ml-2">Телефон</div>
                            </div>
                            <div>+7 (999) 123-45-67</div>
                        </div>
                    </div>
                </a>

                <a href="mailto:support@dentistry.com" class="flex justify-between">
                    <div class="px-10 py-5 flex border-[1px] border-gray-200 w-full hover:-translate-y-2 duration-200 hover:shadow-lg cursor-pointer">
                        <div class="">
                            <div class="text-lg font-semibold w-auto flex">
                                <div class="w-[20px]"><MailIconComponent/></div>
                                <div class="ml-2">Электронная почта</div>
                            </div>
                            <div>support@dentistry.com</div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>



