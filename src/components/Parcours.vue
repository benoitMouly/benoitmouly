<template>

    <div id="sectionParcours">
        <div class="titleSectionParcours">
            <h4>Parcours</h4>
            <Burger></Burger>
        </div>
        <div class="fresque">
        <img src="../assets/fresque2.svg" class="svgfresque"/>
        <img src="../assets/fresquerog2.svg" class="svgfresquerog"/>
        <img src="../assets/fresquephone.svg" class="svgfresquephone"/>
        </div>
    </div>

</template>

<script>
import Burger from '@/components/menu/Burger.vue';

export default{
    name: 'Parcours',
    components:{
        Burger
    }
}
</script>


<style lang="scss" scoped>

#container{
    max-height: 100%;
    max-width: 100%;
}

#sectionParcours{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    //align-items: center;
    row-gap : 2rem;

}

.titleSectionParcours{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    margin: 0px 20px 0px 20px;
}
.titleSectionParcours h4{
    display: flex;
    flex-direction: row;
    //justify-content: center;
    /*text-transform: uppercase;*/
    font-weight: 100;
    font-size: 2.8em;
    //font-family: Avenir, sans;
    font-family: 'Zen Tokyo Zoo', cursive !important;
    line-height: 0.5;
    margin-bottom: 0px;
    border-bottom: 30px solid #7451eb;
    border-bottom-width: 3px;
    border-bottom-style: ridge;
    border-bottom-color: #eb517f;
    border-radius: 25%;
    display: inline-block;
    padding-bottom: 10px;
    font-family: sans-serif;
    width: 300px;
    color: rgb(219, 219, 219);
    margin: 47.667px 0px 0px 50px;
    text-align: center;
    
}

.titleSectionParcours h4:hover{
    color: blanchedalmond;
    border-bottom-color: #7451eb;
}

.titleSectionParcours{
    height: 40%;
}
.svgfresque{
margin-top: 0rem;
object-fit: contain;
}


///////////// TABLET PHONE
@media screen and (max-width: 525px) {
    .svgfresque{
      display: none;
    }
    .svgfresquephone{
        display: none;
    }
    .svgfresquerog{
        object-fit: cover;
        height: 350px;
    }
        .titleSectionParcours h4{
        width: 200px !important;
        margin: 47.667px 0px 0px 0px;
    }

    #sectionParcours{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    row-gap : 2rem;

}
    .titleSectionParcours{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column-reverse;
    }
}

@media screen and (min-width: 526px){
    .svgfresquerog{
        display: none;
    }
    .svgfresquephone{
        display: none;
    }
}

</style>