<script setup>
    import CheckedIconComponent from '../../icons/CheckedIconComponent.vue'
    import XIconComponent from '../../icons/XIconComponent.vue'

    import axios from 'axios';
</script>

<template>
    <div class="wrapper all-roboto">
        <div class="flex flex-col w-full">
            <div class="text-3xl font-semibold mb-2">Создание новой услуги</div>
            <div class="w-full [&>p+p]:mt-5 [&>*]:text-gray-700 pr-5">Введите данные новой услуги что бы добавить её в базу данных.</div>
            
            <div class="w-full flex items-center justify-center mt-5">
                <div ref="serviceCreateForm" class="w-[500px] h-full flex flex-col [&>*+*]:mt-5 border-[1px] p-5 duration-200">
                    <div class="flex justify-start items-center mb-2">
                        <div class="w-[40px] mr-2" v-if="added && !failed">
                            <CheckedIconComponent/>
                        </div>
                        <div class="w-[25px] mr-2" v-if="failed && !added">
                            <XIconComponent/>
                        </div>
                        <div ref="serviceCreateFormTitle" class="text-2xl font-semibold">Создание услуги</div>
                    </div>
                    <div ref="serviceCreateFormSubtitle" class="w-full [&>*+*]:mt-5 [&>*]:text-gray-700 pr-5">Введите данные новогй услуги</div>
                    <div class="w-full">
                        <div class="text-sm text-gray-700">Название услуги</div>
                        <input v-model="nameString" ref="nameInput" type="text" class="w-full border-b-2 border-black outline-none  py-2 focus:border-slate-500 mb-5" placeholder="Новая услуга">
                    </div>
                    <div class="w-full">
                        <div class="text-sm text-gray-700">Описание услуги</div>
                        <textarea v-model="descriptionString" ref="descriptionInput" type="text" class="w-full h-[200px] resize-none border-2 border-black outline-none p-2 focus:border-slate-500 mb-5" placeholder="Описание новой услуги"></textarea>
                    </div>
                    <div class="w-full">
                        <div class="text-sm text-gray-700">Цена услуги</div>
                        <input v-model="priceString" ref="priceInput" type="text" class="w-full border-b-2 border-black outline-none  py-2 focus:border-slate-500 mb-5" placeholder="1200">
                    </div>
                    <div class="w-full">
                        <div class="text-sm text-gray-700">ID Специалистов которые выполняют эту услугу (через запятую)</div>
                        <input v-model="dentistsString" ref="dentistsInput" type="text" class="w-full border-b-2 border-black outline-none  py-2 focus:border-slate-500 mb-5" placeholder="1,2,3">
                    </div>
                    <div class="w-full">
                        <div class="text-sm text-gray-700">Ссылка на фото услуги</div>
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
            nameString: '',
            descriptionString: '',
            priceString: '',
            dentistsString: '',
            imageString: '',

            added: false,
            failed: false
        }
    },
    methods: {
        add(){
            this.$refs.nameInput.classList.remove('border-red-500')
            this.$refs.descriptionInput.classList.remove('border-red-500')
            this.$refs.priceInput.classList.remove('border-red-500')
            this.$refs.dentistsInput.classList.remove('border-red-500')
            this.$refs.imageInput.classList.remove('border-red-500')

            this.$refs.serviceCreateForm.classList.remove('border-emerald-600')
            this.$refs.serviceCreateFormTitle.classList.remove('text-emerald-600')
            this.$refs.serviceCreateForm.classList.remove('border-red-500')
            this.$refs.serviceCreateFormTitle.classList.remove('text-red-500')
            this.$refs.serviceCreateFormSubtitle.classList.remove('text-red-500')

            this.$refs.serviceCreateFormSubtitle.innerHTML = 'Введите данные новогй услуги'

            axios.post('http://localhost/api/admin/service', {name: this.nameString, description: this.descriptionString, price: this.priceString, dentists: '['+this.dentistsString+']', image: this.imageString}, {headers: {  Authorization: 'Bearer ' + localStorage.getItem('api_key')}}).then(response => {
                    this.ok()
                }).catch(response => {
                    response = response.response.data
                    let errors = []
                    if('name' in response){
                        this.$refs.nameInput.classList.add('border-red-500')
                        errors.push('Неверно указано название')
                    }

                    if('description' in response){
                        this.$refs.descriptionInput.classList.add('border-red-500')
                        errors.push('Неверно указано описание')
                    }

                    if('price' in response){
                        this.$refs.priceInput.classList.add('border-red-500')
                        errors.push('Неверно указана цена')
                    }

                    if('dentists' in response){
                        this.$refs.dentistsInput.classList.add('border-red-500')
                        errors.push('Неверно указаны специалисты')
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
            this.$refs.serviceCreateForm.classList.add('border-emerald-600')
            this.$refs.serviceCreateFormTitle.classList.add('text-emerald-600')
            this.$refs.serviceCreateFormTitle.innerHTML = 'Услуга добавлена успешно'
        },

        bad(errors){
            this.failed = true;
            this.maked = false;

            this.$refs.serviceCreateForm.classList.add('border-red-500')
            this.$refs.serviceCreateFormTitle.classList.add('text-red-500')
            this.$refs.serviceCreateFormTitle.innerHTML = 'Неверно заполенны поля'
            let errstr = ''
            errors.forEach(el => {
                errstr = errstr + el + "<br>"
            });
            this.$refs.serviceCreateFormSubtitle.classList.add('text-red-500')
            this.$refs.serviceCreateFormSubtitle.innerHTML = errstr;
        }
    },
    created(){
        if(localStorage.getItem('api_key') == null){
            this.$router.push('/');
        }
    }
}
</script>