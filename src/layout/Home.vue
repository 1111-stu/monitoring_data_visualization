<template>
  <div>
    <el-container>
      <el-aside>
        <common-aside></common-aside>
      </el-aside>
      <el-container class="mianBox">
        <el-header >
          <common-header></common-header>
        </el-header>
        <common-tag></common-tag>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonAside from "../common/CommonAside.vue";
import CommonTag from "../common/CommonTag.vue";
import CommonHeader from "../common/CommonHeader.vue"
export default {
  components: {
    CommonAside,
    CommonHeader,
    CommonTag,
  },
  data() {
    return {};
  },
  computed:{
    isCollapse(){
      return this.$store.isCollapse
    }
  }
};
</script>

<style lang="less" scoped>
*{
  margin: 0;
  padding: 0;
}
.el-header
{
  background-color: #333;
  width: auto;
}
.el-main
{
  width: auto;
  padding-top: 0;
}
</style>






