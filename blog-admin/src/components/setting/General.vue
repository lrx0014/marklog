<template>
  <div>
    <el-row>
      <h1>常规设置</h1>
    </el-row>
    <el-row>
      IDC备案号：
      <el-input placeholder="请输入备案号" v-model="input" clearable></el-input>
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
        input: ''
      }
    }
  }
</script>