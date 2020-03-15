<template>
  <div>
    <el-row>
      <el-col :span="3">
        <el-menu
          :default-active="defaultActive"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <el-menu-item index="/setting/general">
            <i class="el-icon-menu"></i>
            <span slot="title">常规</span>
          </el-menu-item>
          <el-menu-item index="/setting/account">
            <i class="el-icon-document"></i>
            <span slot="title">账户</span>
          </el-menu-item>
          <el-menu-item index="/setting/backup" disabled>
            <i class="el-icon-setting"></i>
            <span slot="title">备份</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive: this.$route.path
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>