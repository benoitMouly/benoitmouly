<template>
    <div id="sectionPresentation">
        <div id="pictext">
            <div class="pictureBox">
                <img src="../assets/profilepic.jpg" class="profilePicture"/>
            </div>
            <div class="littleText wordCarousel">         

            <p class="textPresentation">  
                Bienvenue sur mon site. Je m'appelle Benoît et je suis <br/>
                doublement diplômé de chez OpenClassrooms.
                Je suis spécialisé sur le CMS WordPress. <br/> 
                Maitrîsant le html et CSS, je suis aussi compétent en JavaScript et sur différents frameworks (tel que NodeJS, et VueJS) me permettant de travailler sur du fullstack.<br/>
                </p>
            </div>
        </div>
    </div>
</template>

<script>


export default{
    name: 'Presentation',
}

</script>

<style lang="scss" scoped>

#sectionPresentation{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100%;
    width: 100%;
    //background: red;
    position: relative;
    top: 15%;
}

#pictext{
    display: flex;
    max-width: 100%;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin: 5% 5% 0% 5%;
}


.pictureBox{
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    flex: 1 1 auto;
    
}

.profilePicture{
    max-width: 50%;
    max-height: 100%;
    object-fit: contain;
    filter: drop-shadow(15px 7px 5px rgba(0, 0, 0, 0.171));
    border-radius: 100%
}


.textPresentation{
    font-size: 1.5em;


}

.openC{
    color: #7451eb;
    font-weight: bold;
    text-align: center;
    margin: 0;
}

.dev{
    color: #ec2b5b;
    font-weight: bold;
    margin: 0;
}


@media screen and (max-width: 680px){
  #sectionPresentation{
    flex-direction: column;
    row-gap: 10px;
  }
}



/*animated scroll arrow animation*/
@-webkit-keyframes fade_move_down {
  0%   { -webkit-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { -webkit-transform:translate(0,10px) rotate(45deg); opacity: 0; }
}
@-moz-keyframes fade_move_down {
  0%   { -moz-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { -moz-transform:translate(0,10px) rotate(45deg); opacity: 0; }
}
@keyframes fade_move_down {
  0%   { transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { transform:translate(0,10px) rotate(45deg); opacity: 0; }
}


//////////// TABLET PHONE
@media screen and (max-width: 525px) {
#pictext{
    display: flex;
    max-width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin: 5%;
    row-gap: 2rem;
}

.textPresentation{
    font-size: 0.8rem;
    text-align: center;
}

.openC{
    color: #7451eb;
    font-weight: bold;
    margin: 0;
    font-size: auto;
}

.dev{
    color: #ec2b5b;
    font-weight: bold;
    margin: 0;
    font-size: auto;
}
.icondown{
    position: absolute;
    font-size: 3vw;
    text-align: center;
    flex: 0 0 100%;
    margin: 0 0 0 0;
    color: green;
}
}
</style>
