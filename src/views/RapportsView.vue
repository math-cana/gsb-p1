<template>
  <div>
  <NavbarComponent />
  <v-toolbar border density="comfortable">
        <v-col class="d-flex justify-space-around">
            <v-btn @click="Rap">Modifier rapport</v-btn>
            <v-btn @click="Med">Ajouter les rapports</v-btn>
        </v-col>
    </v-toolbar> 

  <v-text-field class="calendrier" @change="getRapports();this.isListVisible=false;this.isModiFormVisible=false"
  label="Date du rapport" v-model="dateRapport" type="date">
  </v-text-field>
  <v-card class="mx-auto">
        <v-list v-show="isListVisible">
        <v-list-item v-for="item in items" :key="item.id" :value="item.nom" @click="getRapport(item)">
        {{ item.nomMedecin+" "+item.prenomMedecin }}
        </v-list-item>
        </v-list>
    </v-card>
    <div v-show="isModifFormVisible">
    <v-text-field label="Bilan" v-model="bilan"></v-text-field>
    <v-text-field label="Motif" v-model="motif"></v-text-field>
    <div><v-btn @click="majRapport()">Modifier</v-btn></div>
  </div>
</div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
export default{
  name:"RapportsView",
  data(){
    return{
      idVisiteur: this.$store.state.utilisateur.id,
      idRapport:'',
      motif:'',
      bilan:'',
      dateRapport:'',
      items:[],
      isModifFormVisible:false,
      isListVisible:false
    }
  },
  components:{NavbarComponent},
  methods: {
    getRapports(){
      this.$store.state.DataService.getLesRapportsDate(this.idVisiteur,this.dateRapport)
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

    getRapport(items){
      this.idRapport=items.idRapport;
      this.motif=items.motif;
      this.bilan=items.bilan;
      this.dateRapport=items.date;
      this.isModifFormVisible=true;
      this.isListVisible=false;


    },
    majRapport(){
      let rapportModifier = {
      idRapport: this.idRapport,
      motif: this.motif,
      bilan: this.bilan,
    };
        
      this.$store.state.DataService.majRapports(rapportModifier)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
    
    
    }
  }
  }
</script>

<style>
</style>