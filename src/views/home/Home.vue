<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">Family201</div>
    </nav-bar>
    <main-menu></main-menu>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";

import MainMenu from "@/components/content/mainMenu/MainMenu";

export default {
  name: "Home",
  components: {
    NavBar,
    MainMenu
  }
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
  /* 
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
</style>
