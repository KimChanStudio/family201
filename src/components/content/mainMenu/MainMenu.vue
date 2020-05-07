<template>
  <div class="main-menu">
    <menu-list>
      <menu-list-item path="/meal">
        <div slot="item-text">点餐系统</div>
      </menu-list-item>
    </menu-list>
  </div>
</template>

<script>
import MenuList from "@/components/common/menulist/MenuList";
import MenuListItem from "@/components/common/menulist/MenuListItem";

export default {
  name: "MainMenu",
  components: {
    MenuList,
    MenuListItem
  }
};
</script>

<style>
</style>