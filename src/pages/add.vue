<template>
<section>
<el-table :data="rows" style="width: 100%" stripe border>
    <el-table-column label="姓名" width="80" :show-overflow-tooltip="true" align="center">
      <template slot-scope="scope">
       <span size="medium">{{ scope.row.name }}</span>      
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
    <el-table-column prop="content" label="描述" align="center" >
      <template slot-scope="scope">
        <span size="medium">{{ scope.row.content }}</span>
      </template>
    </el-table-column>
    
</el-table>
<br>
<el-button
    size="mini"
    type="primary"
    @click="add">添加
</el-button>

</section>
</template>
<script>

let data = () => {
  return {
    filters: {},
    rows: [],
    
  }
}

let getRows = function() {
  this.rows = []
  this.rows.push({
    name: '',
    title: '',
    date: '',
    date2: '',
    process: '',
    content: ''
  })
}

export default {
  data: data,
  methods: {
    //获取分页
    getRows,
    add() {
        this.rows = []
        this.$prompt('请输入姓名', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[0-9a-zA-Z]{3,14}/,
          inputErrorMessage: '请输入3-14数字或字母'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '姓名为: ' + value,
            
          });
          this.rows.push({
            name: value,
            title: '',
            date: '',
            date2: '',
            process: '',
            content: ''
         })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
 
    },
    
    
  },
  mounted: function() {
    this.getRows()
    this.getRows1()
  }

}
</script>
