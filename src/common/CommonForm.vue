<template>
  <el-form ref="form" label-width="100px" :model="form" :inline="inline">
    <el-form-item
      v-for="item in formLabel"
      :key="item.label"
      :label="item.label"
    >
      <el-input
        v-if="item.type === 'input'"
        :placeholder="'请输入' + item.label"
        v-model="form[item.model]"
      >
      </el-input>
    </el-form-item>
    <el-form-item><slot></slot></el-form-item>
  </el-form>
</template>

<script>
import {
  Form,
  FormItem,
  Input,
  Switch,
  DatePicker,
  Select,
  Option,
} from "element-ui";

export default {
  name: "CommonFrom",
  props: {
    formLabel: Array,
    form: Object,
    inline: Boolean,
  },
  components: {
    "el-form": Form,
    "el-form-item": FormItem,
    "el-input": Input,
    "el-switch": Switch,
    "el-date-picker": DatePicker,
    "el-select": Select,
    "el-option": Option,
  },
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
</style>