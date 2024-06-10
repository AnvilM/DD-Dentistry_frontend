<script setup>
    import ServiceComponent from '../ServiceComponent.vue';
    import DentistComponent from '../DentistComponent.vue';

    import SwiperComponent from './SwiperComponent.vue'
</script>

<template>

    <div class="wrapper bg-gray-100 py-[150px]">
        <div class="w-full all-roboto">
            <div class="w-full flex justify-between">
                <div class="w-1/2 ">
                    <div class="text-3xl font-semibold mb-2">О клинике</div>
                    <div class="w-full [&>p+p]:mt-5 [&>*]:text-gray-700 pr-5">
                        <p>"ООО «Стоматология – Н" удобно расположена в Центральном районе города Новочеркасска.</p>
                        <p>У нас работают высококлассные специалисты. В нашей клинике пациентам оказывается весь спектр стоматологических услуг от профессиональной гигиены полости рта до полного протезирования. Обращаясь к нам Вы можете быть уверены – Вы выбрали лучших!</p>
                        <p>"Стоматология - Н" является единственной клиникой, обладающей компьютерным томографом последнего поколения в городе Новочеркасске.</p>
                        <p>За 18 лет успешной работы мы приобрели сотни постоянных пациентов, которые рекомендуют нас своим близким, «сарафанное радио» работает на нас!</p>
                    </div>
                </div>
                <div class="w-1/2 flex items-center justify-center">
                    <img src="https://stomatologia-n.ru/upload/iblock/19d/19dd0d255a43f2186ebde8744b0c7322.jpg" alt="img">
                </div>
            </div>
        </div>
    </div>

    <div class="wrapper py-[150px]">
        <div class="w-full all-roboto">
            <div class="mb-5 flex justify-between items-center">
                <div class="font-semibold text-3xl">Наши услуги</div>
                <div class="text-xs link">Все услуги</div>
            </div>
            <div class="mb-10">У нас вы можете пройти комплексное обследование, получить консультацию любого специалиста (врача стоматолога терапевта, ортопеда, хирурга, ортодонта). Запишитесь на прием и доктор подберет для вас индивидуальный план лечения!</div>
            <div class="flex flex-col [&>*+*]:mt-5">
                <div class="flex items-center justify-evenly w-full [&>*+*]:ml-5">
                    <ServiceComponent/>
                    <ServiceComponent/>
                </div>
                <div class="flex items-center justify-evenly w-full [&>*+*]:ml-5">
                    <ServiceComponent/>
                    <ServiceComponent/>
                </div>
            </div>
        </div>
    </div>

    <div class="wrapper bg-gray-100 py-[150px]">
        <div class="w-full all-roboto">
            <div class="mb-5 flex justify-between items-center">
                <div class="font-semibold text-3xl">Наши специалисты</div>
                <div class="text-xs link">Все специалисты</div>
            </div>
            <div class="mb-10">Попасть в команду стоматологов клиники «Стоматология-Н» могут только лучшие специалисты с многолетней практикой и доказанным опытом. Наши врачи не только лечат. Они помогают сохранить здоровье Вашей полости рта и находят подход и к взрослым, и детям.</div>
            <SwiperComponent/>
        </div>
    </div>

</template>