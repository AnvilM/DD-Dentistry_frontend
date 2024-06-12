<script setup>
    import CheckedIconComponent from '../../icons/CheckedIconComponent.vue'
    import XIconComponent from '../../icons/XIconComponent.vue'

    import axios from 'axios';
</script>

<template>
    <div class="wrapper all-roboto">
        <div class="flex flex-col w-full">
            <div class="text-3xl font-semibold mb-2">Создание нового сотрудника</div>
            <div class="w-full [&>p+p]:mt-5 [&>*]:text-gray-700 pr-5">Введите данные нового сотрудника что бы добавить его в базу данных.</div>
            
            <div class="w-full flex items-center justify-center mt-5">
                <div ref="dentistCreateForm" class="w-[500px] h-full flex flex-col [&>*+*]:mt-5 border-[1px] p-5 duration-200">
                    <div class="flex justify-start items-center mb-2">
                        <div class="w-[40px] mr-2" v-if="added && !failed">
                            <CheckedIconComponent/>
                        </div>
                        <div class="w-[25px] mr-2" v-if="failed && !added">
                            <XIconComponent/>
                        </div>
                        <div ref="dentistCreateFormTitle" class="text-2xl font-semibold">Создание сотрудника</div>
                    </div>
                    <div ref="dentistCreateFormSubtitle" class="w-full [&>*+*]:mt-5 [&>*]:text-gray-700 pr-5">Введите данные нового сотрудника</div>
                    <div class="w-full">
                        <div class="text-sm text-gray-700">ФОИ Сотрудника</div>
                        <input v-model="fioString" ref="fioInput" type="text" class="w-full border-b-2 border-black outline-none  py-2 focus:border-slate-500 mb-5" placeholder="Иванов Иван Иванович">
                    </div>
                    <div class="w-full">
                        <div class="text-sm text-gray-700">Должность Сотрудника</div>
                        <input v-model="positionString" ref="positionInput" type="text" class="w-full border-b-2 border-black outline-none  py-2 focus:border-slate-500 mb-5" placeholder="Гл. врач, Ортодонт">
                    </div>
                    <div class="w-full">
                        <div class="text-sm text-gray-700">Подробнее о Сотруднике</div>
                        <textarea v-model="bioString" ref="bioInput" type="text" class="w-full h-[200px] resize-none border-2 border-black outline-none p-2 focus:border-slate-500 mb-5" placeholder="Подробная информация о сотруднике"></textarea>
                    </div>
                    <div class="w-full">
                        <div class="text-sm text-gray-700">ID Услуг сотрудника (через запятую)</div>
                        <input v-model="servicesString" ref="servicesInput" type="text" class="w-full border-b-2 border-black outline-none  py-2 focus:border-slate-500 mb-5" placeholder="1,2,3">
                    </div>
                    <div class="w-full">
                        <div class="text-sm text-gray-700">Ссылка на фото сотрудника</div>
                        <input v-model="imageString" ref="imageInput" type="url" class="w-full border-b-2 border-black outline-none  py-2 focus:border-slate-500 mb-5" placeholder="https://photos.com/phopo.png">
                    </div>
                    <div class="w-full flex justify-center">
                        <button @click="add" class="bg-slate-500 px-5 py-2 text-white hover:bg-emerald-600 duration-200">Добавить</button>
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
            fioString: '',
            positionString: '',
            bioString: '',
            servicesString: '',
            imageString: '',

            added: false,
            failed: false
        }
    },
    methods: {
        add(){
            this.$refs.fioInput.classList.remove('border-red-500')
            this.$refs.positionInput.classList.remove('border-red-500')
            this.$refs.bioInput.classList.remove('border-red-500')
            this.$refs.servicesInput.classList.remove('border-red-500')
            this.$refs.imageInput.classList.remove('border-red-500')

            this.$refs.dentistCreateForm.classList.remove('border-emerald-600')
            this.$refs.dentistCreateFormTitle.classList.remove('text-emerald-600')
            this.$refs.dentistCreateForm.classList.remove('border-red-500')
            this.$refs.dentistCreateFormTitle.classList.remove('text-red-500')
            this.$refs.dentistCreateFormSubtitle.classList.remove('text-red-500')

            this.$refs.dentistCreateFormSubtitle.innerHTML = 'Введите данные нового сотрудника'

            axios.post('http://localhost/api/admin/dentist', {name: this.fioString, position: this.positionString, bio: this.bioString, services: '['+this.servicesString+']', image: this.imageString}, {headers: {Authorization: 'Bearer ' + localStorage.getItem('api_key')}}).then(response => {
                    this.ok()
                }).catch(response => {
                    response = response.response.data
                    let errors = []
                    if('name' in response){
                        this.$refs.fioInput.classList.add('border-red-500')
                        errors.push('Неверно указано ФИО')
                    }

                    if('position' in response){
                        this.$refs.positionInput.classList.add('border-red-500')
                        errors.push('Неверно указана должность')
                    }

                    if('bio' in response){
                        this.$refs.bioInput.classList.add('border-red-500')
                        errors.push('Неверно заполненно поле Подробнее')
                    }

                    if('services' in response){
                        this.$refs.servicesInput.classList.add('border-red-500')
                        errors.push('Неверно указаны услуги')
                    }

                    if('image' in response){
                        this.$refs.imageInput.classList.add('border-red-500')
                        errors.push('Неверно указана ссылка на фото')
                    }

                    this.bad(errors)
                })
        },

        ok(){
            this.failed = false;
            this.maked = true;
            this.$refs.dentistCreateForm.classList.add('border-emerald-600')
            this.$refs.dentistCreateFormTitle.classList.add('text-emerald-600')
            this.$refs.dentistCreateFormTitle.innerHTML = 'Сотрудник добавлен успешно'
        },

        bad(errors){
            this.failed = true;
            this.maked = false;

            this.$refs.dentistCreateForm.classList.add('border-red-500')
            this.$refs.dentistCreateFormTitle.classList.add('text-red-500')
            this.$refs.dentistCreateFormTitle.innerHTML = 'Неверно заполенны поля'
            let errstr = ''
            errors.forEach(el => {
                errstr = errstr + el + "<br>"
            });
            this.$refs.dentistCreateFormSubtitle.classList.add('text-red-500')
            this.$refs.dentistCreateFormSubtitle.innerHTML = errstr;
        }
    },
    created(){
        if(localStorage.getItem('api_key') == ''){
            this.$router.push('/');
        }
    }
}
</script>