<script setup>
    import CheckedIconComponent from '../../icons/CheckedIconComponent.vue'
    import XIconComponent from '../../icons/XIconComponent.vue'
    import DeleteIconComponent from '../../icons/DeleteIconComponent.vue'

    import axios from 'axios';
</script>

<template>
    <div class="wrapper all-roboto">
        <div class="flex flex-col w-full">
            <div class="text-3xl font-semibold mb-2">Редактирование услуги {{ nameString }}</div>
            <div class="w-full [&>p+p]:mt-5 [&>*]:text-gray-700 pr-5">Введите новые данные услуги что бы изменить их в базе данных.</div>
            
            <div class="w-full flex items-center justify-center mt-5">
                <div ref="serviceCreateForm" v-if="loaded" class="relative w-[500px] h-full flex flex-col [&>*+*]:mt-5 border-[1px] p-5 duration-200">
                    <div class="flex justify-start items-center mb-2">
                        <div class="w-[40px] mr-2" v-if="added && !failed">
                            <CheckedIconComponent/>
                        </div>
                        <div class="w-[25px] mr-2" v-if="failed && !added">
                            <XIconComponent/>
                        </div>
                        <div ref="serviceCreateFormTitle" class="text-2xl font-semibold max-w-[calc(100%_-_50px)]">Редактирование услуги {{ nameString }}</div>
                    </div>
                    <div @click="deleteService()" class="w-[40px] absolute top-0 right-0 mt-5 mr-5 cursor-pointer hover:bg-slate-300 duration-100 rounded-full p-1">
                        <DeleteIconComponent/>
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
                        <button @click="add" class="bg-slate-500 px-5 py-2 text-white hover:bg-emerald-600 duration-200">Сохранить</button>
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
            failed: false,
            loaded: false,
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

            this.$refs.serviceCreateFormSubtitle.innerHTML = 'Редактирование услуги ' + this.nameString

            axios.post('http://localhost/api/admin/service/' + this.$route.params.id, {_method: 'put',name: this.nameString, description: this.descriptionString, price: this.priceString, dentists: '['+this.dentistsString+']', image: this.imageString}, {headers: {  Authorization: 'Bearer ' + localStorage.getItem('api_key')}}).then(response => {
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
            this.added = true;
            this.$refs.serviceCreateForm.classList.add('border-emerald-600')
            this.$refs.serviceCreateFormTitle.classList.add('text-emerald-600')
            this.$refs.serviceCreateFormTitle.innerHTML = 'Услуга измененна успешно'
        },

        bad(errors){
            this.failed = true;
            this.added = false;

            this.$refs.serviceCreateForm.classList.add('border-red-500')
            this.$refs.serviceCreateFormTitle.classList.add('text-red-500')
            this.$refs.serviceCreateFormTitle.innerHTML = 'Неверно заполенны поля'
            let errstr = ''
            errors.forEach(el => {
                errstr = errstr + el + "<br>"
            });
            this.$refs.serviceCreateFormSubtitle.classList.add('text-red-500')
            this.$refs.serviceCreateFormSubtitle.innerHTML = errstr;
        },

        deleteService(){
            axios.post('http://localhost/api/admin/service/' + this.$route.params.id, {_method: 'delete'}, {headers: {Authorization: 'Bearer ' + localStorage.getItem('api_key')}}).then((response) => {
                this.$router.push('/admin/services')
            })
        },
    },
    created(){
        if(localStorage.getItem('api_key') == null){
            this.$router.push('/');
        }
    },
    mounted(){
        axios.get('http://localhost/api/public/service/' + this.$route.params.id, {headers: {Authorization: 'Bearer ' + localStorage.getItem('api_key')}}).then(response => {
            console.log(response.data)
            this.nameString = response.data.name;
            this.descriptionString = response.data.description;
            this.priceString = response.data.price;
            this.dentistsString = response.data.dentists.match(/\[(.*)\]/)[1]
            this.imageString = response.data.image;

            this.loaded = true;
        })
    }
}
</script>