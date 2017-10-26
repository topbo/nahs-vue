<template>
  <div>
    <HeaderBar :myindex='activeIndex2'></HeaderBar>
    <form action="" method="" accept-charset="utf-8">
      <input class="in" v-model="search" placeholder="输入关键字  例: 西红柿炒鸡蛋">
      <el-button @click="findfood(search)">提交</el-button>
    </form>
    <div class="result" v-if="ok" v-for="item in foodList">
      <h2>{{item.name}}</h2>
      <el-rate
          v-model="item.rate"
          disabled
          show-text
          text-color="#ff9900"
          text-template="{value}">
      </el-rate>
      <p>{{item.function}}</p>
      <img :src="item.img" alt="" class="foodimg">
    </div>
    <div v-else>
      <h1>未查询到关于此物品的相关信息</h1>
      <a href="">联系我们</a>
    </div>
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
export default {

  data () {
    return {
      activeIndex2: 'assess',
      search: '',
      foodList: [],
      ok: true
    }
  },
  components: {
    HeaderBar
  },
  methods: {

    findfood (name) {
      this.$http.get('/api/foodList/' + name).then(
      response => {
        this.foodList = [response.data]
      }).catch(
      response => { console.log(response) }
      )
    }
  }
}
</script>

<style lang="css" scoped>
input{
  margin: 0;
  padding: 0;
  outline: none;
}
form{
  height: 35px;
  width:auto;
  margin-top: 30px;
  text-align: center;
}
.result{
  text-align: center;
}
.in{
  height: 35px;
  padding-left: 10px;
  width: 250px;
  border: 1px solid #c4c4c4;
  border-radius:6px;
}
.foodimg{
  display: block;
  width: auto;
  height: 300px;
  margin: auto;

}
</style>
