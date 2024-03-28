<template>
  <div>
  <NavbarComponent />
  <v-toolbar border density="comfortable">
        <v-col class="d-flex justify-space-around">
            <v-btn @click="Rap">Consulter les rapports</v-btn>
            <v-btn @click="Med">Gerer le Medecin</v-btn>
        </v-col>
    </v-toolbar> 
  <ChercheMedecinComponent />
  
  <FicheMedecinComponent v-show="showDiv1" :key="maj" />
  <ListeRapportsComponent v-show="showDiv2" :key="maj"/>
</div>
  
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import ChercheMedecinComponent from '@/components/ChercheMedecinComponent.vue';
import FicheMedecinComponent from '@/components/FicheMedecinComponent.vue';
import ListeRapportsComponent from '@/components/ListeRapportsComponent.vue';

export default{
  name:"MedecinView",
  data(){
    return{
      maj:0,
      user : this.$store.state.utilisateur,
      showDiv1: true,
      showDiv2: false,
    }
  },
  components:{NavbarComponent,ChercheMedecinComponent,FicheMedecinComponent,ListeRapportsComponent},
  methods: {
    Med() {
      this.showDiv1 = true;
      this.showDiv2 = false;
    },
    Rap() {
      this.showDiv1 = false;
      this.showDiv2 = true;
    }
  }
}
</script>

<style>

</style>