<template>
  <NavbarComponent />
  Bienvenue {{ user.nom }}
  <div class="accueil">
    Information utilisateur
  </div>
  <div v-if="utilisateur">
    {{utilisateur}}
  </div>
</template>
<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
export default{
  name:"AccueilView",
  data(){
    return{
      user : this.$store.state.utilisateur
    }
  },
  components:{NavbarComponent}
}
</script>