<script setup>
    import AppointmentComponent from './AppointmentComponent.vue';
    import axios from 'axios';
</script>

<template>
    <div class="wrapper all-roboto">
        <div class="flex flex-col w-full justify-center items-center">
            <div class="text-3xl font-semibold mb-2 mr-auto">Список записей к специалистам</div>
            <input @input="search($event.target.value)" type="text" class="w-1/2 border-2 rounded-[5px] h-[30px] outline-none px-5 py-2 mt-5" placeholder="Поиск">
            <div class="w-1/2 [&>*]:mt-5">
                <AppointmentComponent ref="appointmentComponent" v-if="loaded" v-for="appointment in appointments" :id="appointment.id" :name="appointment.name" :phone="appointment.phone"/>
            </div>
        </div>
    </div>
</template>


<script>
export default{
    data(){
        return{
            loaded: false,
            appointments: []
        }
    },
    methods:{
        search(value){
            if(value == ''){
                this.$refs.appointmentComponent.forEach(el => {
                    el.$el.classList.remove('hidden')
                })
            }
            else{
                this.$refs.appointmentComponent.forEach(el => {
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
        if(localStorage.getItem('api_key') == null){
            this.$router.push('/admin/auth')
        }
        axios.get('http://localhost/api/admin/appointment', {headers: {Authorization: 'Bearer ' + localStorage.getItem('api_key')}}).then((response) => {
            
            this.appointments = response.data
            
            this.loaded = true;
        }).catch(response => {
            this.$router.push('/admin/auth')
        })
    },
    created(){
        if(localStorage.getItem('api_key') == null){
            this.$router.push('/');
        }
    }
}
</script>


