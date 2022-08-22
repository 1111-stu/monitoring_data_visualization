<template>
  <div class="common-table">
    <el-table :data="tableData" stripe>
      <el-table-column
        show-overflow-tooltip
        v-for="item in tableLabel"
        :key="item.label"
        :label="item.label"
        :width="item.width ? item.width : 125"
      >
        <!-- 这是自定义列模板的用法 -->
        <template slot-scope="scope">
          <div style="margin-left: 10px">{{ scope.row[item.prop] }}</div>
        </template>
      </el-table-column>
      <!-- 按钮列 -->
      <template>
        <el-table-column label="操作" min-width="100">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </template>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="100"
      :current-page.sync="config.page"
      @current-change="changePage(config.page)"
      >
    </el-pagination>
  </div>
</template>

<script>
import { Table, TableColumn, Button, Pagination, Progress } from "element-ui";
export default {
  name: "CommonTable",
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object,
  },
  components: {
    "el-table": Table,
    "el-table-column": TableColumn,
    "el-button": Button,
    "el-pagination": Pagination,
    "el-progress": Progress,
  },
  data() {
    return {};
  },
  methods: {
    handleEdit(row) {
      this.$emit("edit", row);
    },
    handleDelete(row) {
      this.$emit("del", row);
    },
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>

<style lang="less" scoped>
.common-table {
  height: 100%;
  background-color: #fff;
  position: relative;
  .pager {
    position: absolute;
    bottom: 0px;
    right: 20px;
  }
}
.name {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 90px;
    height: 45px;
  }
}
</style>