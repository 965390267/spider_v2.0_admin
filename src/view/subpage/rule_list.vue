<template>
    <div class="rule">
        <div class="rule-title">爬取中的站点</div>
          <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="Date"
      prop="date">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="site">
    </el-table-column>
     <el-table-column
      label="dsf"
      prop="area">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页器 -->
  <el-pagination
  class="pagination"
  background
  layout="prev, pager, next"
  :total="1000">
</el-pagination>
  <!-- 分页器 -->
    </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          site: '王小虎',
          area: '上海市普陀区金沙江路 1518 弄',
          charset:'werewr'
        }],
        search: ''
      }
    },
    mounted(){
 this.getList()
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      getList(){
       this.$http.get('/getlist/rule_list').then(res=>{
         console.log(res);
         this.tableData=res.data
       })
      }
    },
  }
</script>
<style scoped>
.rule-title {
  position: relative;
  font-family: "Marck Script", cursive;
  letter-spacing: 1px;
  font-size: 24px;
  color: rgb(121, 121, 121);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
}
.pagination{
    display: flex;
    justify-content: center;
    margin-top: 40px;
}
</style>