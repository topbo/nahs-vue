<template>
  <div class="headerbar">
    <el-menu  :default-active="itemidex" class="el-menu-demo" mode="horizontal" router>
      <el-menu-item index="home">营养健康评分平台</el-menu-item>
      <el-menu-item index="assess">搜索评估</el-menu-item>
      <el-menu-item index="recommend">推荐饮食</el-menu-item>
      <div class="rightbar">
        <a href="" class="user_info">xiebo</a>
        <a href="" class="quit" >退出</a>
      </div>

    </el-menu>
  </div>
</template>

<script>
export default {

  name: 'HeaderBar',
  data () {
    return {
      router: true,
      itemidex: this.$props.myindex
    }
  },
  props: ['myindex']
}
</script>

<style lang="less" scoped>
  .el-menu{
    padding-left: 20px;
  }
  .rightbar{
    float: right;
    padding-top: 15px;
    padding-right: 60px;
    a{

      margin-left: 10px;
      text-decoration: none;
      color:#333;
    }
  }

  .el-menu-item{
    font-size: 24px;
    }


</style>
