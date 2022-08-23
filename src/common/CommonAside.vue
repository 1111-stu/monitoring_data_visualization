<template>
  <div>
    <el-menu default-active="$route.path" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"  active-text-color="#ffd04b" :collapse="isCollapse">
      <h3>{{isCollapse ? '后台' : '前端监控系统'}}</h3>
      <el-menu-item v-for="item in noChildren" :index="item.path" :key="item.path" @click="clickMenu(item)">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      <el-submenu v-for="item in hasChildren" :index="item.label" :key="item.label">
        <template>
          <i :class="'el-icon-'+item.icon"></i>
          <span slot="title">{{item.label}}</span>
        </template>
        <el-menu-item-group v-for="(subItem, subIndex) in item.children" :key="subItem.path">
          <el-menu-item @click="clickMenu(subItem)" :index="subIndex.toString()">
            <i :class="'el-icon-'+subItem.icon"></i>
            <span slot="title">{{subItem.label}}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    clickMenu(item) {
      this.$router.push(item.path);
      this.$store.commit("selectMenu", item);
    },
  },
  computed: {
    asyncMenu() {
      return this.$store.state.menu;
    },
    noChildren() {
      return this.asyncMenu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.asyncMenu.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.isCollapse;
    },
  },
};
</script>

<style lang='less' scoped>
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
.el-menu {
  height:800px;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>