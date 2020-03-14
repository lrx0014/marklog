<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <router-view name="aside" />
      </el-aside>
      <el-container>
        <header-nav />
        <el-main>
          <router-view name="main" />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style>
.haeder-nav {
  text-align: center;
  line-height: 60px;
  height: auto;
  width: auto;
}

.el-footer {
  background-color: rgb(224, 234, 245);
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: rgb(240, 241, 241);
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
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
