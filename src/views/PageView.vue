<template>
    <v-card
      class="mx-auto"
      max-width="344"
      title="User Registration"
    >
      <v-container>
        <v-text-field
          v-model="pseudo"
          color="primary"
          label="Pseudo"
          variant="underlined"
        ></v-text-field>
  
        <v-text-field
          v-model="password"
          color="primary"
          label="Password"
          placeholder="Enter your password"
          variant="underlined"
          type="password"
        ></v-text-field>

      </v-container>
  
      <v-divider></v-divider>
      <v-container>
        <v-alert
        v-if="authMessage"
            :value="true"
            :type="authMessageType"
            class="mt-4"
            >{{ authMessage }}
            
        </v-alert>
      </v-container>
  
      <v-card-actions
      >
      
          <div v-if="errorMessage" class="error-message mt-4">
        <v-alert v-show = "errorMessage" icon="$error" color="error"
        text = "error">
        </v-alert>
      </div>
        <v-spacer></v-spacer>
  
        <v-btn 
        @click="getLogin"
        color="success"
        >
          Complete Registration
  
          
        </v-btn>
      </v-card-actions>
    </v-card>
</template>
<script>
  import DataService from '@/services/DataService';
  var dataService = new DataService();

    export default 
    {
        name:'PageView',
      data: () => ({
        pseudo: "",
        password: "",
        loading: false,
        errorMessage: false,
        
      }),
    
    methods:{
      getLogin(){
        dataService.getVisiteur(this.pseudo, this.password)
        .then(
          (data)=>{
          this.$store.state.utilisateur=data;
          console.log(data);
          this.$router.push("/accueil");
          })
        .catch(
          ()=>{
            console.log("error");
            this.loading=true;
            this.errorMessage = 'Identifiant ou mot de passe incorrect';
          })
      }
    },
  }
  </script>
