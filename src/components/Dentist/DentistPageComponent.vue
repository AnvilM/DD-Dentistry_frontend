<script setup>
    import ServiceComponent from '../ServiceComponent.vue'
</script>

<template>
    <div class="wrapper all-roboto">
        <div>
            <div class="flex justify-between border border-gray-200 w-full p-5 [&>*+*]:ml-5">
                <div class="w-1/2">
                    <img class="w-full h-full" src="https://stomatologia-n.ru/upload/iblock/311/311a9d536c32a96824b0b85ceb90f7d4.jpg" alt="">
                </div>
                <div class="w-1/2 [&>*+*]:mt-10">
                    <div class="text-3xl font-semibold">Краевская Наталья Трофимовна</div>
                    <div>
                        <div class="text-sm text-gray-500">О себе</div>
                        <div class="">Главный врач. Врач-стоматолог-терапевт, ортопед.</div>
                    </div>

                    <div>
                        <div class="text-sm text-gray-500">О себе</div>
                        <div class="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi enim alias neque consequatur soluta ipsum magni sit, aliquam perferendis nulla repellat voluptatibus ducimus earum! Reiciendis ab eligendi adipisci dignissimos ipsa?</div>
                    </div>
                </div>
            </div>

            <input type="text" class="w-full border border-slate-500 h-[30px] outline-none px-5 py-4 mt-5 mb-5" placeholder="Поиск">

            <div class="w-full [&>*+*]:mt-5">
                <ServiceComponent/>
                <ServiceComponent/>
                <ServiceComponent/>
                <ServiceComponent/>
            </div>
        </div>
    </div>
</template>









