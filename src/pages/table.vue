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
    <el-table-column prop="content" label="描述" width="400" align="center" >
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
         @click="open">删除</el-button>
      </template>
    </el-table-column>
</el-table>
<!--底部-->
  <el-col :span="24" class="toolbar">
    <footer>
            <button @click="prevPage()">
                上一页
            </button>
            <span>第{{currentPage}}页/共{{totalPage}}页</span>
            <button @click="nextPage()">
                下一页
            </button>
        </footer>
  </el-col>
</section>
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
  data() {
        return {
            productList, //所有数据
            totalPage: 1, // 统共页数，默认为1
            currentPage: 1, //当前页数 ，默认为1
            pageSize: 10, // 每页显示数量
            currentPageData: [], //当前页显示内容
            rows: []
        };
    },
  mounted: function() {
    this.getRows(),
    this.totalPage = Math.ceil(this.productList.length / this.pageSize);
    // 计算得0时设置为1
    this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
    this.getCurrentPageData();
  },
  methods: {
    // 设置当前页面数据，对数组操作的截取规则为[0~9],[10~20]...,
    // 当currentPage为1时，我们显示(0*pageSize+1)-1*pageSize，当currentPage为2时，我们显示(1*pageSize+1)-2*pageSize...
     getRows () {
       let begin = (this.currentPage - 1) * this.pageSize;
       let end = this.currentPage * this.pageSize;
       this.rows = this.productList.slice(begin,end);
       
     },
     //上一页
     prevPage() {
        console.log(this.currentPage);
        if (this.currentPage == 1) {
            return false;
      } else {
            this.currentPage--;
            this.getCurrentPageData();
     }
  },
 // 下一页
     nextPage() {
     if (this.currentPage == this.totalPage) {
        return false;
     } else {
     this.currentPage++;
     this.getCurrentPageData();
    }
  },
  open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      
    /*submit(){
       this.$prompt('请输入邮箱', '编辑', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
*/
    }

}
  
}

</script>
