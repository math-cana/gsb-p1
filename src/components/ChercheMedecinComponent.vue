<template>
  <v-container>
    <v-text-field @keyup="getMedecins" label="Nom de Medecin" v-model="nomMedecin">
    </v-text-field>
    <v-card class="mx-auto">
        <v-list v-show="isListVisible">
        <v-list-item v-for="item in items" :key="item.id" :value="item.nom" @click="getInfos(item)">
        {{ item.nom+" "+item.prenom }}
        </v-list-item>
        </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
    name:'ChercheMedecinComponent',
    data(){
        return{
            idMedecin:'',
            nomMedecin:'',
            items:[],
            isListVisible: false,
        }
    },
    methods:{
        getMedecins(){
            this.$store.state.DataService.getMedecins(this.nomMedecin)
            .then(
                (data)=>{
                    this.items=data;
                    this.isListVisible=true;
                }
            )
            .catch(
                (error)=>{
                    console.log(error);
                }
            )
        },
        getInfos(item){
            this.nomMedecin=item.nom+" "+item.prenom+" : "+item.id
            this.isListVisible=false;
            this.$store.state.medecin=item;
            this.$parent.isListVisible=true;
            this.$parent.maj++;
    }
    }
    
}
</script>

<style>
</style>