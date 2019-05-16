<template>
<section>
  <el-container class="container">
    <!--左边-->
    <el-aside :width="collapsed? '65px' : '200px' ">
      <el-container>
        <el-header>
          <span class="menu-button" v-if="collapsed" @click.prevent="collapsed=!collapsed">
            <i class="fa fa-align-justify"></i>
          </span>
          <span v-else class="system-name">{{systemName}}</span>
        </el-header>
        <el-main>
          <el-menu :collapse="collapsed">
            <el-menu-item-group>
              <router-link to='/add'>
                <center><el-menu-item index="1-1">录入用户</el-menu-item></center>
              </router-link>  
              <router-link to='/index'>           
                <center><el-menu-item index="1-2">查询用户</el-menu-item></center>
              </router-link>  
            </el-menu-item-group>
          </el-menu>
        </el-main>
      </el-container>
    </el-aside>
    <!--内容-->
    <el-container>
      <!--页眉-->
      <el-header class="header">
        <el-row>
          
          <el-col :span="18" class="header-title">       
            
               <span v-if="collapsed" class="system-name">{{systemName}}</span>            
          </el-col>
          <el-col :span="15" :offset="15"><span class="system-name">{{userName}}</span><span v-on:click="logout"><i class="fa fa-sign-out"></i></span></el-col>
        </el-row>
      </el-header>
      <!--中间-->
      <el-main class="main">
        <hr>
        <router-view></router-view>
      </el-main>
  
       
      </el-main>
    </el-container>
  </el-container>
  

</section>
</template>

<script>
let data = () => {
  return {
    collapsed: false,
    systemName: '任务管理',
    userName: JSON.parse(localStorage.token).username , 
    filters: {},
    rows: []
    
  }
}

let handleAdd = function() {

}

let handleEdit = function(index, row) {
  console.log(index, row);
}

let handleDelete = function(index, row) {
  console.log(index, row);
}

let getRows = function() {
  this.rows = []
  this.rows.push({
    name: '王小虎',
    title: 'hhh',
    date: '2018-05-02',
    date2: '2018-07-04',
    process: '50%',
    content: 'hhhhhh'
  })
}
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
    getRows,
    logout() {
      console.log(localStorage)
      localStorage.removeItem('token')
      this.$router.push("/login");
    },
    home() {
      this.$router.push("/manage");
    },
  },
  mounted: function() {
    this.getRows()
  }
  
    
  

}

</script>

<style scoped="scoped"
  lang="scss">
$width: 100%;
$height: 100%;
$background-color: #0b0a3e;
$header-color: #fff;
$header-height: 60px;

.container {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    .el-aside {
        .el-header {
            line-height: $header-height;
            background-color: $background-color;
            color: $header-color;
            text-align: center;
        }
        .el-container {
            height: $height;
            .el-main {
                padding: 0;
            }
        }
    }

    .main {
        width: $width;
        height: $height;
    }

    .menu-button {
        width: 14px;
        cursor: pointer;
    }

    .userinfo-inner {
        cursor: pointer;
    }

    .el-menu {
        height: $height;
    }

    .header {
        background-color: $background-color;
        color: $header-color;
        text-align: center;
        line-height: $header-height;
        padding: 0;

        .header-title {
            text-align: left;
            span {
                padding: 0 20px;
            }
        }
    }

    .system-name {
        font-size: large;
        font-weight: bold;
    }
}
</style>