<template>
  <div id="sectionCompetence">
            <div class="titleSection titleSectionComp">
            <h4>Compétences</h4>
            <Burger></Burger>
            </div>
    <div class="bars">

      <div class="bar1">
        <h4 class="centered">HTML5</h4>
      <div class="progress-bar">
        <div data-size="90" class="progress color0">90%</div>
      </div>
      </div>

      <div class="bar2">
        <h4>JavaScript</h4>
      <div class="progress-bar">
        <div data-size="70" class="progress color1">70%</div>
      </div>
      </div>

      <div class="bar3">
        <h4>NodeJs (express)</h4>
      <div class="progress-bar">
        <div data-size="70" class="progress color2">70%</div>
      </div>
      </div>

      <div class="bar4">
        <h4>SCSS</h4>
      <div class="progress-bar">
        <div data-size="55" class="progress color3">55%</div>
      </div>
      </div>

        <div class="bar5">
          <h4>VueJs</h4>
      <div class="progress-bar">
        <div data-size="65" class="progress color4">65%</div>
      </div>
      </div>

              <div class="bar6">
          <h4>PHP</h4>
      <div class="progress-bar">
        <div data-size="65" class="progress color5">25%</div>
      </div>
      </div>

              <div class="bar7">
          <h4>WordPress (builders)</h4>
      <div class="progress-bar">
        <div data-size="70" class="progress color6">70%</div>
      </div>
      </div>

    </div>
  </div>
</template>

<script>
import Burger from '@/components/menu/Burger.vue';

export default{
    name: 'Competences',
    components:{
      Burger
    },

  methods:{
    progressBar(){
      const progress_bars = document.querySelectorAll('.progress');

      progress_bars.forEach(bar => {
        setTimeout(() => {
          const { size } = bar.dataset;
          bar.style.width = `${size}%`
        }, 1000);
      });
    }
  },
    watch:{
    $route (){
        this.progressBar()
    },
}}
</script>


<style lang="scss">

#sectionCompetence{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-height: 100%;
  row-gap: 2rem;
}

.titleSectionComp{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    margin: 0px 20px 0px 20px;
}
.titleSection{
  height: 30%;
}
/*h4{
    display: flex;
    flex-direction: row;
    //justify-content: center;
    //text-transform: uppercase;
    font-weight: 100;
    font-size: 1.3em;
    //font-family: Avenir, sans;
    line-height: 0.5;
    margin-bottom: 0px;
    border-bottom: 30px solid #7451eb;
    border-bottom-width: 3px;
    border-bottom-style: ridge;
    border-bottom-color: #eb517f;
    display: inline-block;
    padding-bottom: 10px;
    font-family: sans-serif;
    color: rgb(219, 219, 219);
    margin: 47.667px 0px 0px 50px;
    
}*/
.titleSection h4{
    display: flex;
    flex-direction: row;
    justify-content: center;
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
    //color: #7451eb;
    color: rgb(219, 219, 219);
    //margin: 47.667px 0px 0px 50px;
    text-align: center;
    
}

.titleSection h4:hover{
    color: blanchedalmond;
    border-bottom-color: #7451eb;
}
.bars{
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


.progress-bar {
  background-color: #20252c;
  color: white;
  font-weight: 800;
  font-size: 2em;
  text-align: center;
  border-radius: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  border: 3px double black;
  margin: 15px;
  height: 30px;
  width: 500px;
  max-width: 100%;
}

.progress {
  /*background: #ad5389;
  background: -webkit-linear-gradient(to bottom, #3c1053, #ad5389);
  background: linear-gradient(to bottom, #3c1053, #ad5389);*/
  border-radius: 6px;
  height: 30px;
  width: 0;
  transition: width 2s ease-in;
}
@media screen and (min-width: 750px) and (max-width: 800px){
  .progress-bar{
    width: 180px;
    height: 20px;
  }
  .progress{
    //width: 180px;
    height: 20px;
    font-size: 1rem;
  }
}
@media screen and (min-width: 801px){
  .progress-bar{
    width: 350px;
    height: 15px;
    font-size: 1rem;
  }
    .progress{
    //width: 3500px;
    height: 15px;
    font-size: 0.8rem;
  }
}
@media screen and (min-width: 320px) and (max-width: 750px){
  .progress-bar{
    width: 120px;
    height: 15px;
  }
  .progress{
    //width: 120px;
    height: 15px;
    font-size: 1rem;
  }
}
//////////// TABLET PHONE
@media screen and (max-width: 525px) {

.titleSection h4{
width: 200px !important;
margin: 47px 0px 0px 0px;
}

#sectionCompetence{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    row-gap : 2rem;
}

.progress{
  font-size: 0.8rem;
}

    .titleSectionComp{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column-reverse;
    }
}

.color0{
  background: #7451eb;
}
.color1{
  background: #eb517f;
  margin: 0;
}
.color2{
  background: #7451eb;
}
.color3{
  background: #eb517f;
}

.color4{
  background: #7451eb;
}

.color5{
  background: #eb517f;
}

.color6{
  background: #7451eb;
}

.color7{
  background: #eb517f;
}
</style>
