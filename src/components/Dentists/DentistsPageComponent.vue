<script setup>
    import DentistComponent from '../DentistComponent.vue';
</script>

<template>
    <div class="wrapper all-roboto">
        <div class="flex flex-col w-full">
            <div class="text-3xl font-semibold mb-2">Специалисты нашей клиники.</div>
            
            <div class="w-full [&>*]:mt-5">
                <div class="flex justify-between">
                    <DentistComponent/>
                    <DentistComponent/>
                    <DentistComponent/>
                </div>
            </div>
        </div>
    </div>
</template>



