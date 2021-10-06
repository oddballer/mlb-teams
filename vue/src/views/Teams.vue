<template>
    
    <div class="selectorWindow">
        
             <div class="titlebar" >
                 <div class="title" v-on:click="goHome">
                 <img id="mlblogo" src="../assets/mlbBar.png" height="50rem" width="80rem">
                 <span id="logo">MLB Teams</span>
                 </div>
            </div>

             <div class="cards">
        
                <team-select id="teamselectbox" ref="teamselect"/>
            
            </div>
    </div>
    
    
</template>

<script>
import TeamSelect from '../components/TeamSelect.vue'

export default {
    name: 'teams',
       
    components: {
        TeamSelect,
    
    },

    methods: {

         goHome(){location.reload();},
        // goHome(){this.$refs.teamselect.resetTeam()},
    }


}
</script>

<style scoped>

.titlebar {

display: flex;
flex-direction: row;
background-color: #041e42;
justify-content: center;
align-items: center;
margin: 0;
padding: 0;
height: 15%;
user-select: none;

}

.title {

display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

}

.title :hover {

cursor: pointer;
user-select: none;
-webkit-user-drag: none;

}

#mlblogo {

-webkit-user-drag: none;

}

#logo {

color:rgb(219, 219, 219);
font-size: 3em;
font-family: 'Open Sans', sans-serif;

}

@media only screen and (max-width: 365px) {

    #logo{

    font-size: 2em;

    }
}

.cards{

display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
overflow: hidden;

}

.selectorWindow{

display: flex;
flex-direction: column;
background-color:#f3f3f3;
height: 100vh;
width: 100vw;
overflow: hidden;

}

#teamselectbox {

display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
}

</style>

