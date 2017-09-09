<template>
  <div class="siderbar">
    <el-col :span="4">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>饮食评分</template>
        <el-menu-item-group>

          <el-menu-item index="1-1">早餐</el-menu-item>
          <el-menu-item index="1-2">午餐</el-menu-item>
          <el-menu-item index="1-3">晚餐</el-menu-item>
          <el-menu-item index="1-4">综合评分</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>菜单评分</template>
        <el-menu-item-group>

          <el-menu-item index="2-1">早餐</el-menu-item>
          <el-menu-item index="2-2">午餐</el-menu-item>
          <el-menu-item index="2-3">晚餐</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3"><i class="el-icon-menu"></i>健康评分</el-menu-item>
      <el-menu-item index="4"><i class="el-icon-setting"></i>营养评分</el-menu-item>

      <el-menu-item index="5"><i class="el-icon-setting"></i>饮食指导</el-menu-item>
      <el-menu-item index="6"><i class="el-icon-setting"></i>最佳搭配</el-menu-item>
      <el-menu-item index="7"><i class="el-icon-setting"></i>健康知识</el-menu-item>
      <el-menu-item index="8"><i class="el-icon-setting"></i>关于我们</el-menu-item>
    </el-menu>
  </el-col>
  </div>
</template>

<script>
export default {

  name: 'SideBar',

  data () {
    return {

    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="css" scoped>
.siderbar{
  margin-top: 20px;
}
</style>
