<template>
    <div>
      <header>
      <el-row :gutter="20">
          <el-col :span="4" :offset="2">
            <div class="grid-content">
              <p>@xiebo0707</p>
            </div>
          </el-col>
      </el-row>
      <el-row :gutter="20">
          <el-col :span="12" :offset="6">
            <div class="grid-content title">
              <h1>营养健康评分平台</h1>
            </div>
          </el-col>
      </el-row>
      <el-row :gutter="20">
          <el-col :span="12" :offset="6">
            <div class="grid-content title_s">
              <h2>Nutrition and Health Score</h2>
            </div>
          </el-col>
      </el-row>
      </header><!-- /header -->
      <main>
        <signin></signin>
      </main>

    </div>


</template>

<script>
import signin from '../components/signin.vue'
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {
    signin
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title{
    margin-top: 40px;
  }
  .title_s{
    margin-top: -30px;
  }
</style>
