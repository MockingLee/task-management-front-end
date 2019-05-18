<template>
  <section>
    <el-table :data="rows"
              style="width: 100%"
              stripe
              border
              v-loading="loading">
      <el-table-column label="uid"
                       width="80"
                       :show-overflow-tooltip="true"
                       align="center">
        <template slot-scope="scope">
          <span size="medium">{{ scope.row.uid }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名"
                       width="80"
                       :show-overflow-tooltip="true"
                       align="center">
        <template slot-scope="scope">
          <span size="medium">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="school"
                       label="毕业院校"
                       width="120"
                       align="center">
        <template slot-scope="scope">
          <span size="medium">{{ scope.row.school }}</span>
        </template>
      </el-table-column>
      <el-table-column label="专业"
                       width="150"
                       align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.profession }}</span>
        </template>
      </el-table-column>
      <el-table-column label="电话"
                       width="150"
                       align="center">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.phone }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="sex"
                       label="性别"
                       width="100"
                       align="center">
        <template slot-scope="scope">
          <span size="medium">{{ scope.row.sex }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="birth"
                       label="出生日期"
                       align="center">
        <template slot-scope="scope">
          <span size="medium">{{ scope.row.birth }}</span>
        </template>
      </el-table-column>

    </el-table>
    <br>
    <el-button size="mini"
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
    loading: true

  }
}

import api from '../axios'
export default {
  data: data,
  methods: {
    //获取分页

    loadUsers () {
      this.rows = []
      this.loading = true
      let opt = JSON.parse(localStorage.token)
      if (opt) {
        api.getUsers(JSON.stringify({
          "info": opt
        })).then(({
          data
        }) => {
          if (data.success) {
            console.log(data.msg)
            let arr = data.msg
            arr.forEach(element => {
              //console.log(element)
              if (element) {
                this.rows.push({
                  uid: element.uid,
                  name: element.name,
                  school: element.school,
                  profession: element.profession,
                  phone: element.phone,
                  sex: element.sex,
                  birth: element.birth
                })
              } else {
                this.rows.push({
                  uid: "暂无",
                  name: "暂无",
                  school: "暂无",
                  profession: "暂无",
                  phone: "暂无",
                  sex: "暂无",
                  birth: "暂无"
                })
              }


            });
            setTimeout(() => {
              this.loading = false;
            }, 2000);
          }


        })

      }
    },

    add () {
      //this.rows = []
      this.$prompt('请输入username', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[0-9a-zA-Z]{3,14}/,
        inputErrorMessage: '请输入3-14数字或字母'
      }).then(({ value }) => {
        console.log(value)
        let opt = JSON.parse(localStorage.token)
        api.addUser(JSON.stringify({
          "info": opt,
          "msg": JSON.parse(JSON.stringify({
            "username": value,
            "weight": 0,
          }))
        })).then(({
          data
        }) => {
          console.log(data)
          if (data.success) {
            this.$alert('初始密码: ' + data.initPass, '创建成功', {
              confirmButtonText: '确定',
              callback: action => {
                this.loadUsers()
              }
            });
          }
        })

        this.$message({
          type: 'success',
          message: '姓名为: ' + value,
        });

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    },


  },
  mounted: function () {
    this.loadUsers()

  }

}
</script>
