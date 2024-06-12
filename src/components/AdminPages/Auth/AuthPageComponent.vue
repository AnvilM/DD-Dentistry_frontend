<script setup>
    import CheckedIconComponent from '../../icons/CheckedIconComponent.vue'
    import XIconComponent from '../../icons/XIconComponent.vue'

    import axios from 'axios';
</script>

<template>
    <div class="wrapper all-roboto">
        <div class="flex flex-col w-full">
            <div class="text-3xl font-semibold mb-2">Вход в панель админимтратора</div>
            <div class="w-full [&>p+p]:mt-5 [&>*]:text-gray-700 pr-5">Если вы являетесь администратором клиники введите пароль для получения доступа к панели.</div>
            
            <div class="w-full flex items-center justify-center mt-5">
                <div ref="appointmentForm" class="w-[500px] h-full flex flex-col [&>*+*]:mt-5 border-[1px] p-5 duration-200">
                    <div class="flex justify-start items-center mb-2">
                        <div class="w-[40px] mr-2" v-if="loged && !failed">
                            <CheckedIconComponent/>
                        </div>
                        <div class="w-[25px] mr-2" v-if="failed && !loged">
                            <XIconComponent/>
                        </div>
                        <div ref="appointmentFormTitle" class="text-2xl font-semibold">Вход в панль</div>
                    </div>
                    <div class="w-full [&>p+p]:mt-5 [&>*]:text-gray-700 pr-5">Введите пароль админимтратора</div>
                    <input v-model="passString" ref="passInput" type="password" class="border-b-2 border-black outline-none px-5 py-2 focus:border-slate-500 mb-5" placeholder="Пароль">
                    <div class="w-full flex justify-center">
                        <button @click="Login" class="bg-slate-500 px-5 py-2 text-white">Войти</button>
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
            passString: '',

            loged: false,
            failed: false
        }
    },
    methods: {
        Login(){
            this.$refs.passInput.classList.remove('border-red-500')
            if(this.passString == ''){
                this.$refs.passInput.classList.add('border-red-500')
            }

            if(this.passString != ''){

                axios.get('http://localhost/api/admin/appointment/1', {headers: {Authorization: 'Bearer ' + this.passString}}).then(response => {
                    localStorage.setItem('api_key', this.passString)
                    this.ok()
                }).catch(response => {
                    this.bad()
                })
            }
        },

        ok(){
            this.failed = false;
            this.maked = true;
            this.$refs.appointmentForm.classList.add('border-emerald-600')
            this.$refs.appointmentFormTitle.classList.add('text-emerald-600')
            this.$refs.appointmentFormTitle.innerHTML = 'Вход выполнен, переадресация...'

            this.$router.push('/admin/appointments')
        },

        bad(){
            this.failed = true;
            this.maked = false;

            this.$refs.appointmentForm.classList.add('border-red-500')
            this.$refs.appointmentFormTitle.classList.add('text-red-500')
            this.$refs.appointmentFormTitle.innerHTML = 'Неверный пароль'
        }
    }
}
</script>