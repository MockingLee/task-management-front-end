<template>
  <div class="">
    <el-row>
      <el-col :span="10"
              :offset="7">
        <el-tabs v-model="activeName">
          <el-tab-pane label="用户登录"
                       name="first">
            <el-col>
              <el-form :model="dynamicValidateForm"
                       label-width="100px"
                       ref="dynamicValidateForm">
                <el-form-item prop="email"
                              label="邮箱"
                              :rules="rules.email">
                  <el-input v-model="dynamicValidateForm.email"></el-input>
                </el-form-item>
                <el-form-item prop="password"
                              label="密码"
                              :rules="rules.password">
                  <el-input type="password"
                            v-model="dynamicValidateForm.password"></el-input>
                </el-form-item>
                <el-button type="primary"
                           @click="submitForm('dynamicValidateForm')">登录</el-button>
                <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
              </el-form>
            </el-col>
          </el-tab-pane>
          <el-tab-pane label="用户注册"
                       name="second">
            <Register></Register>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      dynamicValidateForm: {
        email: '',
        password: ''
      },
      activeName: '123',
      // 输入校验
      rules: {
        email: [{
          required: true,
          message: '请输入邮箱地址',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: '请输入正确的邮箱地址',
          trigger: 'blur'
        }
        ],
        password: {
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }
      }
    }
  },

  methods: {

  }
}
</script>
