<script setup>
    import ListIconComponent from '../icons/ListIconComponent.vue';
    import PlusIconComponent from '../icons/PlusIconComponent.vue';
    import EditIconComponent from '../icons/EditIconComponent.vue';
</script>

<template>
    <div class="wrapper all-roboto">
        <div class="flex flex-col w-full">
            <div class="text-3xl font-semibold mb-2">Панель администратора</div>
            
            <div class="w-full [&>*]:mt-5">
                <RouterLink to="/admin/appointments" class="flex justify-between">
                    <div class="px-10 py-5 flex border-[1px] border-gray-200 w-full hover:-translate-y-2 duration-200 hover:shadow-lg cursor-pointer">
                        <div class="">
                            <div class="text-lg font-semibold w-auto flex">
                                <div class="w-[20px]"><ListIconComponent/></div>
                                <div class="ml-2">Записи</div>
                            </div>
                            <div>Список записей клиентов к специалистам</div>
                        </div>
                    </div>
                </RouterLink>

                <RouterLink to="/admin/dentist/create" class="flex justify-between">
                    <div class="px-10 py-5 flex border-[1px] border-gray-200 w-full hover:-translate-y-2 duration-200 hover:shadow-lg cursor-pointer">
                        <div class="">
                            <div class="text-lg font-semibold w-auto flex">
                                <div class="w-[20px]"><PlusIconComponent/></div>
                                <div class="ml-2">Добавить специалиста</div>
                            </div>
                            <div>Добавить нового специалиста в базу данных сервиса</div>
                        </div>
                    </div>
                </RouterLink>

                <RouterLink to="/admin/dentists" class="flex justify-between">
                    <div class="px-10 py-5 flex border-[1px] border-gray-200 w-full hover:-translate-y-2 duration-200 hover:shadow-lg cursor-pointer">
                        <div class="">
                            <div class="text-lg font-semibold w-auto flex">
                                <div class="w-[20px]"><EditIconComponent/></div>
                                <div class="ml-2">Редактировать специалиста</div>
                            </div>
                            <div>Редактировать данные имеющегося в базе данных специалиста</div>
                        </div>
                    </div>
                </RouterLink>

                <RouterLink to="/admin/service/create" class="flex justify-between">
                    <div class="px-10 py-5 flex border-[1px] border-gray-200 w-full hover:-translate-y-2 duration-200 hover:shadow-lg cursor-pointer">
                        <div class="">
                            <div class="text-lg font-semibold w-auto flex">
                                <div class="w-[20px]"><PlusIconComponent/></div>
                                <div class="ml-2">Добавить услугу</div>
                            </div>
                            <div>Добавить новую услугу специалиста в базу данных сервиса</div>
                        </div>
                    </div>
                </RouterLink>

                <RouterLink to="/admin/services" class="flex justify-between">
                    <div class="px-10 py-5 flex border-[1px] border-gray-200 w-full hover:-translate-y-2 duration-200 hover:shadow-lg cursor-pointer">
                        <div class="">
                            <div class="text-lg font-semibold w-auto flex">
                                <div class="w-[20px]"><EditIconComponent/></div>
                                <div class="ml-2">Редактировать услугу</div>
                            </div>
                            <div>Редактировать данные имеющейся в базе данных услуги</div>
                        </div>
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    created(){
        if(localStorage.getItem('api_key') == null){
            this.$router.push('/');
        }
    }
}
</script>



