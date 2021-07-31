<template>

    <div id="sectionParcours">
        <div class="titleSectionParcours">
            <h4>Parcours</h4>
        </div>
        <div class="fresque">
        <img src="../assets/fresque2.svg" class="svgfresque"/>
        </div>
        <div class="slidez">
        <vueper-slides slide-image-inside :slide-ratio="1 / 3" :breakpoints="breakpoints">
  <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :image="slide.image" :content="slide.content" :link="slide.link" />
</vueper-slides>
        </div>
    </div>

</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default{
    name: 'Parcours',
    components:{
        VueperSlides, VueperSlide
    },
    data(){
        return{
            slides:[
                {
                    image: require('@/assets/fresquePhone1.png'),
                },
                {
                    image: require('@/assets/fresquePhone2.png'),
                },
            ],
             breakpoints: {
            1200: {
            slideRatio: 1 / 5
            },
            900: {
            slideRatio: 1 / 3
            },
            600: {
            slideRatio: 1 / 2,
            arrows: false,
            bulletsOutside: true
            },
    // The order you list breakpoints does not matter, Vueper Slides will sort them for you.
            1100: {
            slideRatio: 1 / 4
    }
  },
        }
    }
}
</script>


<style lang="scss" scoped>

#container{
    max-height: 100%;
    max-width: 100%;
}

#sectionParcours{
    //display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    row-gap : 2rem;
    position: relative;
    top: 6%;

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
    font-size: 2.8em;
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


    .fresque{
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
        font-size: 1.5rem;
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

    .slidez{
        display: none;
    }
    .svgfresquerog{
        display: none;
    }

}

</style>