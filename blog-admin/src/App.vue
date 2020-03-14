<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <router-view id="aside" name="aside" />
      </el-aside>
      <el-container direction="vertical">
          <header-nav />
        <router-view id="main" name="main" />
      </el-container>
    </el-container>
  </div>
</template>

<style>
.haeder-nav {
  text-align: center;
  line-height: 60px;
  height: 100%;
  width: 100%;
}

.el-footer {
  position: absolute;
  bottom: 0;
  height: 60px; /*脚部的高度*/
  background-color: rgb(224, 234, 245);
  color: #333;
  text-align: center;
  line-height: 60px;
  clear: both;
}

.el-aside {
  background-color: rgb(240, 241, 241);
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100%;
}

#main {
  padding-top: 20px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
