<template>
    <v-container>
    <div>Les rapports</div>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Nom Visiteur</th>
                    <th>Date</th>
                    <th>Motif</th>
                    <th>Bilan</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.date">
                    <th>{{ item.nom}}</th>
                    <th>{{ item.date }}</th>
                    <th>{{ item.motif }}</th>
                    <th>{{ item.bilan }}</th>
                </tr>
            </tbody>
        </table>
    </div>
  </v-container>
</template>

<script>
export default{
    name: 'ListeRapportsComponent',
    data(){
        return{
            nomMedecin:this.$store.state.medecin,
            infosListeRapports:this.$store.state.medecin.id,
            items:[],
        }
    },
    mounted(){
            this.$store.state.DataService.getLesRapports(this.nomMedecin.id)
            .then(
                (data)=>{
                    this.items=data;
                }
            )
            .catch(
                (error)=>{
                    console.log(error);
                }
            )
        },
    methods:{}
        
    }
</script>

<style>
table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
}

td, th {
  border: 1px solid #ddd;
  padding: 8px;
}


th {
  background-color: #f2f2f2; 
  color: #333; 
}



table {
  color: #333;
}
</style>