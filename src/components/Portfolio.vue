<template>
    <div id="sectionPort">
            <div class="titleSectionPort">
                <h4>Portfolio</h4>
            </div>
            <vueper-slides slide-image-inside :slide-ratio="1 / 3" :breakpoints="breakpoints">
                <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :image="slide.image" :content="slide.content" :link="slide.link" />
            </vueper-slides>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'


export default{
    
    name: 'Portfolio',
    components:{
        VueperSlides, VueperSlide
    },
    data (){
        return{
        slides: [
            {
            title:'DROPHEAR',
            content: '<b>Notre plus beau projet</b> </br> - Un projet personnel qui est un laboratoire reprenant toute ma curiosité : <br> le développement web, la musique, utiliser des outils par curiosité... </br> <i><u>Technologies</u> : WordPress, Oxygen(anciennement sous Elementor), ACF </i></br> Sans oublier Photoshop, Sony Vegas, Illustrator',
            image: require('@/assets/bmdrop.png'),
            link: "https://drophear.com/"
            },
            {
            title: 'StaffMe Academy',
            content: '<b>Une alternance formatrice</b> </br> - Intégration de maquettes venant du marketing, avec notamment <br> les contraintes d\'utilisation et d\'administration </br> <i><u>Technologies</u> : WordPress, Elementor, Advance Custom Fields </i>',
            image: require('@/assets/sma.png'),
            link:"https://staffmeacademy.fr/"
            },
            {
            title:'OpenClassrooms #1',
            content:'<b>La magie de Node, Sequelize & VueJs</b> </br>- Ultime projet d\'intégration fullstack.</br> <i><u>Technologies</u> : Node, Vue, JavaScript, Sequelize ORM, MySQL</i></br>',
            image: require('@/assets/p7officiel.png'),
            link: "https://github.com/benoitMouly/BenoitMouly_7_30052021"
            },
            {
            title:'OpenClassrooms #2',
            content: '<b>From scratch</b> </br> - Un projet OpenClassrooms formateur en termes d\'intégrations <br> en respectant au pixel la maquette donnée. </br> <i><u> Technologies </u> : HTML5 , CSS3</i> ',
            image: require('@/assets/p2officiel.png'),
            link: "https://github.com/benoitMouly/BenoitMouly_2_22102020"
            },
            {
            title:'Projet OpenClassrooms #3',
            content: '<b>From scratch SCSS</b> </br> - Un second projet en utilisant cette fois-ci du SASS</br> <i><u> Technologies </u> : HTML5 , SCSS </i>',
            image: require('@/assets/p3officiel.png'),
            link: "https://github.com/benoitMouly/BenoitMouly_3_23122020"
            },
            {
            title:'Vous êtes sur du VueJs.',
            content: '<b>Oui, ce site est en VueJs</b>',
            }
            
        ],
         breakpoints: {
            1200: {
            slideRatio: 1 / 5,
            bulletsOutside: true
            },
            900: {
            slideRatio: 1 / 3,
            bulletsOutside: true
            },
            600: {
            slideRatio: 1 / 2,
            arrows: false,
            bulletsOutside: true
            },
            1500:{
                slideRatio: 1/4,
                bulletsOutside: true
            }
  
    // The order you list breakpoints does not matter, Vueper Slides will sort them for you.

  },
        
        }
    }
}
</script>


<style lang="scss">

#sectionPort{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    column-gap: normal;
    //overflow: hidden;
    position: relative;
    top: 6%;
}
.titleSectionPort{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    margin: 0px 20px 0px 20px;
    margin-bottom: 60px;
}
.titleSectionPort h4{
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-weight: 700;
    font-size: 2.8em;
    font-family: 'MontSerrat', cursive !important;
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

.titleSectionPort h4:hover{
    color: blanchedalmond;
    border-bottom-color: #7451eb;
}



////// TABLET PHONE 
@media screen and (max-width: 525px) {

#sectionPort{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    //align-items: center;
    row-gap : 2rem;
}

.titleSectionPort h4{
    
    width: 200px !important;
    margin: 47px 0px 0px 0px;
    font-size: 1.5rem;
    
}
.vueperslides{
    //align-self: normal;
    height: 5%;
    top: 15%;
}

.vueperslide__title{
    font-size: 1.5em;
    //margin-bottom: 33%;
}

.vueperslide__content{
    font-size:2rem;

   // bottom: 33% !important;
}
/*
.vueperslide__image{
    background-size: cover;
}
*/
.titleSectionPort{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
}

}
</style>
