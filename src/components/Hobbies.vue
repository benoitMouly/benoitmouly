<template>
        <div id="sectionHobbies">
            <div class="titleSection titleSectionHobb">
                <h4>Benoît</h4>
            </div>
           <div class="jumbotron">
					<div v-for='(Experience, experienceIndex) in Experiences' :key="experienceIndex" class="deroule">
						<div class="accordion"
					v-on:click="open(experienceIndex)">
							<span> {{Experience.title}} <i :class="Experience.chevron"></i>
							</span> 
						</div>
						<div :class="Experience.class" class="panel">
							{{Experience.description}}
						</div>
				</div>
		</div>
    
        </div>
</template>

<script>


export default{
    name: 'Hobbies',
    data(){
        return{
    
            Experiences: [{
            title: 'Qui est Benoît ?',
            description: "Son dessert préféré est le tiramisu, ou une passe décisive de Bernardo Silva. Vrai passionné de football, quand je vais à la plage c'est pas pour me baigner mais pour recruter des joueurs qui pensaient que la plage n'était faite que pour bronzer. Sinon j'adore parler d'astronomie, ruiner des carrières sur mariokart, et faire références aux 42 000 vidéastes youtube (Palmashow et JDG inclus). Très intéressé, j'adore découvrir et échanger sur des sujets dont je suis ignorant",
            class: "hide",
            chevron: 'fa fa-chevron-down'
          },
					{
            title: 'Comment il étudie ? ',
            description: " Si il n'y a ni piste ni réponse sur Google, soit tu es un génie, soit tu cherches mal. J'étudie en cherchant, j'apprends en testant. Dans ce coeur de métier, si l'on est pas prêt à étudier toute sa vie, alors il faut se reconvertir.",
            class: "hide",
            chevron: 'fa fa-chevron-down'
          },
          {
            title: 'Comment il travail ?',
            description: " En solo, très souvent avec de la musique, pour les rush notamment. Cela me permet de rester concentrer et motivé. En équipe, j'aime que chacun de mon équipe soit crédité même pour la plus petite des actions. Me concernant, je n'aime pas me sentir inutile",
            class: "hide",
            chevron: 'fa fa-chevron-down'
          },
          {
            title: 'Des supers-pouvoirs ? ',
            description: " Je connais par coeur les 151 Pokemon de la 1ère génération, et presque imbatable au JukeBox tout genre confondu.",
            class: "hide",
            chevron: 'fa fa-chevron-down'
          }
        ],
  isOpen: false,

    }},
methods : {
	open(position) {
        switch (position) {
          case 0:
            this.hide(position);
            break;
          case 1:
            this.hide(position);
            break;
          case 2:
            this.hide(position);
            break;
          case 3:
            this.hide(position);
            break;
          case 4:
            this.hide(position);
            break;
          default:
        }

      },
      hide(element) {
        let length = this.Experiences.length,
          i = 0;
        if (this.isOpen == false) {
          this.Experiences[element].class = 'show';
          this.Experiences[element].chevron = 'fa fa-chevron-up';
          this.isOpen = true;
          for (i; i < length; i++) {
            if (element != i) {
              this.Experiences[i].class = 'hide';
              this.Experiences[i].chevron = 'fa fa-chevron-down';

            }
          }
        } else {
          this.Experiences[element].class = 'hide';
          this.Experiences[element].chevron = 'fa fa-chevron-down';
          this.isOpen = false;
        }
      },
      show(){
   var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
      }
    },

    unmounted(){
      this.open();
      this.hide();
      this.show();
    }
    
}
</script>


<style lang="scss" >

#sectionHobbies{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content:flex-end;
  column-gap: 200px;
  position: relative;
  top: 6%;
}

.titleSectionHobb{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    margin: 0px 20px 0px 20px;
    height: 30%;
}

.jumbotron{
  height: 100%;
  display: block;
  margin: 60px;

}
 span {
    
		font-size:20px;
		margin-left:10px;
    transition: 0.4s;
 }

  .show {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s linear 0s, opacity 1800ms;
    text-align: left;
    color: #f8f1ff;
    font-size: 20px;
    font-weight: 100px;
    padding-left: 1.5em;
  }

  .hide {
    visibility: hidden;
    opacity: 0;
    height: 0;
    /*-moz-transition: height 1s ease;
    -webkit-transition: height 1s ease;
    -o-transition: height 1s ease;
    transition: height 1s ease;*/
    -moz-transition: height 1s;
    -webkit-transition: height 1s;
    -o-transition: height 1s;
    transition:  height 1s ;
  }

  .accordion {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
    padding-bottom: 0px;
    overflow: hidden;
    font-weight: 800;
    text-decoration: underline double #eb517f 1.5px;
    -webkit-transition: 0.3s;
    -o-transition: height  0.3s;
    -moz-transition:  0.3s;
    transition: 0.4s;
  }

  .deroule{
    transition: 0.4s;
  }

  .fa-chevron-down, .fa-chevron-up{
  float: right;
  padding-top:25px;
  }

  .fa-chevron-up{
    color: #eb517f;
  }


  @media screen and (max-width: 800px) {
    .show {
      font-size: 13px;
    }
  }

  //////////// TABLET PHONE
@media screen and (max-width: 525px) {

.titleSectionHobb h4{
        width: 200px !important;
        margin: 47px 0px 0px 0px;
}

#sectionHobbies{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    row-gap : 2rem;
}

.jumbotron{
  margin: 0;
}

span {
  font-size:12px;
	margin-left:10px;
 }

.show{
  font-size: 11px;
}

.titleSectionHobb{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column-reverse;
}
}

</style>
