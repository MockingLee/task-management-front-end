<template>
  <div>
    <el-input placeholder="请输入uid"
              v-model="input2">
      <el-button slot="append"
                 icon="el-icon-search"
                 v-on:click="searchUser"></el-button>
      <hr>
    </el-input>
    <hr>
    <el-table :data="rows"
              style="width: 100%"
              stripe
              border>
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

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini"
                     type="primary"
                     @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini"
                     type="danger"
                     @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="信息修改"
               :visible.sync="dialogFormVisible"
               v-loading="loading">
      <el-form :model="form"
               ref="form">
        <el-form-item label="UID"
                      :label-width="formLabelWidth">
          <el-input v-model="form.uid"
                    autocomplete="off"
                    :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="姓名"
                      :label-width="formLabelWidth">
          <el-input v-model="form.name"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="毕业学校"
                      :label-width="formLabelWidth">
          <el-input v-model="form.school"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="专业"
                      :label-width="formLabelWidth">
          <el-input v-model="form.profession"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话"
                      :label-width="formLabelWidth">
          <el-input v-model="form.phone"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别"
                      :label-width="formLabelWidth">
          <el-input v-model="form.sex"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="出生"
                      :label-width="formLabelWidth">
          <el-date-picker v-model="form.birth"
                          align="right"
                          type="date"
                          placeholder="选择日期"
                          :picker-options="pickerOptions">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="submitEdit(form)">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>
<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
<script>
import api from '../axios'
export default {
  data () {
    return {
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      dialogFormVisible: false,
      form: {
        name: "",
        school: "",
        profession: "",
        phone: "",
        sex: "",
        birth: "",
      },
      formLabelWidth: '120px',

      input2: '',
      rows: [],
      loading: false,
      rules: {
        input2: [
          {
            required: true,
            max: 14,
            min: 3,
            message: '用户名长度为7-14位',
            trigger: 'blur'
          }
        ],
      },
      gridData: []
    }
  },

  methods: {
    submitEdit (data) {
      this.loading = true
      console.log(data)
      let opt = JSON.stringify({
        "info": JSON.parse(localStorage.token),
        "uid": data.uid,
        "msg": JSON.parse(JSON.stringify({
          "name": data.name,
          "school": data.school,
          "profession": data.profession,
          "phone": data.phone,
          "sex": data.sex,
          "birth": data.birth,
          "uid": data.uid
        }))
      })
      console.log(opt)
      api.editInfo(opt).then(({
        data
      }) => {
        console.log(data)
        if (data.success) {
          this.loading = false
          this.$message({
            message: '修改成功',
            type: 'success'
          });
        }
      })
    },
    handleEdit (data) {
      console.log(data)
      this.form = {
        uid: data.uid,
        name: data.name,
        school: data.school,
        profession: data.profession,
        phone: data.phone,
        sex: data.sex,
        birth: data.birth
      }
      this.dialogFormVisible = true
    },
    handleDelete (data) {
      let opt = JSON.stringify({
        "info": JSON.parse(localStorage.token),
        "msg": JSON.parse(JSON.stringify({
          "uid": data.uid
        }))
      })
      api.delUser(opt).then(({
        data
      }) => {
        if (data.success) {
          this.$message({
            type: "success",
            message: "删除成功"
          })
        }
      })
    },
    searchUser () {
      let opt = JSON.stringify({
        "info": JSON.parse(localStorage.token),
        "uid": this.input2
      })
      console.log(opt)
      api.getUser(opt).then(({
        data
      }) => {
        if (data.success) {
          this.rows = []
          let arr = data.msg
          arr.forEach(element => {
            console.log(element)
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

        }
      })
    }
  }
}
</script>