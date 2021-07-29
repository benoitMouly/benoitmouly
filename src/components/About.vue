<template>
    <div id="sectionAbout">
        <div class="titleSection titleSectionAbout">
            <h4>Contact</h4>
            <Burger></Burger>
        </div>
        <div class="icons">
            <div class="email">
            <a href="mailto:contact.benoit.mouly@gmail.com" class="iconref"><i class="fas fa-at"></i>
            <p>contact.benoit.mouly@gmail.com <i class="fas fa-external-link-alt"></i></p></a>
            </div>
            <div class="github">
            <a target="_blank" href="https://github.com/benoitMouly" class="iconref"><i class="fab fa-github"></i>
            <p>benoitMouly <i class="fas fa-external-link-alt"></i></p></a>
            </div>
            <div class="linkedin">
            <a target="_blank" href="https://www.linkedin.com/in/benoitmoulycommunication/" class="iconref"><i class="fab fa-linkedin-in"></i>
            <p>Benoît Mouly <i class="fas fa-external-link-alt"></i></p></a>
            </div>
        </div>
        
        <div class="cv"><a href="cvBenoitMouly20202021.pdf" download><button type="button" class="btnCv">Téléchargez mon CV <br/><i class="fas fa-file-download"></i></button></a><p>{{copyright}}</p></div>
    </div>
</template>

<script>
import Burger from '@/components/menu/Burger.vue';

export default{
    name: 'About',
    data(){
        return {
            siteName: "benoitmouly"
        }
    },
    components:{
        Burger
    },
computed: {
copyright() {
const currentYear = new Date().getFullYear()
return `Copyright ${this.siteName} ${currentYear}`
	}
	},
}
</script>

<style lang="scss">

#sectionContact{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
}

.titleSectionAbout{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    margin: 0px 20px 0px 20px;
}
.icons{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 5rem 0 0 0;
}
.email, .github, .linkedin{
    width: 33.3333%;
    text-align: center;
}
.fa-at, .fa-github, .fa-linkedin-in{
    font-size: 4rem;
}

.fa-at:hover, .fa-github:hover, .fa-linkedin-in:hover{
    color: #eb517f;
}
.iconref{
    color: white;
    text-decoration: none;
    
}
.iconref:hover{
    color: #eb517f;
}
.cv{
    text-align: center;
    margin: 5rem 0 0 0;
}
.btnCv{
    display: inline-block;
    border: 5px double white;
    background: none;
    text-decoration: none;
    padding: 1rem;
    color: white;
    border-bottom: 5px double #eb517f;
    border-top: 5px double #eb517f;
    font-weight: 600;
    line-height: 1.3rem;
    cursor: pointer;
}

.btnCv:hover{
    
    border: 5px double #eb517f;
    border-bottom: 5px double white;
    border-top: 5px double white;
}

////// 
//////////// TABLET PHONE
@media screen and (max-width: 525px) {

.titleSectionAbout h4{
        width: 200px !important;
        margin: 47px 0px 0px 0px;
}

#sectionAbout{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    row-gap : 1.5rem;
}

.titleSectionAbout{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column-reverse;
}

.email, .github, .linkedin{
    width: 100%;
    text-align: center;
    margin: 5px 0px 0px 0px;
}

.fa-at, .fa-github, .fa-linkedin-in{
    font-size: 1.9rem;
}
.icons{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0px 0 0 0;
}

.cv{
    text-align: center;
    margin: 0rem 0 0 0;
}
.btnCv{
    display: inline-block;
    border: 5px double white;
    background: none;
    text-decoration: none;
    padding: 0.3rem;
    color: white;
    border-bottom: 5px double #eb517f;
    border-top: 5px double #eb517f;
    font-weight: 600;
    line-height: 1rem;
    cursor: pointer;
}
}


</style>