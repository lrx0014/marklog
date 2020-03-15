<template>
  <div>
    <el-row>
      <el-col :span="3">
        <el-tree
          :data="data"
          node-key="id"
          default-expand-all
          @node-drag-start="handleDragStart"
          @node-drag-enter="handleDragEnter"
          @node-drag-leave="handleDragLeave"
          @node-drag-over="handleDragOver"
          @node-drag-end="handleDragEnd"
          @node-drop="handleDrop"
          draggable
          :allow-drop="allowDrop"
          :allow-drag="allowDrag"
        ></el-tree>
      </el-col>
      <el-col :span="21">
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
      </el-col>
    </el-row>
  </div>
</template>

<style>
.el-tree {
  height: auto;
}
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
      data: [
        {
          id: 1,
          label: "我的文章",
          children: [
            {
              id: 4,
              label: "技术类",
              children: [
                {
                  id: 9,
                  label: "技术博客1"
                },
                {
                  id: 10,
                  label: "技术博客2"
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: "我的页面",
          children: [
            {
              id: 5,
              label: "页面1"
            },
            {
              id: 6,
              label: "页面2"
            }
          ]
        },
        {
          id: 3,
          label: "草稿箱",
          children: [
            {
              id: 7,
              label: "草稿1"
            },
            {
              id: 8,
              label: "草稿分类2",
              children: [
                {
                  id: 11,
                  label: "草稿a"
                },
                {
                  id: 12,
                  label: "草稿b"
                },
                {
                  id: 13,
                  label: "草稿c"
                }
              ]
            }
          ]
        },
        {
          id: 4,
          label: "垃圾桶",
          children: [
            {
              id: 14,
              label: "垃圾文章1"
            },
            {
              id: 15,
              label: "垃圾文章2"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      content: "", // 输入的markdown
      html: "" // 及时转的html
    };
  },
  methods: {
    handleDragStart(node, ev) {
      console.log("drag start", node);
    },
    handleDragEnter(draggingNode, dropNode, ev) {
      console.log("tree drag enter: ", dropNode.label);
    },
    handleDragLeave(draggingNode, dropNode, ev) {
      console.log("tree drag leave: ", dropNode.label);
    },
    handleDragOver(draggingNode, dropNode, ev) {
      console.log("tree drag over: ", dropNode.label);
    },
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
      console.log("tree drag end: ", dropNode && dropNode.label, dropType);
    },
    handleDrop(draggingNode, dropNode, dropType, ev) {
      console.log("tree drop: ", dropNode.label, dropType);
    },
    allowDrop(draggingNode, dropNode, type) {
      if (dropNode.data.label === "二级 3-1") {
        return type !== "inner";
      } else {
        return true;
      }
    },
    allowDrag(draggingNode) {
      return draggingNode.data.label.indexOf("三级 3-2-2") === -1;
    },
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
  }
};
</script>