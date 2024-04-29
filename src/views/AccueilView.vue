<template>
  <NavbarComponent />
  Bienvenue {{ user.nom }} {{ user.prenom }}
  <v-container>
    <div>Votre fiche utilisateur</div>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Adresse</th>
                    <th>Code Postal</th>
                    <th>Ville</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th><v-text-field label="Nom" v-model="nomVisit"></v-text-field></th>
                    <th><v-text-field label="Prenom" v-model="prenomVisit"></v-text-field></th>
                    <th><v-text-field label="Adresse" v-model="adresseVisit"></v-text-field></th>
                    <th><v-text-field label="Code Postal" v-model="cpVisit"></v-text-field></th>
                    <th><v-text-field label="Ville" v-model="villeVisit"></v-text-field></th>
                    
                </tr>
            </tbody>
        </table>
    </div>
        <div><v-btn @click="majVisiteur" color="success">Modifier</v-btn></div>
        <v-alert v-show ="succes" color="success">Modification Réussie</v-alert>
        <v-alert v-show ="fail" color="error">Erreur</v-alert>
    </v-container> 
</template>
<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
export default{
  name:"AccueilView",
  data() {
    return {
      user : this.$store.state.utilisateur,
      id: this.$store.state.utilisateur.id,
      nomVisit: this.$store.state.utilisateur.nom,
      prenomVisit: this.$store.state.utilisateur.prenom,
      adresseVisit: this.$store.state.utilisateur.adresse,
      cpVisit: this.$store.state.utilisateur.cp,
      villeVisit: this.$store.state.utilisateur.ville,
      succes:false,
      fail: false,
    };
  },
  methods: {
    majVisiteur() {
    let visitModifier = {
      id: this.id,
      nom: this.nomVisit,
      prenom: this.prenomVisit,
      adresse: this.adresseVisit,
      cp: this.cpVisit,
      ville: this.villeVisit,
    };
        
      this.$store.state.DataService.majVisiteur(visitModifier)
      .then((data) => {
        this.succes=true;
        this.fail=false;
        setInterval(function(){this.succes=false}, 10000)
        console.log(data);
      })
      .catch((error) => {
        this.succes=false;
        this.fail=true;
        console.log(error);
      })
    
    
    },
  },

  components:{NavbarComponent}
}
</script>