<template>
  <div id="editor">
    <el-container direction="horizontal">
      <div id="tips">
        <font size="5">撰写新文章</font>
      </div>
      <div id="btns">
        <el-button type="primary" @click="submit" id="save-btn" round>保存为草稿</el-button>
        <el-button type="warning" @click="submit" id="publish-btn" round>立即发表</el-button>
      </div>
    </el-container>
    <mavon-editor v-model="content" ref="md" @change="change" style="min-height: 600px" />
  </div>
</template>

<style>
#tips {
  margin-left: 10px;
  width: 100%;
}
#btns {
  width: 100%;
  text-align: right;
  margin: 0px auto 0px auto;
  margin-bottom: 10px;
}
</style>

<script>
export default {
  data() {
    return {
      content: "", // 输入的markdown
      html: "" // 及时转的html
    };
  },
  methods: {
    // 所有操作都会被解析重新渲染
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render;
    },
    // 提交
    submit() {
      console.log(this.content);
      console.log(this.html);
    }
  },
  mounted() {}
};
</script>