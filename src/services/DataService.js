export default class DataService{
    async getVisiteur(unlog,unmdp){
        var params=new URLSearchParams({
            login: unlog,
            mdp: unmdp
        });
        var response= await fetch('http://localhost/restGSB/connexion?'+params);
        var items= await response.json();
        return items;

    }
    async getMedecins(unMedecin){
        var params=new URLSearchParams({
            nom: unMedecin,
        });
        var response= await fetch('http://localhost/restGSB/medecins?'+params);
        var items= await response.json();
        return items;
    }
    async getLesRapports(unId){
        var response= await fetch('http://localhost/restGSB/rapports/'+unId);
        var items= await response.json();
        return items;
    }
    async getFiche(uneFiche){
        var requestOptions={
            method:"PUT",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(uneFiche)
        };
        var items= await fetch('http://localhost/restGSB/majMedecin',requestOptions);
        return items;
    }
    async getLesRapportsDate(unId, uneDate){
        var params=new URLSearchParams({
            idVisiteur: unId,
            date: uneDate,
        });
        var response= await fetch('http://localhost/restGSB/rapports_a_date?'+params);
        var items= await response.json();
        return items;
    }
    async majRapports(props){
        var requestOptions={
            method:"PUT",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(props)
        };
        var items= await fetch('http://localhost/restGSB/majRapports',requestOptions);
        return items;
    }
    async majVisiteur(info){
        var requestOptions={
            method:"PUT",
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(info)
        };
        var items= await fetch('http://localhost/restGSB/majVisiteur',requestOptions);
        return items;
    }
            
}