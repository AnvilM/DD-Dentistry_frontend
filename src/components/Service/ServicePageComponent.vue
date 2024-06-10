<script setup>
    import DescriptionComponent from './DescriptionComponent.vue'
    import PriceComponent from './PriceComponent.vue'
</script>

<template>
    <div class="wrapper all-roboto">
        <div class="flex flex-col">
            <div class="text-3xl font-semibold mb-2">Прицельный снимок зуба</div>
            <div class="w-full">
                <img class="w-full" src="https://stomatologia-n.ru/upload/iblock/e9e/e9ebc6b55fc304202355648062dcb4da.jpg" alt="">
                <div class="mt-5 mb-5 [&>*+*]:ml-2 flex">
                    <div @click="setPage('description')" class="px-5 py-3 border border-slate-500 hover:shadow-md duration-200 cursor-pointer text-center">Описание</div>
                    <div @click="setPage('price')" class="px-5 py-3 border border-slate-500 hover:shadow-md duration-200 cursor-pointer text-center">Цены</div>
                </div>

                <DescriptionComponent v-if="this.selectedPage=='description'"/>
                <PriceComponent v-if="this.selectedPage=='price'"/>

            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            selectedPage: 'description'
        }
    },

    methods: {
        setPage(page){
            this.selectedPage = page;
        }
    }
}
</script>







