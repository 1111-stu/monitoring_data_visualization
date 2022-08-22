<template>
  <div class="content">
    <div class="login">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="form"
        label-position="left"
        size="small"
      >
      <h4>监控管理系统</h4>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input v-model="ruleForm.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-button type="primary" v-if="isregister" @click="register(ruleForm)"
          >注册</el-button
        >
        <el-button type="primary" @click="toLogin(ruleForm)" v-if="!isregister">登录</el-button>
        <div @click="toregister" v-if="!isregister" class="txt">
          没有账号？点击注册
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
const md5 = require("md5");
import { registration } from "../api/login.js";
import { Form, FormItem, Button, Input, Message } from "element-ui";
export default {
  components: {
    "el-form": Form,
    "el-form-item": FormItem,
    "el-input": Input,
    "el-button": Button,
  },
  data() {
    var checkPhone = (rule, value, callback) => {
      let re = /^1\d{10}$/;
      if (!re.test(value)) {
        return callback(new Error("请输入正确手机号码"));
      }
    };
    var checkUsername = (rule, value, callback) => {
      let re = /^[a-zA-Z]\w{1,15}$/;
      if (!re.test(value)) {
        return callback(new Error("用户名不能为空"));
      }
    };
    var checkEmail = (rule, value, callback) => {
      let re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
      if (!re.test(value)) {
        callback(new Error("请输入正确邮箱地址"));
      }
    };
    var checkPass = (rule, value, callback) => {
      if (value == "") {
        callback(new Error("密码不能为空"));
      }
    };
    return {
      ruleForm: {
        username: "",
        phone: "",
        email: "",
        password: "",
      },
      rules: {
        username: [{ validator: checkUsername, trigger: "blur" }],
        phone: [{ validator: checkPhone, trigger: "blur" }],
        email: [{ validator: checkEmail, trigger: "blur" }],
        password: [{ validator: checkPass, trigger: "blur" }],
      },
      isregister: false,
    };
  },
  methods: {
    async register(form) {
      form.password = md5(form.password);
      let res = await registration(form);
      console.log(res);
    },
    toLogin(form) {
      console.log(form);
      let token = "asdfghh";
      form.password = md5(form.password);
      if (form.username == "admin") {
        localStorage.setItem("token", token);
        this.$router.push({ path: "/home" });
      }
    },
    toregister() {
      this.isregister = true;
    },
  },
  mounted() {
    //  const str = "12345";
    // console.log(md5(str))
  },
};
</script>

<style lang="less">
.content {
  background: url(../assets/bg.jpg);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  width: 500px;
  height: 350px;
  padding: 40px;
  box-shadow: 10px 10px 10px -4px rgb(0, 0,0,0.4);
  background-color: aliceblue;
  .form {
    text-align: center;
    .txt {
      margin-top: 10px;
      font-size: 12px;
    }
  }
}
</style>