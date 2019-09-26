<template>
    <div class="rule">
        <div class="rule-title">爬取中的站点</div>
          <el-table
          class="setTable"
           v-loading="loading"
          stripe
    :data="tableData.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
    align="center"
      label="时间"
      prop="submittime">
    </el-table-column>
    <el-table-column
    align="center"
      label="标题"
      prop="title">
    </el-table-column>
     <el-table-column
     align="center"
      label="地址"
      prop="href">
    </el-table-column>
     <el-table-column
     align="center"
      label="来源"
      prop="address">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入标题关键字搜索"/>
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
 class="set-center"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
       :current-page.sync="currentPage"
      :page-size="5"
      layout=" prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  <!-- 分页器 -->
    </div>
</template>

<script>
import moment from 'moment'
  export default {
    data() {
      return {
        tableData: [],
        search: '',
        total:0,
        currentPage:1,
        loading:false
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage=val
           this.getList(val)
        console.log(`当前页: ${val}`);
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
         let id=  row.id
           this.$http.post('/deletelist/spider_list',{id:id}).then(res=>{
console.log(res);

           })
      },
        getList(page){
          this.loading=true;
       this.$http.post('/getlist/spider_list',{pageSize:6,currentPage:page||this.currentPage}).then(res=>{
           this.total=res.count;  
         this.tableData=res.data.filter((item)=>{
           item.submittime= moment(Number(item.submittime)).format('YYYY-MM-DD')
           item.title=item.title.length>40?item.title.replace(/(.{35})(.*)/,'$1...'):item.title
            item.address=item.address.length>40?item.address.replace(/(.{35})(.*)/,'$1...'):item.address
           return item
         })
         this.loading=false;
       })
      }
    },
    mounted(){
      this.getList(5)
    }
  }
</script>
<style scoped>
.rule{
      height: 100%;
    display: flex;
    flex-direction: column;
}
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
.setTable{
  flex: 1;
  overflow-y: auto;
}
.set-center{
  display: flex;
  justify-content: center;
}
.pagination{
    display: flex;
    justify-content: center;
    margin-top: 40px;
}
</style>