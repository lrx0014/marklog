<template>
  <div id="headerNav">
    <div class="line"></div>
    <el-row>
      <el-col :span=3>
        <logo id="logo"></logo>
      </el-col>
      <el-col :span=21>
        <el-menu
          :default-active="defaultActive"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/writer">创作中心</el-menu-item>
          <el-menu-item index="/publisher">发表管理</el-menu-item>
          <el-menu-item index="/setting">系统设置</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: this.$route.path
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(this.$route.path)
    }
  }
};
</script>