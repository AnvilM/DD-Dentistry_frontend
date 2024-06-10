<script setup>
    import ServiceComponent from '../ServiceComponent.vue'
    import axios from 'axios';
</script>

<template>
    <div class="wrapper all-roboto">
        <div class="w-full">
            <div v-if="loaded" class="flex justify-between border border-gray-200 w-full p-5 [&>*+*]:ml-5">
                <div class="w-1/2">
                    <img class="w-full h-full" :src="dentist.image" alt="Image">
                </div>
                <div class="w-1/2 [&>*+*]:mt-10">
                    <div class="text-3xl font-semibold">{{ dentist.name }}</div>
                    <div>
                        <div class="text-sm text-gray-500">Должность</div>
                        <div class="">{{ dentist.position }}</div>
                    </div>

                    <div>
                        <div class="text-sm text-gray-500">О себе</div>
                        <div class="">{{ dentist.bio }}</div>
                    </div>
                </div>
            </div>

            <div class="text-3xl font-semibold mt-5">Услуги специалиста</div>
            <div class="w-full [&>p+p]:mt-5 [&>*]:text-gray-700 pr-5">Список услуг, предоставляемых данным специалистом.</div>

            <input @input="search($event.target.value)" type="text" class="w-full border border-slate-500 h-[30px] outline-none px-5 py-4 mt-5 mb-5" placeholder="Поиск">

            <div class="w-full [&>*+*]:mt-5">
                <ServiceComponent ref="serviceComponent" v-if="loaded" v-for="service in services" :id="service.id" :name="service.name" :description="service.description" :image="service.image"/>
            </div>
        </div>
    </div>
</template>


<script>
export default{
    data(){
        return{
            loaded: false,
            dentist: {},
            services: [],
        }
    },

    mounted(){
        axios.get('http://localhost/api/public/dentist/' + this.$route.params.id).then((response) => {
            this.dentist = response.data

            let servicesIds = this.dentist.services.match(/\[(.*)\]/);
            servicesIds = servicesIds[1].split(',');

            servicesIds.forEach(element => {
                axios.get('http://localhost/api/public/service/' + element).then((response) => {
                    this.services.push(response.data)
                })
            })
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









