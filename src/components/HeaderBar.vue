<template>
  <div>
    <el-menu  class="el-menu-demo" mode="horizontal" >
      <el-menu-item ><router-link :to="{path:'home'}">营养健康评分平台</router-link></el-menu-item>
      <el-menu-item ><router-link :to="{path:'assess'}">搜索评估</router-link></el-menu-item>
      <el-menu-item >推荐饮食</el-menu-item>
      <a href="" class="user_info">XXXX</a>
    </el-menu>
  </div>
</template>

<script>
export default {

  name: 'HeaderBar',

  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
  .user_info{
    display: block;
    float: right;
    margin-top: 20px;
    margin-right: 60px;
    text-decoration: none;
    color:red;
  }
  .el-menu-item{
    font-size: 24px;
    a{
      text-decoration:none;
    }
  }
  .el-menu-item:nth-child(2){
    font-size: 18px;
  }
  .el-menu-item:nth-child(3 ){
    font-size: 18px;
  }
</style>
