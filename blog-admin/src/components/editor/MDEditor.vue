<template>
  <div id="editor">
    <mavon-editor v-model="content" ref="md" @change="change" style="min-height: 600px" />

    <el-button type="primary" @click="submit" round>保存</el-button>
  </div>
</template>


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