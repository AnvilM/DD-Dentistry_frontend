<script setup>
import axios from 'axios';
</script>

<template>
    <div v-if="loaded" v-for="dentist in dentists" @click="$router.push('/dentist/' + dentist.id)" class="mt-5 w-full px-5 py-2 flex justify-between hover:shadow-md duration-200 border border-slate-500 cursor-pointer">
        <div class="font-medium">{{ dentist.name }}</div>
        <div class="price">{{ dentist.position }}</div>
    </div>
</template>

<script>
export default{
    props:{
        dentistsIds: String
    },
    data(){
        return {
            loaded: false,
            dentists: []
        }
    },

    mounted(){

        let dentistsIds = this.dentistsIds.match(/\[(.*)\]/);
        dentistsIds = dentistsIds[1].split(',');
        dentistsIds.forEach(element => {
            axios.get('http://localhost/api/public/dentist/' + element).then((response) => {
                this.dentists.push(response.data)
            })
        });

        this.loaded = true;
        
    }
}
</script>