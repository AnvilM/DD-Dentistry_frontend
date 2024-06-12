<script setup>
    import CheckedIconComponent from '../icons/CheckedIconComponent.vue'

    import axios from 'axios';
</script>

<template>
    <div class="wrapper all-roboto">
        <div class="flex flex-col w-full">
            <div class="text-3xl font-semibold mb-2">Запись онайлн</div>
            <div class="w-full [&>p+p]:mt-5 [&>*]:text-gray-700 pr-5">Администратор клиники с радостью ответит на ваши вопросы и запишет к нужному специалисту.</div>
            
            <div class="w-full flex items-center justify-center mt-5">
                <div ref="appointmentForm" class="w-[500px] h-full flex flex-col [&>*+*]:mt-5 border-[1px] p-5 duration-200">
                    <div class="flex justify-start items-center mb-2">
                        <div class="w-[40px]" v-if="maked">
                            <CheckedIconComponent/>
                        </div>
                        <div ref="appointmentFormTitle" class="text-2xl font-semibold">Запись к специалисту</div>
                    </div>
                    <div class="w-full [&>p+p]:mt-5 [&>*]:text-gray-700 pr-5">Заполните форму, что бы мы могли связаться с вами.</div>
                    <input v-model="nameString" ref="nameInput" type="text" class="border-b-2 border-black outline-none px-5 py-2 focus:border-slate-500" placeholder="Ваше ФОИ">
                    <input v-model="phoneString" ref="phoneInput" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" class="border-b-2 border-black outline-none px-5 py-2 focus:border-slate-500 mb-5" placeholder="Номер телефона">
                    <input v-model="dentistString" ref="dentistInput" type="text" class="border-b-2 border-black outline-none px-5 py-2 focus:border-slate-500 mb-5" placeholder="ФИО Специалиста">
                    <input v-model="serviceString" ref="serviceInput"type="text" class="border-b-2 border-black outline-none px-5 py-2 focus:border-slate-500 mb-5" placeholder="Название услуги">
                    <div class="w-full flex justify-center">
                        <button @click="makeAppointment" class="bg-slate-500 px-5 py-2 text-white">Записаться</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            nameString: '',
            phoneString: '',
            dentistString: '',
            serviceString: '',

            maked: false
        }
    },
    methods: {
        makeAppointment(){
            this.$refs.nameInput.classList.remove('border-red-500')
            this.$refs.phoneInput.classList.remove('border-red-500')
            if(this.nameString == ''){
                this.nameError()
            }

            if(this.phoneString == ''){
                this.phoneError()
            }

            axios.get('http://localhost/api/public/dentist').then(response => {
                response.data.forEach(dentistEl => {
                    if(this.dentistString == dentistEl.name){
                        axios.get('http://localhost/api/public/service').then(response => {
                            response.data.forEach(serviceEl => {
                                if(this.serviceString == serviceEl.name){
                                    if(this.nameString != '' && this.phoneString != ''){
                                        axios.post('http://localhost/api/public/appointment', {dentist: 1, service: 1, name: this.nameString, phone: this.phoneString}).then(response => {
                                            if(response.status == 200){
                                                this.ok()
                                                return
                                            }
                                        }).catch(response => {
                                            response = JSON.parse(response.response.data)
                                            if('phone' in response){
                                                this.phoneError()
                                            }

                                            if('name' in response){
                                                this.nameError()
                                            }
                                        })
                                    }
                                }
                            });
                        })
                    }
                });
            })
        },

        phoneError(){
            this.$refs.phoneInput.classList.add('border-red-500')
        },

        nameError(){
            this.$refs.nameInput.classList.add('border-red-500')
        },

        ok(){
            this.maked = true;
            this.$refs.appointmentForm.classList.add('border-emerald-600')
            this.$refs.appointmentFormTitle.classList.add('text-emerald-600')
            this.$refs.appointmentFormTitle.innerHTML = 'Запись успешно создана'
        }
    }
}
</script>