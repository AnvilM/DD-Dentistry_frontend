<script setup>
    import ServiceComponent from '../ServiceComponent.vue';
</script>

<template>
    <div class="wrapper all-roboto">
        <div class="flex flex-col">
            <div class="text-3xl font-semibold mb-2">Диагностика и лечение в нашей клинике.</div>
            <div class="w-full [&>p+p]:mt-5 [&>*]:text-gray-700 pr-5">
                В нашей клинике представлены различные виды стоматологических услуг. Запишитесь на прием к врачу стоматологу терапевту, или любому другому специалисту. Доктор выслушает вас, проведет диагностику и подберет индивидуальный план лечения! 
            </div>
            <input type="text" class="w-full border-2 rounded-[5px] h-[30px] outline-none px-5 py-2 mt-5" placeholder="Поиск">
            <div class="w-full [&>*]:mt-5">
                <ServiceComponent/>
                <ServiceComponent/>
                <ServiceComponent/>
                <ServiceComponent/>
            </div>
        </div>
    </div>
</template>



