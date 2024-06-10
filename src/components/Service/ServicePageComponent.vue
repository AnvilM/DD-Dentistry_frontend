<script setup>
    import axios from 'axios';
import DescriptionComponent from './DescriptionComponent.vue'
    import PriceComponent from './PriceComponent.vue'
    import DentistsComponent from './DentistsComponent.vue'
</script>

<template>
    <div class="wrapper all-roboto">
        <div v-if="loaded" class="flex flex-col">
            <div class="text-3xl font-semibold mb-2">{{ service.name }}</div>
            <div class="w-full">
                <img class="w-full" :src="service.image" alt="">
                <div class="mt-5 mb-5 [&>*+*]:ml-2 flex">
                    <div @click="setPage('description')" class="px-5 py-3 border border-slate-500 hover:shadow-md duration-200 cursor-pointer text-center">Описание</div>
                    <div @click="setPage('price')" class="px-5 py-3 border border-slate-500 hover:shadow-md duration-200 cursor-pointer text-center">Цены</div>
                    <div @click="setPage('dentists')" class="px-5 py-3 border border-slate-500 hover:shadow-md duration-200 cursor-pointer text-center">Специалисты</div>
                </div>

                <DescriptionComponent v-if="this.selectedPage=='description'" :description="service.description"/>
                <PriceComponent v-if="this.selectedPage=='price'" :name="service.name" :price="service.price"/>
                <DentistsComponent v-if="this.selectedPage=='dentists'" :dentistsIds="service.dentists"/>


            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            selectedPage: 'description',

            loaded: false,
            service: {}
        }
    },

    mounted(){
        axios.get('http://localhost/api/public/service/' + this.$route.params.id).then((response) => {
            this.service = response.data
            this.loaded = true;
        })
    },

    methods: {
        setPage(page){
            this.selectedPage = page;
        }
    }
}
</script>







