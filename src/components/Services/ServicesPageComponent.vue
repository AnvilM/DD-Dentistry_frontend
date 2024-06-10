<script setup>
    import ServiceComponent from '../ServiceComponent.vue';
    import axios from 'axios';
</script>

<template>
    <div class="wrapper all-roboto">
        <div class="flex flex-col">
            <div class="text-3xl font-semibold mb-2">Диагностика и лечение в нашей клинике.</div>
            <div class="w-full [&>p+p]:mt-5 [&>*]:text-gray-700 pr-5">
                В нашей клинике представлены различные виды стоматологических услуг. Запишитесь на прием к врачу стоматологу терапевту, или любому другому специалисту. Доктор выслушает вас, проведет диагностику и подберет индивидуальный план лечения! 
            </div>
            <input @input="search($event.target.value)" type="text" class="w-full border-2 rounded-[5px] h-[30px] outline-none px-5 py-2 mt-5" placeholder="Поиск">
            <div class="w-full [&>*]:mt-5">
                <ServiceComponent ref="serviceComponent" v-if="loaded" v-for="service in services" :id="service.id" :name="service.name" :dentists="service.dentists" :description="service.description" :price="service.price"/>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            loaded: false,
            services: {}
        }
    },

    mounted(){
        axios.get('http://localhost:8000/api/public/service').then((response) => {
            this.services = response.data
            this.loaded = true;
        })
    },

    methods:{
        search(value){
            if(value == ''){
                this.$refs.serviceComponent.forEach(el => {
                    el.$el.classList.remove('hidden')
                })
            }
            else{
                this.$refs.serviceComponent.forEach(el => {
                    if(el.name.search(value) == -1 && el.description.search(value) == -1){
                        el.$el.classList.add('hidden')
                    }
                    else{
                        el.$el.classList.remove('hidden')
                    }
                })
            }
            
        }
    }
}
</script>


