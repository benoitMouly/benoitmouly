<template>
        <footer id="mainBlock">
            <div class="block">
        <div class ="logoBlock">
        <img src="../assets/logoBm3.svg" class="logoFooter" alt="logo de Groupomania"/><br/>
        </div>
        <div class="copyright">
        <p>{{copyright}}</p>
        </div>
            </div>
        </footer>

</template>


<script>
export default {
    name: "footerElement",
data(){
    return {
        image : 'src/assets/logoBm3.svg',
        siteName: "Benoît Mouly"
    }
    
},
	computed: {
		copyright() {
			const currentYear = new Date().getFullYear()

			return `Copyright © ${this.siteName} ${currentYear}`
		}
	},
}
</script>

<style scoped>
#mainBlock {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color: #fff;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    column-gap: 90px;
    max-width:100%;
    max-height:100%;   /* Height of the footer */
    margin: 4px -4px -8px -4px;
}

.block{
    display: flex;
    flex-direction: row wrap ;
    column-gap: 10em;
    align-items: center ;
}


.logoFooter{
height: 2rem;
margin: 10px 0 0 0;
}

.copyright{
    font-family: Roboto, sans-serif;
}

</style>