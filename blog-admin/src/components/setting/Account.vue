<template>
  <div>
    <el-row>
      <h1>更新管理员账户</h1>
    </el-row>
    <el-row>
      用户名：
      <el-input placeholder="请输入用户名" v-model="username" clearable></el-input>
    </el-row>
    <el-row>
      密码：
      <el-input placeholder="请输入密码" v-model="password" show-password clearable></el-input>
    </el-row>
    <el-row>
      确认密码：
      <el-input placeholder="请再输入一次密码" v-model="confirm" show-password clearable></el-input>
    </el-row>
  </div>
</template>

<style>
.el-input {
  width: 120px;
}
</style>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      confirm: ""
    };
  }
};
</script>