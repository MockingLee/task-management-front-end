<template>
<el-table :data="rows" style="width: 100%" stripe border>
    <el-table-column label="姓名" width="80" :show-overflow-tooltip="true" align="center">
      <template slot-scope="scope">
       <el-popover trigger="hover" placement="top">
         <p>姓名: {{ scope.row.name }}</p>
         <div slot="reference" class="name-wrapper">
           <span size="medium">{{ scope.row.name }}</span>
         </div>
       </el-popover>
     </template>
    </el-table-column>
    <el-table-column prop="title" label="标题" width="120" align="center" >
      <template slot-scope="scope">
      <span size="medium">{{ scope.row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column label="录入时间" width="150" align="center">
      <template slot-scope="scope">
       <i class="el-icon-time"></i>
       <span style="margin-left: 10px">{{ scope.row.date }}</span>
     </template>
    </el-table-column>
    <el-table-column label="更新时间" width="150" align="center">
      <template slot-scope="scope">
       <i class="el-icon-time"></i>
       <span style="margin-left: 10px">{{ scope.row.date2 }}</span>
     </template>
    </el-table-column>
    <el-table-column prop="process" label="进度" width="100" align="center" >
      <template slot-scope="scope">
      <span size="medium">{{ scope.row.process }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="content" label="描述" width="500" align="center" >
      <template slot-scope="scope">
        <span size="medium">{{ scope.row.content }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
       <!--
       <el-button
         size="mini"
         type="primary"
         @click="submit">编辑</el-button>
         -->
       <el-button
         size="mini"
         type="danger"
         @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
</el-table>

</template>

<script>

let productList = [];

    productList.push({
    name: '王小虎',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
    });
    productList.push({
    name: '王小虎2',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
    });
    productList.push({
    name: '王小虎',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
    });
    productList.push({
    name: '王小虎',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
    });
    productList.push({
    name: '王小虎',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
    });
    productList.push({
    name: '王小虎',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
    });
    productList.push({
    name: '王小虎',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
    });
    productList.push({
    name: '王小虎',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
    });
    productList.push({
    name: '王小虎',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
    });
    productList.push({
    name: '王小虎',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
    });
    productList.push({
    name: '王小虎4',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
    });



export default {
  data: data,
  methods: {
    //添加
    handleAdd,
    //修改
    handleEdit,
    //删除
    handleDelete,
    //获取分页
    getRows
  },
  mounted: function() {
    this.getRows()
  }

}
</script>
