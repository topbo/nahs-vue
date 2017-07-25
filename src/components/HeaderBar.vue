<template>
  <div>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
      <el-menu-item index="1">营养健康评分平台</el-menu-item>
      <el-menu-item index="2">搜索评估</el-menu-item>
      <el-menu-item index="3">推荐饮食</el-menu-item>
      <a href="" class="user_info">XXXX</a>
    </el-menu>
  </div>
</template>

<script>
export default {

  name: 'HeaderBar',

  data () {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<style lang="css" scoped>
  .user_info{
    display: block;
    float: right;
    margin-top: 20px;
    margin-right: 60px;
    text-decoration: none;
    color:red;
  }
</style>
