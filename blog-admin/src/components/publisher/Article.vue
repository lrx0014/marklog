<template>
  <div>
    <h1>我发表的文章</h1>
    <el-table :data="tableData" style="width: 100%" height="250">
      <el-table-column fixed prop="pub_date" label="发表日期" width="150"></el-table-column>
      <el-table-column prop="name" label="标题" width="120"></el-table-column>
      <el-table-column prop="tags" label="标签" width="120"></el-table-column>
      <el-table-column prop="kind" label="分类" width="120"></el-table-column>
      <el-table-column prop="last_modify" label="最近更新" width="300"></el-table-column>
      <el-table-column prop="today_view" label="今日浏览量" width="120"></el-table-column>
      <el-table-column prop="total_view" label="总浏览量" width="120"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          pub_date: "2016-05-03",
          name: "如何写博客",
          tags: "博客",
          kind: "技术类博客",
          last_modify: "2016-05-03",
          today_view: 10,
          total_view: 1000
        },
        {
          pub_date: "2016-05-03",
          name: "如何写博客",
          tags: "博客",
          kind: "技术类博客",
          last_modify: "2016-05-03",
          today_view: 10,
          total_view: 1000
        },
        {
          pub_date: "2016-05-03",
          name: "如何写博客",
          tags: "博客",
          kind: "技术类博客",
          last_modify: "2016-05-03",
          today_view: 10,
          total_view: 1000
        },
        {
          pub_date: "2016-05-03",
          name: "如何写博客",
          tags: "博客",
          kind: "技术类博客",
          last_modify: "2016-05-03",
          today_view: 10,
          total_view: 1000
        },
        {
          pub_date: "2016-05-03",
          name: "如何写博客",
          tags: "博客",
          kind: "技术类博客",
          last_modify: "2016-05-03",
          today_view: 10,
          total_view: 1000
        },
        {
          pub_date: "2016-05-03",
          name: "如何写博客",
          tags: "博客",
          kind: "技术类博客",
          last_modify: "2016-05-03",
          today_view: 10,
          total_view: 1000
        },
        {
          pub_date: "2016-05-03",
          name: "如何写博客",
          tags: "博客",
          kind: "技术类博客",
          last_modify: "2016-05-03",
          today_view: 10,
          total_view: 1000
        },
        {
          pub_date: "2016-05-03",
          name: "如何写博客",
          tags: "博客",
          kind: "技术类博客",
          last_modify: "2016-05-03",
          today_view: 10,
          total_view: 1000
        },
        {
          pub_date: "2016-05-03",
          name: "如何写博客",
          tags: "博客",
          kind: "技术类博客",
          last_modify: "2016-05-03",
          today_view: 10,
          total_view: 1000
        }
      ]
    };
  }
};
</script>