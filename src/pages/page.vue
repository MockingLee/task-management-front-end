<template>
<div>
<main>

            <table>

                <thead>

                    <tr>

                       <el-table :data="currentPageData" style="width: 100%" stripe border>
   
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
       <el-button
         size="mini"
         type="primary"
         @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
       <el-button
         size="mini"
         type="danger"
         @click="handleDelete(scope.$index, scope.row)">删除</el-button>        
      </template>  
    </el-table-column>

    
</el-table>

                    </tr>
 
                </thead>

                

            </table>

        </main>

  <footer>

            <button @click="prevPage()">

                上一页

            </button>

            <span>第{{currentPage}}页/共{{totalPage}}页</span>

            <button @click="nextPage()">

                下一页

            </button>

        </footer>

    
</div>
</template>

<script>
//let  data;
//let data = () => {
 // return {
    //filters: {},
   // rows: [],
    
//  }
//}

let handleAdd = function() {

}

let handleEdit = function(index, row) {
  console.log(index, row);
}

let handleDelete = function(index, row) {
  console.log(index, row);
}

let getRows = function()

{
  this.rows = []
  this.rows.push({
    name: '王小虎1',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
  })
  this.rows.push({
    name: '王小虎2',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
  })
  this.rows.push({
    name: '王小虎3',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
  })
  this.rows.push({
    name: '王小虎4',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
  })
  this.rows.push({
    name: '王小虎5',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
  })
  this.rows.push({
    name: '王小虎6',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
  })
  this.rows.push({
    name: '王小虎7',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
  })
  this.rows.push({
    name: '王小虎8',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
  })
  this.rows.push({
    name: '王小虎9',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
  })
  this.rows.push({
    name: '王小虎10',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
  })
  this.rows.push({
    name: '王小虎11',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
  })
  this.rows.push({
    name: '王小虎12',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
  })
  this.rows.push({
    name: '王小虎13',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
  })
  this.rows.push({
    name: '王小虎14',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
  })
}



export default{
    /*let data = () => {
  return {
    filters: {},
    rows: []
    
  }
}*/
    //data: data,
     data ()  {
        return {
         // data,
            //productList,//所有数据
           rows:[],          
            totalPage: 1, // 统共页数，默认为1
            currentPage: 1, //当前页数 ，默认为1
           pageSize: 5, // 每页显示数量           
            currentPageData: [], //当前页显示内容          
        };
    },  
    mounted (){
      //this.getCurrentPageData()
      this.getRows()
      this.getCurrentPageData(),
        // 计算一共有几页
        // this.getCurrentPageData();
       // this.totalPage = Math.ceil(this.data.length / this.pageSize);
        this.totalPage = Math.ceil(this.rows.length / this.pageSize);
        // 计算得0时设置为1
        this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;
        
           
     },    
    
     methods: {
            

//},
        // 设置当前页面数据，对数组操作的截取规则为[0~9],[10~20]...,
        // 当currentPage为1时，我们显示(0*pageSize+1)-1*pageSize，当currentPage为2时，我们显示(1*pageSize+1)-2*pageSize...
        getCurrentPageData() {
            let begin = (this.currentPage - 1) * this.pageSize;
            let end = this.currentPage * this.pageSize;
            this.currentPageData = this.rows.slice(
               begin,                  
              end
            );        
        },
        getRows,
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
        }
    },
  
}

    


</script>
