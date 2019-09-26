<template>
  <aside id="sidebar">
    <div class="nav-collapse">
      <!-- sidebar menu start-->
      <el-menu
        :default-active="$route.fullPath"
        router
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        active-text-color="#68dff0"
        :collapse="isCollapse"
      >
         <p class="avator">
          <img src="@/assets/img/ui-sam.jpg" class="img-circle" width="60" />
        </p>


        <h5 class="username">{{username}}</h5>

        <el-menu-item index="/index/home">
          <i class="el-icon-menu"></i>
          <span slot="title">信 息 总 览</span>
        </el-menu-item>
        <el-menu-item index="/index/rule">
          <i class="iconfont icon-bi"></i>
          <span slot="title">&nbsp;&nbsp;&nbsp;爬 虫 录 入</span>
        </el-menu-item>
        <el-menu-item index="/index/list">
          <i class="el-icon-document"></i>
          <span slot="title">爬 虫 列 表 </span>
        </el-menu-item>
        <el-menu-item index="/index/rule_list">
          <i class="el-icon-document"></i>
          <span slot="title">爬 &nbsp;&nbsp;取&nbsp;&nbsp; 中</span>
        </el-menu-item>
        <el-menu-item index="/index/setting">
          <i class="el-icon-setting"></i>
          <span slot="title">设&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;置</span>
        </el-menu-item>
      </el-menu>
      <!-- sidebar menu end-->
    </div>
  </aside>
</template>
<script>
export default {
  data() {
    return {
      username: "Admin",
      isCollapse: false
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggle() {}
  },
  mounted() {

  }
};
</script>
<style scoped>
#sidebar {
  /* width: 200px; */
  height: 100%;
  box-shadow: 1px 0px 20px rgba(0, 0, 0, 0.08);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 180px;
  min-height: 400px;
}
.iconfont::before {
  font-size: 18px;
}
.avator {
  margin: 20px 0 0px;
  text-align: center;
}

.img-circle {
  border-radius: 50%;
  vertical-align: middle;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 5px 8px 0 rgba(0, 0, 0, 0.14),
    0 1px 14px 0 rgba(0, 0, 0, 0.12);
}
.username {
  text-align: center;
  letter-spacing: 3px;
  margin: 8px 0;
}
.el-menu-item {
  font-weight: 700;
}
</style>

