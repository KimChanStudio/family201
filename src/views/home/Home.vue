<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">Family201</div>
    </nav-bar>
    <el-row type="flex" class="row-bg home-menu" justify="center">
      <el-col :span="6">
        <div class="grid-content bg-purple-light">
          <el-button plain>点餐系统</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";

export default {
  name: "Home",
  components: {
    NavBar
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
.home-menu {
  margin-top: 2rem;
}
</style>
