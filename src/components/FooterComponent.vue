<script setup>
    import ClockIconComponent from './icons/ClockIconComponent.vue';
    import LocationIconComponent from './icons/LocationIconComponent.vue';
    import PhoneIconComponent from './icons/PhoneIconComponent.vue';
    import MailIconComponent from './icons/MailIconComponent.vue';
</script>

<template>
    <div class="wrapper bg-gray-200 mt-12 py-20">
        <div>
            <div class="flex justify-between [&>*]:w-1/3 [&>*]:px-5">
                <div class="felx flex-col [&>*+*]:mt-5">
                    <div class="flex items-center mr-10">
                        <div class="mr-2 w-[20px] items-center justify-center">
                            <ClockIconComponent/>
                        </div>
                        <div>Время работы: пн-пт 8:00-15:00</div>
                    </div>

                    <div class="flex items-center">
                        <div class="mr-2 w-[40px] items-center justify-center">
                            <LocationIconComponent/>
                        </div>
                        <div>ООО «Стоматология» Адрес: 346400 г. Новочеркасск ул. Комитетская 1, 2 этаж.</div>
                    </div>

                    <div class="flex items-center ml-auto">
                        <div class="mr-2 w-[20px] items-center justify-center">
                            <PhoneIconComponent/>
                        </div>
                        <a class="font-medium" href="tel:+79991234567">+7 (999) 123-45-67</a>
                    </div>

                    <div class="flex items-center ml-auto">
                        <div class="mr-2 w-[20px] items-center justify-center">
                            <MailIconComponent/>
                        </div>
                        <a class="font-medium" href="mailto:support@dentistry.com">support@dentistry.com</a>
                    </div>
                </div>

                <div class="felx flex-col [&>*+*]:mt-5">
                    <div class="link">Главная</div>
                    <div class="link">Услуги</div>
                    <div class="link">Наши спецаилисты</div>
                    <div class="link">Контакты</div>
                    <div class="link">О нас</div>
                </div>

                <div class="felx flex-col [&>*+*]:mt-5">
                    <div class="link">Политика конфиденциальности</div>
                </div>
            </div>
            
            <div class="mt-12 text-gray-600 text-sm">© 2024 Все права защищены.</div>
        </div>
    </div>
</template>
