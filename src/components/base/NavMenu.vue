<template>
  <div class="navMenu">
    <!-- 一级菜单 -->
    <el-submenu v-for="navMenu in navMenus" :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name">
      <template slot="title">
        <i :class="navMenu.entity.icon"></i>
        <span> {{navMenu.entity.alias}}</span>
      </template>
      <!-- 二级菜单 -->
      <el-menu-item v-for="item in navMenu.childs" :key="item.entity.id" :data="item" :index="item.entity.name">
        <i :class="item.entity.icon"></i>
        <span slot="title">{{item.entity.alias}}</span>
      </el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  props: ["navMenus"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
</style>
