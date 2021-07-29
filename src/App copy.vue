<template>
  <div id="nav">
      <section class="fullpage">
      <div id="mainBlock">
        <img src="./assets/logoBm3.svg" class="logoFullBlack"/>
          <div class="menuElements"><router-link to="/#competences" class="menuElement">Compétences</router-link>
          | <router-link to="/portfolio" class="menuElement">Portoflio</router-link>
          | <router-link to="/hobbie" class="menuElement">Hobbies</router-link>
          | <router-link to="/contact" class="menuElement">Contact</router-link>
          </div>
      </div>
            <div class="sections-menu">
              <span
                class="menu-point"
                v-bind:class="{active: activeSection == index}"
                v-on:click="scrollToSection(index)"
                v-for="(offset, index) in offsets"
                v-bind:key="index">
                </span>
            </div>
            <Presentation/>
      </section>
        <router-view/>
  </div>

</template>

<script>
//import footerElement from '@/components/footer.vue'
import Presentation from '@/components/Presentation.vue'

export default {
  name: 'app',
  data() {
    return{
    inMove: false,
    activeSection: 0,
    offsets: [],
    touchStartY: 0
  
}
},
  components: {
    Presentation, //Parcours, Competences, Portfolio
  },
  methods: {
    calculateSectionOffsets() {
      let sections = document.getElementsByTagName('section');
      let length = sections.length;
      
      for(let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    },
    handleMouseWheel: function(e) {
      
      if (e.wheelDelta < 30 && !this.inMove) {
        this.moveUp();
      } else if (e.wheelDelta > 30 && !this.inMove) {
        this.moveDown();
      }
        
      e.preventDefault();
      return false;
    },
    handleMouseWheelDOM: function(e) {
      
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }
      
      return false;
    },
    moveDown() {
      this.inMove = true;
      this.activeSection--;
        
      if(this.activeSection < 0) this.activeSection = this.offsets.length - 1;
        
      this.scrollToSection(this.activeSection, true);
    },
    moveUp() {
      this.inMove = true;
      this.activeSection++;
        
      if(this.activeSection > this.offsets.length - 1) this.activeSection = 0;
        
      this.scrollToSection(this.activeSection, true);
    },
    scrollToSection(id, force = false) {
      if(this.inMove && !force) return false;
      
      this.activeSection = id;
      this.inMove = true;
      
      document.getElementsByTagName('section')[id].scrollIntoView({behavior: 'smooth'});
      
      setTimeout(() => {
        this.inMove = false;
      }, 400);
      
    },
    touchStart(e) {
      e.preventDefault();
      
      this.touchStartY = e.touches[0].clientY;
    },
    touchMove(e) {
      if(this.inMove) return false;
      e.preventDefault();
      
      const currentY = e.touches[0].clientY;
      
      if(this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }
      
      this.touchStartY = 0;
      return false;
    }
  },
  mounted() {
    this.calculateSectionOffsets();
    
    window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM);  // Mozilla Firefox
    window.addEventListener('mousewheel', this.handleMouseWheel, { passive: false }); // Other browsers
    
    window.addEventListener('touchstart', this.touchStart, { passive: false }); // mobile devices
    window.addEventListener('touchmove', this.touchMove, { passive: false }); // mobile devices
  },
  unmounted() {
    window.removeEventListener('mousewheel', this.handleMouseWheel, { passive: false });  // Other browsers
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
    
    window.removeEventListener('touchstart', this.touchStart); // mobile devices
    window.removeEventListener('touchmove', this.touchMove); // mobile devices
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
.logoFullBlack path {
  fill: #fff;
}

.logoFullBlack path:hover {
  fill: #C40030;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#mainBlock{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-height: 100%;
  max-width: 100%;
  margin: 4px 4px 4px 4px;

}

.logoFullBlack{
  max-height: 5rem;
  font-family: ZenTokyoZoo-Regular;

}
body {
  font-family: Avenir, Montserrat, Roboto, ZenTokyoZoo-Regular, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.8rem;
  color: #fff;
  max-height: 100%;
  max-width: 100%;
  overflow-x: hidden;
  overflow: hidden;
  background: #20252c;
  padding: 0px !important;
  margin: 0px;
}

.menuElement{
  color: #fff !important;
  font-size: 1.1rem;
  font-family: 'Roboto', sans-serif;
}

.menuElement:hover{
color: coral !important;
}


#mainBlock{
  padding: 10px;
  background: #20252c;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #C40030;
    }

    &:hover{
      color: brown;
    }
  }
}
// TUTORIAL 


.sections-menu {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
}

.sections-menu .menu-point {
  width: 10px;
  height: 10px;
  background-color: #FFF;
  display: block;
  margin: 1rem 0;
  opacity: .6;
  transition: .4s ease all;
}

.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}

.fullpage {
  height: 100vh;
  width: 100%;
}

</style>
