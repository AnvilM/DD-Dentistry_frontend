<template>
    <div @click="$router.push('/admin/service/' + id + '/edit')" class="px-10 py-5 flex justify-between border-[1px] border-gray-200 w-full hover:-translate-y-2 duration-200 hover:shadow-lg cursor-pointer">
        <div class="text-lg font-semibold w-auto">{{ name }}</div>
    </div>
</template>

<script>
export default{
    props:{
        id: Number,
        name: String
    }
}
</script>
