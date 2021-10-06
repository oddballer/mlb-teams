<template>
<div id="team-select">

        <div id="teamlistcontainer"  v-if="selectedTeam == ''">

            <div id="teamList" v-for='team in teams.team_all_season.queryResults.row' v-bind:key ='team' v-on:click.prevent="selectTeam(team.team_id)" v-show="selectedTeam ==''">

                <!-- customize GET to only return basic details for team button -->
               
               <!-- model below block based on basic team info requested with GET -->

                    <img class="team-image" v-if="team.bis_team_code == 'ARI'" src="../assets/teams/Arizona.png">
                    <img class="team-image" v-if="team.bis_team_code == 'ATL'" src="../assets/teams/Atlanta.png">
                    <img class="team-image" v-if="team.bis_team_code == 'BAL'" src="../assets/teams/Baltimore.png">
                    <img class="team-image" v-if="team.bis_team_code == 'BOS'" src="../assets/teams/Boston.png">
                    <img class="team-image" v-if="team.bis_team_code == 'CHI'" src="../assets/teams/Chicago.png">
                    <img class="team-image" v-if="team.bis_team_code == 'CWS'" src="../assets/teams/ChicagoSox.png">
                    <img class="team-image" v-if="team.bis_team_code == 'CIN'" src="../assets/teams/Cincinnati.png">
                    <img class="team-image" v-if="team.bis_team_code == 'CLE'" src="../assets/teams/Cleveland.png">
                    <img class="team-image" v-if="team.bis_team_code == 'COL'" src="../assets/teams/Colorado.png">
                    <img class="team-image" v-if="team.bis_team_code == 'DET'" src="../assets/teams/Detroit.png">
                    <img class="team-image" v-if="team.bis_team_code == 'HOU'" src="../assets/teams/Houston.png">
                    <img class="team-image" v-if="team.bis_team_code == 'KC'" src="../assets/teams/KansasCity.png">
                    <img class="team-image" v-if="team.bis_team_code == 'CAL'" src="../assets/teams/LosAngeles.png">
                    <img class="team-image" v-if="team.bis_team_code == 'LA'" src="../assets/teams/LosAngelesDodgers.png">
                    <img class="team-image" v-if="team.bis_team_code == 'FLA'" src="../assets/teams/Miami.png">
                    <img class="team-image" v-if="team.bis_team_code == 'MIL'" src="../assets/teams/Milwaukee.png">
                    <img class="team-image" v-if="team.bis_team_code == 'MIN'" src="../assets/teams/Minnesota.png">
                    <img class="team-image" v-if="team.bis_team_code == 'NY'" src="../assets/teams/NewYorkMets.png">
                    <img class="team-image" v-if="team.bis_team_code == 'NYY'" src="../assets/teams/NewYorkYankees.png">
                    <img class="team-image" v-if="team.bis_team_code == 'OAK'" src="../assets/teams/Oakland.png">
                    <img class="team-image" v-if="team.bis_team_code == 'PHI'" src="../assets/teams/Philadelphia.png">
                    <img class="team-image" v-if="team.bis_team_code == 'PIT'" src="../assets/teams/Pittsburgh.png">
                    <img class="team-image" v-if="team.bis_team_code == 'SD'" src="../assets/teams/SanDiego.png">
                    <img class="team-image" v-if="team.bis_team_code == 'SF'" src="../assets/teams/SanFrancisco.png">
                    <img class="team-image" v-if="team.bis_team_code == 'SEA'" src="../assets/teams/Seattle.png">
                    <img class="team-image" v-if="team.bis_team_code == 'STL'" src="../assets/teams/StLouis.png">
                    <img class="team-image" v-if="team.bis_team_code == 'TB'" src="../assets/teams/Tampa.png">
                    <img class="team-image" v-if="team.bis_team_code == 'TEX'" src="../assets/teams/Texas.png">
                    <img class="team-image" v-if="team.bis_team_code == 'TOR'" src="../assets/teams/Toronto.png">
                    <img class="team-image" v-if="team.bis_team_code == 'MON'" src="../assets/teams/Washington.png">

                <p id="teamtext">
                    
                {{team.name_display_full}} 

                </p>

                <!-- Map buttons to function that renders roster for specified team -->

                <!-- <Button v-on:click.prevent = "selectTeam(selectedTeam)" class="btn">View Roster</Button> -->

            </div>

    </div>

        <div id="teamrostercontainer" v-if="selectedTeam != ''">
                <div id="teamRoster" v-show="selectedTeam != ''" v-for='player in selectedTeamRoster.roster_40.queryResults.row' v-bind:key ='player'>

                <img class="team-image" v-if="player.team_abbrev == 'ARI'" src="../assets/teams/Arizona.png">
                <img class="team-image" v-if="player.team_abbrev == 'ATL'" src="../assets/teams/Atlanta.png">
                <img class="team-image" v-if="player.team_abbrev == 'BAL'" src="../assets/teams/Baltimore.png">
                <img class="team-image" v-if="player.team_abbrev == 'BOS'" src="../assets/teams/Boston.png">
                <img class="team-image" v-if="player.team_abbrev == 'CHC'" src="../assets/teams/Chicago.png">
                <img class="team-image" v-if="player.team_abbrev == 'CWS'" src="../assets/teams/ChicagoSox.png">
                <img class="team-image" v-if="player.team_abbrev == 'CIN'" src="../assets/teams/Cincinnati.png">
                <img class="team-image" v-if="player.team_abbrev == 'CLE'" src="../assets/teams/Cleveland.png">
                <img class="team-image" v-if="player.team_abbrev == 'COL'" src="../assets/teams/Colorado.png">
                <img class="team-image" v-if="player.team_abbrev == 'DET'" src="../assets/teams/Detroit.png">
                <img class="team-image" v-if="player.team_abbrev == 'HOU'" src="../assets/teams/Houston.png">
                <img class="team-image" v-if="player.team_abbrev == 'KC'" src="../assets/teams/KansasCity.png">
                <img class="team-image" v-if="player.team_abbrev == 'LAA'" src="../assets/teams/LosAngeles.png">
                <img class="team-image" v-if="player.team_abbrev == 'LAD'" src="../assets/teams/LosAngelesDodgers.png">
                <img class="team-image" v-if="player.team_abbrev == 'MIA'" src="../assets/teams/Miami.png">
                <img class="team-image" v-if="player.team_abbrev == 'MIL'" src="../assets/teams/Milwaukee.png">
                <img class="team-image" v-if="player.team_abbrev == 'MIN'" src="../assets/teams/Minnesota.png">
                <img class="team-image" v-if="player.team_abbrev == 'NYM'" src="../assets/teams/NewYorkMets.png">
                <img class="team-image" v-if="player.team_abbrev == 'NYY'" src="../assets/teams/NewYorkYankees.png">
                <img class="team-image" v-if="player.team_abbrev == 'OAK'" src="../assets/teams/Oakland.png">
                <img class="team-image" v-if="player.team_abbrev == 'PHI'" src="../assets/teams/Philadelphia.png">
                <img class="team-image" v-if="player.team_abbrev == 'PIT'" src="../assets/teams/Pittsburgh.png">
                <img class="team-image" v-if="player.team_abbrev == 'SD'" src="../assets/teams/SanDiego.png">
                <img class="team-image" v-if="player.team_abbrev == 'SF'" src="../assets/teams/SanFrancisco.png">
                <img class="team-image" v-if="player.team_abbrev == 'SEA'" src="../assets/teams/Seattle.png">
                <img class="team-image" v-if="player.team_abbrev == 'STL'" src="../assets/teams/StLouis.png">
                <img class="team-image" v-if="player.team_abbrev == 'TB'" src="../assets/teams/Tampa.png">
                <img class="team-image" v-if="player.team_abbrev == 'TEX'" src="../assets/teams/Texas.png">
                <img class="team-image" v-if="player.team_abbrev == 'TOR'" src="../assets/teams/Toronto.png">
                <img class="team-image" v-if="player.team_abbrev == 'WSH'" src="../assets/teams/Washington.png">

                <p id="playertext">

                {{player.name_display_first_last}}
                <br>
                {{player.jersey_number}}

                </p>

                </div>

        </div>
     
</div>
</template> 

<script>
import apiservice from '../services/ApiService.js'

export default {
name: 'TeamSelect',

    created(){
        apiservice.getTeams().then((response) => {
            this.teams = response.data
        });
    },
        
    data(){
        return{
            selectedTeam: '',
            teams:[],
            selectedTeamRoster:[],
        }
    },

    methods:{
        selectTeam: function (team_id){
            this.selectedTeam = team_id
            apiservice.getRoster(team_id).then(
                (response) => {
                    this.selectedTeamRoster = response.data
        });

        },

        resetTeam(){
            this.selectedTeam = '';
        },

    }

}
</script>

<style scoped>

/* @media only screen and (max-width: 450px) */

/* @media only screen and (max-width: 1024px)  */

/* base settings */
#team-select{
display: flex;
width: 100%;
height: 100%;

}

::-webkit-scrollbar {
width: 15px;
}

::-webkit-scrollbar-track {
background: white;
}
 
::-webkit-scrollbar-thumb {
background: #041e42;
}

::-webkit-scrollbar-thumb:hover {
background: #041e4250;
}

#teamList {

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
font-family: 'Open Sans', sans-serif;
font-weight: 800;
font-size: 1em;
width: 12.5%;
height: 25%;
background-color: white;
border-radius: 15px;
margin: 1rem;

}

@media only screen and (max-width: 365px) {

    #teamList{

    width: 75%;
    height: 25%;

    }
}

@media only screen and (min-width: 370px) and (max-width: 425px) {

    #teamList{

    width: 60%;
    height: 25%;

    }
}

@media only screen and (min-width: 750px) and (max-width: 1024px) {

    #teamList {

    width: 25%;
    height: 20%;

    }
}

.btn {

margin: 0.1rem;
background: #041e42;
border-radius: 1rem;
font-family: 'Open Sans', sans-serif;
cursor: pointer;
font-size: 1em;
color: white;
font-weight: 600;
width: 5rem;
  
}

#teamlistcontainer {

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-evenly;
padding: 0rem 3rem 0rem 3rem;
flex-wrap: wrap;
overflow: scroll;
overflow-x: hidden;
width: 100%;
height: 100%;
gap: 2rem;

}

#teamlistcontainer :hover {

background-color: rgb(211, 211, 211);
cursor: pointer;
user-select: none;
-webkit-user-drag: none;

}

#teamrostercontainer {

display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-evenly;
padding: 0 3rem 0 3rem;
margin: 0rem 0 0rem 0;
flex-wrap: wrap;
overflow: scroll;
overflow-x: hidden;
width: 100%;
height: 100%;
gap: 2rem;

}

#teamrostercontainer :hover {

background-color: rgb(211, 211, 211);
cursor: pointer;
user-select: none;
-webkit-user-drag: none;

}

#teamRoster {

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
font-family: 'Open Sans', sans-serif;
font-weight: 800;
font-size: 1em;
width: 12.5%;
height: 25%;
background-color: white;
border-radius: 15px;
margin: 1rem;

}

@media only screen and (max-width: 365px) {

    #teamRoster{

    width: 75%;
    height: 25%;

    }
}

@media only screen and (min-width: 370px) and (max-width: 425px) {

    #teamRoster{

    width: 60%;
    height: 25%;

    }
}

@media only screen and (min-width: 750px) and (max-width: 1024px) {

    #teamRoster {

    width: 25%;
    height: 20%;

    }
}

#playertext {

display: flex;
flex-direction: row;
align-items: center;

}

.team-image{

height: 4rem;
width: 4rem;

}

</style>