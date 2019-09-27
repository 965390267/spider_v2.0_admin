<template>
    <div class="rule">
        <div class="rule-title">爬虫规则录入</div>
        <div class="input-wrap">
          <div class="left_rule">
        <h3 class="title">智能爬虫规则输入</h3>
        <div class="form">
          <mu-text-field v-model="automatic.site" label-float full-width label="爬取页面网址(必填)"></mu-text-field>
          <mu-text-field  v-model="automatic.MainSelector" label-float full-width label="主选择器(必填)"></mu-text-field>
          <mu-text-field  v-model="automatic.area" label-float full-width label="地区(不填默认为云南)"></mu-text-field>
          <mu-text-field  v-model="automatic.remarks" label-float full-width label="备注(可选)"></mu-text-field>
          <mu-radio v-model="automatic.charset" value="utf" label="UTF"></mu-radio>
          <mu-radio v-model="automatic.charset" value="gbk" label="GBK"></mu-radio>
          <div class="btn-group">
          <mu-button @click="automaticTest()" class="test-btn">验证</mu-button>
          <mu-button color="primary" @click="automaticSubmit()" class="submit-btn">提交爬虫规则</mu-button>
          </div>
         
        </div>
          </div>
          <div class="right_rule">
          <h3 class="title">高级爬虫规则输入<b class="note">#一般不需要</b></h3>
           <div class="form">
              <mu-text-field v-model="Manual.site" label-float full-width label="爬取页面网址(必填)"></mu-text-field>
               <mu-text-field  v-model="Manual.MainSelector" label-float full-width label="主选择器(必填)"></mu-text-field>
               <mu-text-field  v-model="Manual.TitleSelector" label-float full-width label="标题选择器(必填)"></mu-text-field>
               <mu-text-field  v-model="Manual.TimeSelector" label-float full-width label="时间选择器(必填)"></mu-text-field>
               <mu-text-field  v-model="Manual.area" label-float full-width label="地区(不填默认为云南)"></mu-text-field>
               <mu-text-field  v-model="Manual.remarks" label-float full-width label="备注(可选)"></mu-text-field>
               <mu-radio v-model="Manual.charset" value="utf" label="UTF"></mu-radio>
               <mu-radio v-model="Manual.charset" value="gbk" label="GBK"></mu-radio>
                <div class="btn-group">
          <mu-button @click="ManualTest()"  class="test-btn">验证</mu-button>
          <mu-button color="primary" @click="ManualSubmit()"  class="submit-btn">提交爬虫规则</mu-button>
          </div>
            </div>
          </div>

        </div>
        <!-- 弹出框 -->
  <mu-dialog title="验证爬取站点信息列表是否正确" width="800" :scrollable='true'  :open.sync="openmodule">    
       <ul>
         <li class="list" v-for='(item,index) in testList' :key='index'>
           <div class="list_title">{{item.title}}</div>
           <div class="time">{{item.time}}</div>
           <div class="href">{{item.href}}</div>
         </li>
       </ul>
  </mu-dialog>
    <!-- 弹出框 -->
    </div>
</template>
<script>
export default {
  data () {
    return {
      labelPosition: 'top',
      automatic:{//自动爬虫规则
       site:'',
       MainSelector:'',
       charset:'utf',
       area:'',
       remarks:''
      },
      Manual:{//手动爬虫规则
     site:'',
     MainSelector:'',
     TitleSelector:'',
     TimeSelector:'',
     area:'',
     charset:'utf',
     remarks:''
      },
      openmodule:false,
      testList:[]
    }
  },
  methods:{
    automaticTest(){

         let {site,MainSelector,charset,remarks}=this.automatic;
              if(!site||!MainSelector){
                this.$message({
                message: "缺少必填项",
                type: "error"
             })
             return;
              }
         this.$http.post('/spider/verification/spiderrule',{site,MainSelector,charset,remarks}).then(res=>{
        if(res.code==200){
              this.openmodule=true;
         this.testList=res.data;
           this.$message({
                message: "字符集编码需选择utf或gbk,默认为utf，如果验证出现乱码需切换另一个",
                type: "info"
             })
            }
           })
    },
    automaticSubmit(){
           
       let {site,MainSelector,charset,area,remarks}=this.automatic;
        if(!site||!MainSelector){
                this.$message({
                message: "缺少必填项",
                type: "error"
             })
             return;
              }
     
                 this.$message({
                message: "字符集编码需选择utf或gbk,默认为utf，如果验证出现乱码需切换另一个",
                type: "info"
             })
              
         confirm('确认爬虫规则获取到的数据验证无误？', '提示', {
        type: 'warning'
       }).then(({ result }) => {
        if (result) {
            this.$http.post('/spider/submit/spiderrule',{site,MainSelector,charset,area,remarks}).then(res=>{
           if(res.code==200){
             this.$message({
                message: "添加成功",
                type: "success"
             })
            this.automatic={//自动爬虫规则
       site:'',
       MainSelector:'',
       charset:'utf',
       area:'',
       remarks:''
      }
            }
           })
        } else {
          this.$message({
                message: "取消",
                type: "info"
              });
        }
      });
       
    },
    ManualTest(){
         let {site,MainSelector,TitleSelector,TimeSelector,area,charset,remarks}=this.Manual;
          if(!site||!MainSelector||!TitleSelector||!TimeSelector){
                this.$message({
                message: "缺少必填项",
                type: "error"
             })
             return;
              }
              
         this.$http.post('/spider/verification/custom/spiderrule',{site,MainSelector,TitleSelector,TimeSelector,area,charset,remarks}).then(res=>{
        if(res.code==200){
              this.openmodule=true;
             this.testList=res.data;
               this.$message({
                message: "字符集编码需选择utf或gbk,默认为utf，如果验证出现乱码需切换另一个",
                type: "info"
             })
            }
           })
    },
    ManualSubmit(){
       let  {site,MainSelector,TitleSelector,TimeSelector,area,charset,remarks}=this.Manual;
        if(!site||!MainSelector||!TitleSelector||!TimeSelector){
                this.$message({
                message: "缺少必填项",
                type: "error"
             })
             return;
              }
        
         confirm('确认爬虫规则获取到的数据验证无误？', '提示', {
        type: 'warning'
       }).then(({ result }) => {
        if (result) {
            this.$http.post('/spider/submit/custom/spiderrule',{site,MainSelector,TitleSelector,TimeSelector,area,charset,remarks}).then(res=>{
           if(res.code==200){
             this.$message({
                message: "添加成功",
                type: "success"
             })
             this.Manual={//手动爬虫规则
     site:'',
     MainSelector:'',
     TitleSelector:'',
     TimeSelector:'',
     area:'',
     charset:'utf',
     remarks:''
      }
            }
           })
        } else {
          this.$message({
                message: "取消",
                type: "info"
              });
        }
      });
    }
  }
};
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
.input-wrap{
  display: flex;
  flex-direction: row;
}
.note{
  color: red;
  font-size: 12px;
}
.left_rule,.right_rule{
  flex: 1;
}
.title{
  text-align: center;
  padding-top: 20px;
  font-size: 18px;
}
.mu-form{
    width: 80%;
    margin: 0 auto;
}
.form{
   width: 80%;
    margin: 0 auto;
}
.list{
      border-bottom: 1px solid #eee;
    padding: 10px 0;
    margin: 8px 0;
}
.list_title{
  font-size: 16px;
  color: #555;
}
.time{
  color: #ffa726;
  font-size: 14px;
}
.test-btn{
 background: #ffa726;
}
.submit-btn{
background: #42a5f5;
}
.btn-group{
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-around;
}
</style>