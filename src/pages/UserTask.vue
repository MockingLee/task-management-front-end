<template>
  <div>
    <main>

      <table>

        <thead>

          <tr>

            <el-table :data="rows"
                      style="width: 100%"
                      stripe
                      border
                      v-loading="loading">
              <el-table-column label="TID"
                               width="120"
                               align="center">
                <template slot-scope="scope">
                  <span size="medium">{{ scope.row.tid }}</span>
                </template>
              </el-table-column>
              <el-table-column label="标题"
                               width="120"
                               align="center">
                <template slot-scope="scope">
                  <span size="medium">{{ scope.row.title }}</span>
                </template>
              </el-table-column>
              <el-table-column label="描述"
                               width="500"
                               align="center">
                <template slot-scope="scope">
                  <span size="medium">{{ scope.row.content }}</span>
                </template>
              </el-table-column>
              <el-table-column label="进度"
                               width="100"
                               align="center">
                <template slot-scope="scope">
                  <span size="medium">{{ scope.row.process }}</span>
                </template>
              </el-table-column>
              <el-table-column label="录入时间"
                               width="150"
                               align="center">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column label="更新时间"
                               width="150"
                               align="center">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date2 }}</span>
                </template>
              </el-table-column>

              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button size="mini"
                             type="primary"
                             @click="handleEdit(scope.row)">编辑
                  </el-button>
                  <el-button size="mini"
                             type="primary"
                             @click="handleUpdate(scope.row)">更新
                  </el-button>
                  <el-button size="mini"
                             type="danger"
                             @click="handleDelete(scope.row)">删除</el-button>
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

    <el-button size="mini"
               type="primary"
               @click="add">添加
    </el-button>

    <el-dialog title="新建任务"
               :visible.sync="dialogFormVisible"
               v-loading="loading">
      <el-form :model="form"
               ref="form">

        <el-form-item label="标题"
                      :label-width="formLabelWidth">
          <el-input v-model="form.title"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述"
                      :label-width="formLabelWidth">
          <el-input v-model="form.content"
                    autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="submitNewTask(form)">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="信息修改"
               :visible.sync="editDialogFormVisible"
               v-loading="loading">
      <el-form :model="editForm"
               ref="form">
        <el-form-item label="tid"
                      :label-width="formLabelWidth">
          <el-input v-model="editForm.tid"
                    autocomplete="off"
                    :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="标题"
                      :label-width="formLabelWidth">
          <el-input v-model="editForm.title"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述"
                      :label-width="formLabelWidth">
          <el-input v-model="editForm.content"
                    autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer"
           class="dialog-footer">
        <el-button @click="editDialogFormVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="submitEdit(editForm)">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>

import api from '../axios'

export default {
  data () {
    return {
      editForm: [],
      form: [],
      formLabelWidth: '120px',
      dialogFormVisible: false,
      editDialogFormVisible: false,
      loading: false,
      rows: [],
      totalPage: 1, // 统共页数，默认为1
      currentPage: 1, //当前页数 ，默认为1
      pageSize: 5, // 每页显示数量           
      currentPageData: [], //当前页显示内容          
    };
  },
  mounted () {
    //this.getCurrentPageData()
    this.loadTasks(),
      this.getCurrentPageData(),
      // 计算一共有几页
      // this.getCurrentPageData();
      // this.totalPage = Math.ceil(this.data.length / this.pageSize);
      this.totalPage = Math.ceil(this.rows.length / this.pageSize);
    // 计算得0时设置为1
    this.totalPage = this.totalPage == 0 ? 1 : this.totalPage;


  },

  methods: {
    handleUpdate (data) {
      this.$prompt('更新进度', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^([0-9]\d?|100)$/,
        inputErrorMessage: '请输入0-100'
      }).then(({ value }) => {
        let opt = JSON.stringify({
          "info": JSON.parse(localStorage.token),
          "tid": data.tid,
          "msg": JSON.parse(JSON.stringify({
            "process": value
          }))
        })
        api.updateTask(opt)
        this.$message({
          type: 'success',
          message: 更新成功
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });
      });
    },
    submitEdit (data) {
      let opt = JSON.stringify({
        "info": JSON.parse(localStorage.token),
        "tid": data.tid,
        "msg": JSON.parse(JSON.stringify({
          "title": data.title,
          "content": data.content,
        }))
      })
      console.log(opt)
      api.editTask(opt).then(({
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
      console.log(data.tid)
      this.editForm = {
        tid: data.tid,
        title: data.title,
        content: data.content,
      }
      this.editDialogFormVisible = true

    },
    handleDelete (data) {
      console.log(data.tid)
      let opt = JSON.stringify({
          "info": JSON.parse(localStorage.token),
          "tid": data.tid,
        })
      api.delTask(opt).then(({data}) => {
        this.loading = false
        if (data.success) {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
        }else{
          this.$message({
            message: '删除失败',
            type: 'info'
          })
        }
      })
    },
    submitNewTask (data) {
      let opt = JSON.stringify({
        "info": JSON.parse(localStorage.token),
        "msg": JSON.parse(JSON.stringify({
          "title": data.title,
          "content": data.content,
        }))
      })
      console.log(opt)
      api.addTask(opt).then(({
        data
      }) => {
        if (data.success) {
          this.$message({
            message: '创建成功',
            type: 'success'
          });
          location.replace('/UserTask')
        }
      })
    },
    add () {
      this.dialogFormVisible = true
    },
    loadTasks () {
      this.rows = []
      this.loading = true
      let opt = JSON.parse(localStorage.token)
      if (opt) {
        api.getUserAllTasks(JSON.stringify({
          "info": opt
        })).then(({
          data
        }) => {
          if (data.success) {
            //console.log(data.msg)
            let arr = data.msg
            arr.forEach(element => {

              //console.log(element)
              if (element) {
                //console.log(element.task_id)
                this.rows.push({
                  tid: element.task_id,
                  title: element.title,
                  content: element.content,
                  process: element.process,
                  date: element.init_time,
                  date2: element.update_time
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


    //},
    // 设置当前页面数据，对数组操作的截取规则为[0~9],[10~20]...,
    // 当currentPage为1时，我们显示(0*pageSize+1)-1*pageSize，当currentPage为2时，我们显示(1*pageSize+1)-2*pageSize...
    getCurrentPageData () {
      let begin = (this.currentPage - 1) * this.pageSize;
      let end = this.currentPage * this.pageSize;
      this.currentPageData = this.rows.slice(
        begin,
        end
      );
    },
    //上一页
    prevPage () {
      console.log(this.currentPage);
      if (this.currentPage == 1) {
        return false;
      } else {
        this.currentPage--;
        this.getCurrentPageData();
      }
    },
    // 下一页
    nextPage () {
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
