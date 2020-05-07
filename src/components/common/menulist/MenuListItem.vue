<template>
  <el-row type="flex" class="row-bg home-menu" justify="center">
    <el-col :span="6">
      <div class="grid-content bg-purple-light">
        <el-button plain @click="itemClick()">
          <slot name="item-text"></slot>
        </el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  data() {
    return {
      // isActive: false
    };
  },
  computed: {},
  methods: {
    itemClick() {
      if (this.$route.path != this.path) {
        this.$router.replace(this.path);
      }
    }
  }
};
</script>

<style scoped>
.home-menu {
  margin-top: 2rem;
}
</style>