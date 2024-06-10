<script setup>
    import DentistComponent from '../DentistComponent.vue';
    import axios from 'axios'
</script>

<template>
    <div class="wrapper all-roboto bg-gray-200">
        <div class="flex flex-col w-full py-12">
            <div class="text-3xl font-semibold mb-2">Специалисты нашей клиники.</div>
            
            <div class="w-full [&>*+*]:mt-10">
                <div class="flex [&>*+*]:ml-12" v-for="array in dentists">
                    <DentistComponent v-for="dentist in array" :id="dentist.id" :name="dentist.name" :position="dentist.position" :bio="dentist.bio" :image="dentist.image"/>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default{
    data(){
        return{
            loaded: false,
            dentists: []
        }
    },

    mounted(){
        axios.get('http://localhost/api/public/dentist').then((response) => {
            let cur = [];
            for (let i = 0; i < response.data.length; i++) {
                if(i%3 == 0){
                    this.dentists.push(cur);
                    cur = []
                }

                cur.push(response.data[i])
            }
            this.dentists.push(cur);
            this.loaded = true;
        })
    }
}
</script>
