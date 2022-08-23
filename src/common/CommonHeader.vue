<template>
  <div>
    <div class="content">
      <div class="l-content">
        <el-button @click="handleMenu" plain icon="el-icon-menu" size="mini"></el-button>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="item in tags" :key="item.path" :to="{ path: item.path }">{{item.label}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="r-content">
        <el-dropdown trigger="click" size="mini">
          <span>
            <img class="user" :src="userImg">
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState} from "vuex";
export default {
  data() {
    return {
      userImg: require("../assets/user.png"),
    };
  },
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
  },
  computed: {
    ...mapState({
      tags: (state) => state.tabsList,
    }),
  },
};
</script>

<style lang='less' scoped>
.content {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-content {
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
/deep/ .el-breadcrumb__item {
  cursor: pointer;
  .el-breadcrumb__inner {
    font-weight: normal;
    &.is-link {
      color: #fff;
    }
    a {
      color: #fff;
    }
  }
  &:last-child {
    .el-breadcrumb__inner {
      color: #fff;
    }
  }
}
</style>