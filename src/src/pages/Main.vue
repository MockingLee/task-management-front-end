<template>
<section>
  <!--页眉-->
  <el-header class="header">
    <el-row>         
        <span style="font-size:25px;font-family:courier"> 任务管理系统</span>
    </el-row>
  </el-header>
  <el-main>
    <el-form 
      :model="LoginForm" 
      ref="LoginForm" 
      :rules="rule"
      label-width="0"
      class="login-form">
      <h3>用户登录系统</h3>

      <el-form-item prop="username">
        <el-input 
          type="text" 
          v-model="LoginForm.username" 
          placeholder="username" >
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input 
          type="password" 
          v-model="LoginForm.password" 
          placeholder="password" >
        </el-input>
      </el-form-item>

      <el-form-item class="setBtn">
        <el-button 
          type="danger" 
          class="submitBtn"
          round
          @click.native.prevent="submit"
          :loading="logining">
          登录
        </el-button>
        <el-button 
          type="primary"
          class="resetBtn" 
          round
          @click.native.prevent="reset">
          重置
        </el-button>       
      </el-form-item>
    </el-form>
  </el-main>
</section>
</template>

<script>
export default {
  // ....
  data () {
    return {
      LoginForm: {
        username: '',
        password: ''
      },
      logining: false,
      rule: {
        username: [
          {
            required: true,
            max: 14,
            min: 7,
            message: '用户名长度为7-14位',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    // ...
    submit () {
      this.$refs.LoginForm.validate(valid => {
        if (valid) {
          this.logining = true
          console.log('开始请求后台数据，验证返回之类的操作！')
        } else {
          console.log('submit err')
        }
      })
    },
    reset () {
      this.$refs.LoginForm.resetFields()
    },
    toregin () {
      this.$router.push('/regin')
    }
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

.login-form {
  margin: 60px auto;
  width: 500px;
  height: 280px;
  background: #fff;
  box-shadow: 0 0 35px rgb(9, 28, 65);
  padding: 50px 50px 30px 50px;
  
}
.setBtn {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
}
.submitBtn {
  width: 100px;
  background:#0b0a3e;
  border: 0px;
}
.resetBtn {
  width: 100px;
  background:dimgray;
  border: 0px;
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


</style>