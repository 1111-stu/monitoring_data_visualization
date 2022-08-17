<template>
  <div>
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <div class="left">
          header预留区域
        </div>
        <div class="right">
        </div>
      </el-header>
      <el-container>
        <!-- 左边侧边栏 -->
        <el-aside :width="isCollapse?'64px':'200px'" style="background-color:rgb(238, 241, 246)">
          <p class="title">前端监控系统</p>
          <!-- 切换菜单的折叠和显示 -->
          <div class="taggle-class" @click="isCollapse =!isCollapse">|||</div>
          <el-menu background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :default-active="activeIndex" unique-opened3 router>
            <NavMenu :navMenus="menuData"></NavMenu>
          </el-menu>
        </el-aside>
        <el-main>
          <el-header>
            组件缓存标签预留插槽
          </el-header>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from "components/base/NavMenu.vue";
export default {
  components: {
    NavMenu,
  },
  data() {
    return {
      //是否折叠左侧的菜单
      isCollapse: false,
      activeIndex: "aa",
      //菜单路由数据
      menuData: [
        {
          //一级菜单
          entity: {
            id: 1,
            name: "systemManage",
            icon: "el-icon-s-tools",
            alias: "角色管理",
          },
          //二级
          childs: [
            {
              entity: {
                id: 10,
                name: "/roleList",
                icon: "el-icon-user-solid",
                alias: "角色列表",
                value: { path: "/roleList" },
              },
            },
          ],
        },

        {
          //一级菜单
          entity: {
            id: 2,
            name: "systemManage",
            icon: "el-icon-menu",
            alias: "用户管理",
          },
          //二级
          childs: [
            {
              entity: {
                id: 20,
                name: "/usersList",
                icon: "el-icon-s-custom",
                alias: "用户列表",
                value: { path: "/usersList" },
              },
            },
          ],
        },

        {
          //一级菜单
          entity: {
            id: 3,
            name: "systemManage",
            icon: "el-icon-message",
            alias: "监控数据采集",
          },
          //二级
          childs: [
            {
              entity: {
                id: 30,
                name: "/dataCollection",
                icon: "el-icon-loading",
                alias: "数据展示",
                value: { path: "/dataCollection" },
              },
            },
          ],
        },

        {
          //一级菜单
          entity: {
            id: 4,
            name: "systemManage",
            icon: "el-icon-s-claim",
            alias: "项目管理",
          },
          //二级
          childs: [
            {
              entity: {
                id: 40,
                name: "/projectList",
                icon: "el-icon-s-order",
                alias: "项目列表",
                value: { path: "/projectList" },
              },
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
}
.el-container {
  height: 100%;
  .el-header {
    height: 50px;
    background-color: #63666c;
    display: flex;
  }
  .title {
    font-size: 25px;
    height: 35px;
    text-align: center;
    vertical-align: center;
    color: #ffff;
    background-color: #545c64;
  }
  .taggle-class {
    text-align: center;
    color: #fff;
    background-color: #545c64;
  }
  .el-menu {
    height: 500px;
    background-color: #545c64;
  }
  .el-main{
    .el-header{
      background-color: #fff;
    }
   background:#eaedf1;
}
}
</style>






