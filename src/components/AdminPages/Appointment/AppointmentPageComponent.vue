<script setup>
    import DeleteIconComponent from '../../icons/DeleteIconComponent.vue'
    import axios from 'axios';
</script>

<template>
    <div class="wrapper all-roboto">
        <div class="w-full">
            <div class="text-3xl font-semibold mb-5">Запись на приём к специалисту</div>
            <div v-if="loaded" class="flex justify-between border border-gray-200 w-full p-5 [&>*+*]:ml-5 relative">
                <div class="w-full [&>*+*]:mt-10">
                    <div>
                        <div class="text-sm text-gray-500">ID Записи</div>
                        <div class="text-3xl font-semibold">{{ appointment.id }}</div>
                    </div>
                    <div>
                        <div class="text-sm text-gray-500">ФИО</div>
                        <div class="text-3xl font-semibold">{{ appointment.name }}</div>
                    </div>
                    <div>
                        <div class="text-sm text-gray-500">Номер телефона</div>
                        <a :href="'tel:' + appointment.phone">{{ appointment.phone }}</a>
                    </div>
                </div>
                <div @click="deleteAppointment()" class="w-[40px] absolute top-0 right-0 mt-5 mr-5 cursor-pointer hover:bg-slate-300 duration-100 rounded-full p-1">
                    <DeleteIconComponent/>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default{
    data(){
        return{
            loaded: false,
            appointment: {},
        }
    },

    mounted(){
        axios.get('http://localhost/api/admin/appointment/' + this.$route.params.id, {headers: {Authorization: 'Bearer ' + localStorage.getItem('api_key')}}).then((response) => {
            this.appointment = response.data

            this.loaded = true;
        })
    },
    created(){
        if(localStorage.getItem('api_key') == null){
            this.$router.push('/');
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
                    if(el.name.search(value) == -1 && el.description.search(value) == -1){
                        el.$el.classList.add('hidden')
                    }
                    else{
                        el.$el.classList.remove('hidden')
                    }
                })
            }
            
        },

        deleteAppointment(){
            axios.post('http://localhost/api/admin/appointment/' + this.$route.params.id, {_method: 'delete'}, {headers: {Authorization: 'Bearer ' + localStorage.getItem('api_key')}}).then((response) => {
                this.$router.push('/admin/appointments')
            })
        }
    }
}
</script>









