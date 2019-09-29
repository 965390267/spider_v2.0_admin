<template>
  <div class="messagewrap">
 
    <h3 class="title">爬取信息图表</h3>
      <div id="myChart"></div>
    <!-- <div class="main-middle">
      <div class="commetns">
          <div class="echart">
     
       
          </div>
        <ChinaMap></ChinaMap>
      </div>

      <div class="rightaside-wrap">

      </div>
    </div> -->
  </div>
</template>
<script>
// 引入echarts
import echarts from "echarts";
// import Card from "@/components/totalmessage/card";
// import CPU from "@/components/totalmessage/cpu_memory";
// import Comments from "@/components/totalmessage/comments";
// import Aside from "@/components/totalmessage/aside";
// import ChinaMap from "@/components/totalmessage/china_Map";
export default {
  components: {
    // Card,
    // CPU,
    // Comments,
    // Aside,
    // ChinaMap
  },
  data() {
    return {

    };
  },
  methods: {
    echartListData(){
         this.$http.post('/getlist/spider_list',{pageSize:100,currentPage:1}).then(res=>{
          let list=res.data
          let obj={}
          for (let index = 0; index < list.length; index++) {
            let date=new Date(Number(list[index].submittime))
            
            let key= date.getDate()
             key=Number(key)
            if(typeof key === 'number' && !isNaN(key)){
               key=String(key)
               key+='日'
               if(obj[key]){
               let value=obj[key]
               value++;
              obj[key]=value
             }else{
               obj[key]=1
             } 
            }
               
          }
  let myChart1 = echarts.init(document.getElementById("myChart"));
   
const option = {
    xAxis: {
        type: 'category',
        data: Object.keys(obj).reverse()
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data:  Object.values(obj).reverse(),
        type: 'line'
    }]
};
      myChart1.setOption(option);
       window.onresize = myChart1.resize;
          
       })
    }
  },
  mounted() {
    this.echartListData()
  }
};
</script>
<style lang="" scoped>

.messagewrap {
  position: relative;
  overflow: hidden;
}
.messagewrap .title {
  position: relative;
  font-family: "Marck Script", cursive;
  letter-spacing: 1px;
  font-size: 24px;
  color: rgb(121, 121, 121);
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
}
/* .messagewrap::after {
  content: "";
  height: 140px;
  background-image: linear-gradient(to right, #ec77ab 0%, #7873f5 100%);
  position: absolute;
  z-index: -1;
  width: 100%;
  top: 0;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
} */
#myChart {
height: 600px;
}

</style>

