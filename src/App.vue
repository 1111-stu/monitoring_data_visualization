<template>
  <div>
    <h1>hahhahhhh</h1>
  </div>
</template>

<script>
import {roleList} from 'api/roleManagement/roleList'
  export default {
  data() {
    return {
    };
  },
  created() {
    this.getRoleList()
  },
  methods: {
    async getRoleList(){
      const res = await roleList()
      console.log(res)
    },
  },
}
</script>

<style lang='less' scoped>
</style>
