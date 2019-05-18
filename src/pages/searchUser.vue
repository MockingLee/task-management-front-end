<template>
    <div>
      <el-input placeholder="请输入内容" v-model="input2">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
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
export default {
  data() {
    return {
      
      input2: '',
      
      select: ''
    }
  }
}
</script>