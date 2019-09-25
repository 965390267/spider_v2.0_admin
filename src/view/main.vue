<template>
  <div class='maincontainer'>
   <head-nav @change="toggle"></head-nav> 
   <div class="middle">
   <left-aside ref='changemove'></left-aside>
   <div class="subcontainer" >
 <router-view ></router-view>
   </div>
     
   </div>
  <ToTop></ToTop>
    <!-- <footer-nav></footer-nav> -->
    </div>  
   
</template>

<script>
import HeadNav from "@/components/header.vue";
import LeftAside from "@/components/aside.vue";
import ToTop from "@/components/toTop.vue";
import FooterNav from "@/components/footer.vue";
export default {
  components: {
    HeadNav,LeftAside,FooterNav,ToTop
  },
  name: "login",
  data() {
    return {
      docked: false,
      open: false,
      position: 'left',
       move: 210
    };
  },
  methods:{
    change() {
      if (this.move == 210) {
        this.move = 0;
      } else {
        this.move = 210;
      }
    },
toggle(){
this.open=!this.open;
// this.$refs.changemove.toggle()
// this.$refs.addwidth.change()
}
  },
  mounted() {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.maincontainer{
display: flex;
height: 100%;
flex-direction: column;
}
.middle{
  display: flex;
  flex-direction: row;
  flex: 1;
}
.subcontainer{
  flex: 1;
  overflow-y: auto;
  padding: 4px 18px 0 18px;
}
</style>
