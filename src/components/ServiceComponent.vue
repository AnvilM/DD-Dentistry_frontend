<template>
    <div @click="$router.push('/service/' + id)" class="px-10 py-5 flex border-[1px] border-gray-200 w-full hover:-translate-y-2 duration-200 hover:shadow-lg cursor-pointer">
        <div class="img w-[140px] h-[93px] min-w-[140px] min-h-[93px] max-w-[140px] max-h-[93px]">
            <img class="w-full h-full rounded-[5px]" :src="image" alt="Image">
        </div>
        <div class="ml-5">
            <div class="text-lg font-semibold w-auto">{{ name }}</div>
            <div>{{ description }}</div>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        id: Number,
        name: String,
        description: String,
        image: String,
    }
}
</script>
