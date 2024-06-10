<template>
    <div class="mt-5 w-full [&>*]:mt-5">{{ description }}</div>
</template>

<script>
export default{
    props:{
        description: String
    }
}
</script>