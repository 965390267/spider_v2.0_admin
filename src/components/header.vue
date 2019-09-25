<template>
  <mu-appbar style="width: 100%;" color="primary">

    <mu-menu slot="right" open-on-hover>
      <mu-tooltip content="退出登录" placement="bottom">
        <mu-button flat>
          <div class="iconfont icon-guanji tooltips header-icon"></div>
        </mu-button>
      </mu-tooltip>
      <mu-list slot="content">
        <mu-list-item button>
          <mu-list-item-content>
            <mu-list-item-title>退出登录</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-content>
            <mu-list-item-title>Menu Item 2</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
    </mu-menu>
  </mu-appbar>
</template>
<script>
import theme from "@/theme";
export default {
  data() {
    return {
      isFullScreen: false,
      isCollapse: localStorage.getItem('isCollapse')||false,
      setIconColor:'#000'
    };
  },
  methods: {
 
    toggle(e) {
      this.isCollapse = !this.isCollapse;
      localStorage.setItem('isCollapse',this.isCollapse)
      this.bus.$emit("isCollapse", this.isCollapse);
    },
    logout() {
      this.$http.get("api/logout").then(res => {
        console.log(res);
        if (res.data.code == 200) {
          this.$router.push({ path: "/" });
        }
      });
    },
    caseIconColor(color){   
    switch(color){
      case 'light':this.setIconColor='#000'
      break;
      case 'dark':this.setIconColor='#fff'
      break;
      case 'green':this.setIconColor='#fff'
      break;
      case 'pink':this.setIconColor='#000'
      break;
      case 'white':this.setIconColor='#000'
      break;
    }
    }
  },
  mounted(){
    let color= localStorage.getItem("themecolor");
   this.caseIconColor(color);
   this.isCollapse ==  localStorage.getItem('isCollapse')||false
    this.bus.$emit("isCollapse",this.isCollapse);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 右上角列表展开与缩小按钮 */
.hamburger {
    padding-left: 14px;
    display: inline-block;
    height: 45px;
    vertical-align: middle;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
}
.hamburger-box {
    width: 30px;
    height: 24px;
    display: inline-block;
    position: relative;
}
.hamburger--elastic .hamburger-inner {
    top: 0;
    transition-duration: 0.4s;
    transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
    width: 25px;
    height: 3px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
}
.hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
}
.hamburger--elastic .hamburger-inner::before {
    top: 8px;
    transition: opacity 0.15s 0.4s ease;
}
.hamburger-inner::before {
    top: -10px;
}
.hamburger-inner::before, .hamburger-inner::after {
    content: "";
    display: block;
}
.hamburger--elastic .hamburger-inner::after {
    top: 16px;
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);  
}
.hamburger-inner::after {
    bottom: -10px;
}
.hamburger-inner::before, .hamburger-inner::after {
    content: "";
    display: block;
}
.hamburger--elastic.is-active .hamburger-inner {
    transform: translate3d(0, 8px, 0) rotate(135deg);
    transition-delay: 0.1s;
}
.hamburger--elastic.is-active .hamburger-inner::before {
    transition-delay: 0s;
    opacity: 0;
}
.hamburger--elastic.is-active .hamburger-inner::after {
    transform: translate3d(0, -16px, 0) rotate(-270deg);
    transition-delay: 0.1s;
}
/* 右上角列表展开与缩小按钮 */

/* 右上角网站logo */
.web-logo{
 display: inline-block;
 width: 60px;
 height: 50px;
   vertical-align: middle;
 /* background: url('') no-repeat;
 background-size: 100% 100%; */
}
/* 右上角网站logo */
.iconfont {
  width: 30px;
  margin-left: 20px;
  font-size: 20px;
  transition: all 0.5s;
}
/* 右上角网站logo */



</style>
