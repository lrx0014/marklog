<template>
  <div>
    <div id="logo">
      MarkLog
    </div>
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
  </div>
</template>

<style>
#logo {
  height: 60px;
  background-color: rgb(74, 82, 89);
}

.el-tree {
  height: auto;
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
        },
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
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
    }
  }
};
</script>