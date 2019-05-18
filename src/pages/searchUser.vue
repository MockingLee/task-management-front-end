<template>
    <div>
      <el-input placeholder="请输入uid" v-model="input2">
        <el-button slot="append" icon="el-icon-search"></el-button>
<hr>
      </el-input>
      <hr>
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