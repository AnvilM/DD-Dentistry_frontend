<template>
    <div @click="$router.push('/dentist/' + id)" ref="dentistCard" class="group flex flex-col bg-cover bg-center w-[350px] h-[550px] duration-200 hover:shadow-lg cursor-pointer">
        <div class="w-full h-20 bg-white mt-auto flex flex-col items-center group-hover:h-[140px] duration-200">
            <div class="name text-[18px] font-medium">{{ name }}</div>
            <div class="text-center">{{ position }}</div>
            <div class="text-white mt-auto mb-5 px-5 py-2 bg-slate-500 opacity-0 group-hover:opacity-100 duration-200">Записаться</div>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        id: Number,
        name: String,
        position: String,
        image: String
    },
    mounted(){
        this.$refs.dentistCard.classList.add("bg-[url('"+this.image+"')]")
    }
}
</script>