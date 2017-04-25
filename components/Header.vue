<template lang="html">
  <header>
    <div class="container">
      <div class="row">

          <div class="hamburger-wrapper">
            <button @click="toggleActive" :class="{'is-active': isActive}" class="c-hamburger c-hamburger--htx">
              <span>toggle menu</span>
            </button>
          </div>

          <nuxt-link to="/" class="logo" title="Company Name">

        </nuxt-link>

          <nav class="menu">
            <ul class="menu-list">
              <li class="menu-item"><nuxt-link class="menu-link" to="/" exact>Main</nuxt-link></li>
              <li class="menu-item"><nuxt-link class="menu-link" to="/about">About</nuxt-link></li>
              <li class="menu-item"><nuxt-link class="menu-link" to="/1">Page One</nuxt-link></li>
              <li class="menu-item"><nuxt-link class="menu-link" to="/2">Page Two</nuxt-link></li>
              <li class="menu-item"><nuxt-link class="menu-link" to="/3">Page Three</nuxt-link></li>
              <li class="menu-item"><nuxt-link class="menu-link" to="/posts">Posts</nuxt-link></li>
            </ul>
          </nav>

          <div class="overlay" :class="{'open': activeOverlay}">
            <nav class="overlay-menu">
              <ul>
                <li><nuxt-link @click.native="toggleActive" to="/">Main</nuxt-link></li>
                <li><nuxt-link @click.native="toggleActive" to="/about">About</nuxt-link></li>
                <li><nuxt-link @click.native="toggleActive" to="/1">Page One</nuxt-link></li>
                <li><nuxt-link @click.native="toggleActive" to="/2">Page Two</nuxt-link></li>
                <li><nuxt-link @click.native="toggleActive" to="/3">Page Three</nuxt-link></li>
              </ul>
            </nav>
          </div>

      </div>



    </div>


  </header>
</template>

<script>

export default {
  data () {
    return {
      isActive: false,
      activeOverlay: false

    }
  },
  methods: {
    toggleActive: function () {
      this.isActive = !this.isActive
      this.activeOverlay = !this.activeOverlay
    }
    // toggleOverlay: function () {
    //   this.activeOverlay = !this.activeOverlay
    // }
  }
}
</script>

<style lang="scss" scoped>
///////////////////////////////////////////////////////
// MAIN STYLES
///////////////////////////////////////////////////////
header {
  font-size: 16px;
  position: fixed;
  width: 100%;
  z-index: 999;
  background: white;
  border-bottom: 1px solid rgba(206, 206, 206, 0.44);
  // box-shadow: 0px 5px 39px -17px rgba(0,0,0,0.4);
  box-shadow: 0px 10px 30px -20px rgba(0, 0, 0, 0.4);
}
.row {
  padding: 0 1rem;
}

@media (min-width: 48em) {
  .row {
    flex-direction: column;
    align-items: center;
  }
}

@media (min-width: 64em) {
  .row {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

///////////////////////////////////////////////////////
// HUMBURGER
///////////////////////////////////////////////////////
.hamburger-wrapper {
  position: absolute;
  top: 7px;
  right: 7px;
  z-index: 777;
  // display: none;
}
@media (min-width: 48em) {
  .hamburger-wrapper {
    display: none;
  }
}
.c-hamburger {
  display: block;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 32px;
  height: 32px;
  font-size: 0;
  text-indent: -9999px;
  appearance: none;
  box-shadow: none;
  border-radius: none;
  border: none;
  cursor: pointer;
  // background: red;
  transition: background 0.2s;
}
.c-hamburger:focus {
  outline: none;
}
.c-hamburger span {
  display: block;
  position: absolute;
  top: 14px;
  left: 6px;
  right: 6px;
  height: 3px;
  background: black;
  border-radius: 3px;
  // transition: background 5000ms;
}
.c-hamburger span::before,
.c-hamburger span::after {
  position: absolute;
  display: block;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: black;
  content: "";
  border-radius: 3px;
}
.c-hamburger span::before {
  top: -8px;
}
.c-hamburger span::after {
  bottom: -8px;
}
// ANIMATE
.c-hamburger--htx {
  background-color: transparent;
}
.c-hamburger--htx span {
  transition: background 0s 0.2s;
}
.c-hamburger--htx span::before,
.c-hamburger--htx span::after {
  transition-duration: 0.2s, 0.2s, 0.2s;
  transition-delay: 0.2s, 0s, 0s;
}
.c-hamburger--htx span::before {
  transition-property: top, transform, background-color;
}
.c-hamburger--htx span::after {
  transition-property: bottom, transform, background-color;
}
/* active state, i.e. menu open */
.c-hamburger--htx.is-active {
  background-color: transparent;
}
.c-hamburger--htx.is-active span {
  background: none;
  // transition: background 0s 0s;
}
.c-hamburger--htx.is-active span::before {
  top: 0;
  transform: rotate(45deg);
  background: white;
}
.c-hamburger--htx.is-active span::after {
  bottom: 0;
  transform: rotate(-45deg);
  background: white;
}
.c-hamburger--htx.is-active span::before,
.c-hamburger--htx.is-active span::after {
  transition-delay: 0s, 0.2s;
}
//
// END HUMBURGER
//
//
// DROPDOWN
//
.hide {
  // display: none;
  // opacity: 0;
  // height: 0;
  // padding: 0;
  // transition: all 0.5s;
}
.dropmenu {
  display: flex;
  flex-direction: column;
  // align-items: center;
  // padding: 0.5em 0;
}



////////////////////////////////////////////////////////////
// LOGO BRAND
////////////////////////////////////////////////////////////
.logo {
  background-image: url('../assets/img/star.svg');
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  width: 44px;
  height: 44px;
}

////////////////////////////////////////////////////////////
// NAVIGATION MENU
////////////////////////////////////////////////////////////

.menu {
  display: none; // disable navigation on mobile
  width: 100%;
}

.menu-list {
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
}

@media (min-width: 64em) {
  .menu {
    width: auto;
  }
  .menu-list {
    width: auto;
  }
}

.menu-item {
  line-height: 1rem;
  flex:1 ;
}

.menu-link {
  padding: 1em 1em;
  display: block;
  font-size: 14px;
  color: orange;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  white-space: nowrap;
  transition: all 0.2s;
  &:hover {
    color: white;
    background: orange;
  }
  &:active {
    color: white;
    background: orange;
  }
}
.menu-link.nuxt-link-active, .menu-link.nuxt-link-active:hover {
  color: white;
  background: orange;
}

@media (min-width: 48em) {
  .menu {
    display: flex;
  }
  .menu-list {
    display: flex;
  }
}


//

.overlay {
  position: fixed;
  z-index: 2;
  background: orange;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transform: scale(0);
  transition: opacity 350ms, visibility .35s, transform .35s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &.open {
    opacity: .9;
    visibility: visible;
    transform: scale(1);
    height: 100%;

    li {
      animation: fadeInRight .5s ease forwards;
      animation-delay: .35s;

      &:nth-of-type(2) {
        animation-delay: .4s;
      }
      &:nth-of-type(3) {
        animation-delay: .45s;
      }
      &:nth-of-type(4) {
        animation-delay: .50s;
      }
      &:nth-of-type(5) {
        animation-delay: .55s;
      }
    }
  }
  nav {
    position: relative;
    height: 70%;
    min-height: 400px;
    // top: 50%;
    // transform: translateY(-50%);
    font-size: 3.157rem;
    // line-height: 4rem;
    font-family: 'Ubuntu', monospace;
    font-weight: 400;
    text-align: center;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0 auto;
    display: inline-block;
    position: relative;
    height: 100%;

    li {
      display: flex;
      flex-direction: column;
      height: calc(100% / 5);
      // min-height: 50px;
      position: relative;
      opacity: 0;

      a {
        display: inline-block;
        position: relative;
        color: white;
        text-decoration: none;
        overflow: hidden;
        margin: auto;

        &:hover:after,
         &:focus:after,
         &:active:after {
           width: 100%;
         }

        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0%;
          transform: translateX(-50%);
          height: 4px;
          background: white;
          transition: .15s;
        }
      }
    }
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    left: 20%;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}

@media (min-width: 48em) {
  .overlay {
    display: none;
  }
}
</style>
