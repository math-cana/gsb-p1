<template>
    <v-container>
    <div>Fiche des Medecins</div>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Adresse</th>
                    <th>Tel</th>
                    <th>Spécialisation</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th><v-text-field label="ID " v-model="id"></v-text-field></th>
                    <th><v-text-field label="Nom" v-model="nomMedecin"></v-text-field></th>
                    <th><v-text-field label="Prenom" v-model="prenomMedecin"></v-text-field></th>
                    <th><v-text-field label="Adresse" v-model="adresseMedecin"></v-text-field></th>
                    <th><v-text-field label="Téléphone" v-model="telMedecin"></v-text-field></th>
                    <th><v-text-field label="Spécialité" v-model="specialiteMedecin"></v-text-field></th>
                    
                </tr>
            </tbody>
        </table>
    </div>
    <div><v-btn @click="getFiche">Modifier</v-btn></div>
    </v-container>
</template>

<script>
export default {
    name: 'FicheMedecinComponent',
    data() {
    return {
      id: this.$store.state.medecin.id,
      nomMedecin: this.$store.state.medecin.nom,
      prenomMedecin: this.$store.state.medecin.prenom,
      adresseMedecin: this.$store.state.medecin.adresse,
      telMedecin: this.$store.state.medecin.tel,
      specialiteMedecin: this.$store.state.medecin.specialitecomplementaire,
    };
  },
  methods: {
    getFiche() {
    let medecinModifier = {
      id: this.id,
      nom: this.nomMedecin,
      prenom: this.prenomMedecin,
      adresse: this.adresseMedecin,
      tel: this.telMedecin,
      specialitecomplementaire: this.specialiteMedecin,
    };
        
      this.$store.state.DataService.getFiche(medecinModifier)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      })
    
    
    },
  },

};
</script>

<style>
</style>