<template>
  <div class="manage">
    <el-dialog :title="operateType === 'add' ? '新增用户' : '更新用户'" :visible.sysnc="isShow">
      <CommonForm :formLabel="opertateFormLabel" :form="operateForm" :inline="true" ref="form" />
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="confirm">确定</el-button>
      </div>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="addUser">+新增</el-button>
      <CommonForm :formLabel="formLabel" :form="searchFrom" :inline="true" ref="form">
        <el-button type="primary" @click="getList(searchFrom.keyword)">搜索</el-button>
      </CommonForm>
    </div>
    <CommonTable :tableData="tableData" :tableLabel="tableLabel" :config="config" @changeUser="getList()" @edit="editUser" @del="delUser" @changePage="changePage"></CommonTable>
  </div>
</template>

<script>
import {
  getroleList,
  updateRole,
  createRole,
  deleteRole,
} from "../../api/role";
import { Dialog, Button, MessageBox } from "element-ui";
import CommonForm from "../../common/CommonForm.vue";
import CommonTable from "../../common/CommonTable.vue";
export default {
  name: "RoleList",
  components: {
    CommonForm,
    CommonTable,
    "el-dialog": Dialog,
    "el-button": Button,
  },
  data() {
    return {
      operateType: "add",
      isShow: false,
      // 用于渲染表单组件
      opertateFormLabel: [
        {
          model: "id",
          label: "id",
          type: "input",
        },
        {
          model: "roleName",
          label: "姓名",
          type: "input",
        },
        {
          model: "roleCode",
          label: "roleCode",
          type: "input",
        },
        {
          model: "isDefault",
          label: "isDefault",
          type: "input",
        },
        {
          model: "status",
          label: "status",
          type: "input",
        },
        {
          model: "createdAt",
          label: "创建时间",
          type: "input",
        },
        {
          model: "updatedAt",
          label: "更新时间",
          type: "input",
        },
      ],
      // 表单填入的数据
      operateForm: {
        id: "",
        roleName: "",
        roleCode: "",
        isDefault: "",
        status: "",
        createdAt: "",
        updatedAt: "",
      },
      // 用于渲染搜索按钮
      formLabel: [
        {
          model: "keyword",
          label: "",
          type: "input",
        },
      ],
      // 搜索表单填入的数据
      searchFrom: {
        keyword: "",
      },

      // table数据
      tableData: [],
      // 与tableData中的数据相对应  渲染数据
      tableLabel: [
        {
          prop: "id",
          label: "id",
        },
        {
          prop: "roleName",
          label: "姓名",
        },
        {
          prop: "roleCode",
          label: "roleCode",
        },
        {
          prop: "isDefault",
          label: "isDefault",
        },
        {
          prop: "status",
          label: "status",
        },
        {
          prop: "createdAt",
          label: "创建时间",
          width: 200,
        },
        {
          prop: "updatedAt",
          label: "更新时间",
          width: 200,
        },
      ],
      config: {
        pageIndex: 1,
        pageSize: 10,
      },
    };
  },
  methods: {
    // 确认后的回调
    confirm() {
      if (this.operateType === "edit") {
        // 发请求
        updateRole(this.operateForm.id, this.operateForm).then((res) => {
          console.log(res);
          this.isShow = false;
          this.getList();
        });
      } else {
        createRole(this.operateForm).then((res) => {
          console.log(res);
          this.isShow = false;
          this.getList();
        });
      }
    },
    // 新增用户
    addUser() {
      this.isShow = true;
      (this.operateType = "add"),
        (this.operateForm = {
          id: "",
          roleName: "",
          roleCode: "",
          isDefault: "",
          status: "",
          createdAt: "",
          updatedAt: "",
        });
    },
    // 获取角色列表
    async getList(name) {
      name ? (this.config.page = 1) : "";
      let res = await getroleList({
        roleName: name,
        pageIndex: this.config.pageIndex,
        pageSize: this.config.pageSize,
        status: 0,
      });
      console.log(res);
      this.tableData = res.data.records;
    },
    // 编辑用户列表
    editUser(row) {
      this.operateType = "edit";
      this.isShow = true;
      this.operateForm = row;
    },
    // 删除用户
    delUser(row) {
      MessageBox.confirm("此操作将永久删除文件，是否继续？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        const id = row.id;
        deleteRole(id).then((res) => {
          console.log(res);
          MessageBox({
            type: "success",
            message: "删除成功",
          });
          this.getList();
        });
      });
    },
    // 改变页码
    changePage(page) {
      this.config.pageIndex = page;
      this.getList();
    },
  },

  created() {
    this.getList();
  },
};
</script>

<style lang="less" scoped>
.manage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>