<template>
    <div class="rule">
        <div class="rule-title">爬取中的站点</div>
          <el-table
          class="setTable"
           v-loading="loading"
          stripe
    :data="tableData.filter(data => !search || data.area.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
 <el-table-column align="center" label="站点" prop="site"> </el-table-column>
  <el-table-column align="center" label="地区" prop="area"> </el-table-column>
  <el-table-column align="center" label="字符类型" prop="charset"> </el-table-column>
    <el-table-column align="center" label="选择器" prop="MainSelector"> </el-table-column>
   <el-table-column align="center" label="备注" prop="remarks"> </el-table-column>
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
 <!-- <el-pagination
 class="set-center"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
       :current-page.sync="currentPage"
      :page-size="5"
      layout=" prev, pager, next, jumper"
      :total="total">
    </el-pagination> -->
  <!-- 分页器 -->
   <mu-dialog title="编辑站点信息" width="800" :overlay-close='false' :open.sync="openmodule">
               <mu-form :model="checkedRow" class="mu-form" :label-position="labelPosition" label-width="100">
    <mu-form-item prop="input" label="爬取的站点">
      <mu-text-field v-model="checkedRow.site"></mu-text-field>
    </mu-form-item>
      <mu-form-item prop="input" label="所属地区">
      <mu-text-field v-model="checkedRow.area"></mu-text-field>
    </mu-form-item>
     <mu-form-item prop="input" label="字符集编码">{{checkedRow.charset}}
        <mu-switch v-model="checkedRow.switch" @change="switchChange()"></mu-switch>
      <!-- <mu-text-field v-model="checkedRow.charset"></mu-text-field> -->
    </mu-form-item>
     <mu-form-item prop="input" label="系统处理选择器">
      <mu-text-field v-model="checkedRow.MainSelector"></mu-text-field>
    </mu-form-item>
     <mu-form-item prop="input" label="备注">
      <mu-text-field v-model="checkedRow.remarks"></mu-text-field>
    </mu-form-item>
    <!-- <mu-form-item prop="switch" label="Switch">
      <mu-switch v-model="form.switch"></mu-switch>
    </mu-form-item> -->
  </mu-form>
    <div class="btn-group" slot="actions">
<mu-button  flat class="btn-bg-cancel" @click='cancel()'>取消</mu-button>
<mu-button  flat class="btn-bg-save" @click="save()">保存修改</mu-button>
    </div>
    
  </mu-dialog>
    </div>
</template>

<script>
import moment from 'moment'
  export default {
    data() {
      return {
           labelPosition: 'top',
        tableData: [],
        search: '',
        total:0,
        currentPage:1,
        loading:false,
        openmodule:false,
        checkedRow:{switch:false,},
        checkedRowIndex:0,
      }
    },
    methods: {
      switchChange(){

        if(this.checkedRow.switch){
  this.checkedRow.charset='gbk'
        }else{
  this.checkedRow.charset='utf'
        }
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage=val
           this.getList(val)
        console.log(`当前页: ${val}`);
      },
      handleEdit(index, row) {//编辑按钮
        console.log(index, row);
        this.openmodule=true;
        this.checkedRow=row;
        this.checkedRowIndex=index;
        if(this.checkedRow.charset=='utf'){
          this.checkedRow.switch=false
        }else{
           this.checkedRow.switch=true;
        }
      },
      cancel(){
        this.openmodule=false;
        this. getList(this.currentPage)
      },
      save(){
          let {site,area,charset,MainSelector,remarks}=this.checkedRow
          this.$http.post('/editlist/rule_list',{id:this.checkedRow.id,update:{site,area,charset,MainSelector,remarks}}).then(res=>{
            if(res.code==200){
                this.$message({
                message: "修改成功",
                type: "success"
              });
                this.checkedRow={}
                this.checkedRowIndex=0;
                this.openmodule=false;
            }else{
                this.$message({
                 message: "修改失败",
                 type: "success"
               });
            }
               
           })
      },
      handleDelete(index, row) {//删除按钮
      confirm('确定要删除？', '提示', {
        type: 'warning'
      }).then(({ result }) => {
        if (result) {
           let id=  row.id
             this.$http.post('/deletelist/rule_list',{id:id}).then(res=>{
              this.$message({
                message: "删除成功",
                type: "success"
              });
           this.getList( this.currentPage)
           })
        } else {
         this.$message({
                message: "取消删除",
                type: "info"
              });
        }
      });
         
      },
       getList(page){
          this.loading=true;
       this.$http.post('/getlist/rule_list',{pageSize:5,currentPage:page||this.currentPage}).then(res=>{
           this.total=res.count;  
         this.tableData=res.data.filter((item)=>{
           item.submittime= moment(Number(item.submittime)).format('YYYY-MM-DD')
           item.remarks=item.remarks||'~'
          //  item.title=item.title.length>40?item.title.replace(/(.{35})(.*)/,'$1...'):item.title
          //   item.address=item.address.length>40?item.address.replace(/(.{35})(.*)/,'$1...'):item.address
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
.btn-group{
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.btn-bg-cancel{
  background: #b3e5fc;
  color: #fff;
}
.btn-bg-save{
  background: rgb(92, 107, 192);color: #fff;
}
</style>