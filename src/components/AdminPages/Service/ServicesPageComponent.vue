<script setup>
    import ServiceComponent from './ServiceComponent.vue';
    import axios from 'axios';
</script>

<template>
    <div class="wrapper all-roboto">
        <div class="flex flex-col w-full justify-center items-center">
            <div class="text-3xl font-semibold mb-2 mr-auto">Список услуг</div>
            <input @input="search($event.target.value)" type="text" class="w-2/3 border-2 rounded-[5px] h-[30px] outline-none px-5 py-2 mt-5" placeholder="Поиск">
            <div class="w-2/3 [&>*]:mt-5">
                <ServiceComponent ref="serviceComponent" v-if="loaded" v-for="service in services" :id="service.id" :name="service.name" :position="service.position"/>
            </div>
        </div>
    </div>
</template>


<script>
export default{
    data(){
        return{
            loaded: false,
            services: []
        }
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
                    if(el.name.search(value) == -1){
                        el.$el.classList.add('hidden')
                    }
                    else{
                        el.$el.classList.remove('hidden')
                    }
                })
            }
            
        }
    },
    mounted(){
        axios.get('http://localhost/api/public/service', {headers: {Authorization: 'Bearer ' + localStorage.getItem('api_key')}}).then((response) => {
            
            this.services = response.data
            
            this.loaded = true;
        })
    },
    created(){
        if(localStorage.getItem('api_key') == null){
            this.$router.push('/');
        }
    }
}
</script>


