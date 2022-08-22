<template>
  <div>
    <h1>我是角色列表页</h1>
  </div>
</template>

<script>
import { roleList } from "api/roleManagement/roleList";
export default {
  data() {
    return {
      pageIndex: 3,
      pageSize: 2,
    };
  },
  created() {
    this.getRoleList();
  },
  methods: {
    async getRoleList() {
      const res = await roleList({
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
      });
      console.log(res);
    },
  },
};
</script>

<style lang='less' scoped>
</style>