<template>
  <div>
    <div class="tabs">
      <el-tag v-for="(tag, index) in tags" :key="tag.path" :closable="tag.path !== '/home'" :effect="$route.path === tag.path ? 'dark' : 'plain'" @click="changeMenu(tag)" @close="handleClose(tag, index)" size="small">
        {{ tag.label }}
      </el-tag>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapMutations({
      close: "closeTag",
    }),
    changeMenu(item) {
      this.$router.push(item.path);
    },
    handleClose(tag, index) {
      const length = this.tags.length - 1;
      this.close(tag);
      if (tag.path !== this.$route.path) {
        return;
      }
      if (index === length) {
        this.$router.push(this.tags[index - 1].path);
      } else {
        this.$router.push(this.tags[index].path);
      }
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
.tabs {
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>