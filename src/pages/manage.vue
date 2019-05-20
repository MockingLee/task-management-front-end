<template>
  <section>
    <el-container class="container">
      <!--左边-->
      <el-aside :width="collapsed? '65px' : '200px' ">
        <el-container>
          <el-header>
            <span class="menu-button"
                  v-if="collapsed"
                  @click.prevent="collapsed=!collapsed">
              <i class="fa fa-align-justify"></i>
            </span>
            <span v-else
                  class="system-name">{{systemName}}</span>
          </el-header>
          <el-main>
            <el-menu :collapse="collapsed">
              <el-menu-item-group>
                <router-link to='/add'>
                  <center>
                    <el-menu-item index="1-1">用户管理</el-menu-item>
                  </center>
                </router-link>
                <router-link to='/searchUser'>
                  <center>
                    <el-menu-item index="1-2">查询用户</el-menu-item>
                  </center>
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
            <el-col :span="18"
                    class="header-title">
              <span v-if="collapsed"
                    class="system-name">{{systemName}}</span>
            </el-col>
            <el-col :span="6"
                    :offset="18">
              <span v-on:click="home">
                <i class="fa fa-home"
                   aria-hidden="true"></i>
              </span>
              &emsp;

              <el-dropdown>
                <span class="el-dropdown-link">
                  {{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item disabled>UID : {{uid}}</el-dropdown-item>
                  <el-dropdown-item divided  v-on:click.native="logout"><span>
                      <i class="fa fa-sign-out">登出</i>
                    </span></el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>

            </el-col>
          </el-row>
        </el-header>
        <!--中间-->
        <el-main class="main">
          <hr>
          <router-view></router-view>
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
    userName: JSON.parse(localStorage.token).username,
    filters: {},
    rows: [],
    allUsers: [],
    uid: JSON.parse(localStorage.token).uid,

  }
}

let handleAdd = function () {

}

let handleEdit = function (index, row) {
  console.log(index, row);
}

let handleDelete = function (index, row) {
  console.log(index, row);
}
import api from '../axios'
export default {
  data: data,
  methods: {

    logout () {
      console.log(localStorage)
      localStorage.removeItem('token')
      this.$router.push("/login");
    },
    home () {
      this.$router.push("/manage");
    },


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

  .userName {
    color: turquoise;
  }
}
</style>