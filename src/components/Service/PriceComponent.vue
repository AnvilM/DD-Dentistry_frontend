<template>
    <div class="mt-5 w-full px-5 py-2 flex justify-between hover:shadow-md duration-200 border border-slate-500 cursor-pointer">
        <div class="font-medium">{{ name }}</div>
        <div class="price">{{ price }} руб.</div>
    </div>
</template>

<script>
export default{
    props:{
        price: String,
        name: String
    }
}
</script>