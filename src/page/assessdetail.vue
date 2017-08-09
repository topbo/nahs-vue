<template>
  <div>
    <HeaderBar :myindex='activeIndex2'></HeaderBar>
    <form action="" method="" accept-charset="utf-8">
      <input class="in" v-model="search" placeholder="输入关键字">
      <input class="out" type="button" name="" value="提交" @click="findfood(search)">
    </form>
    <div class="result" v-for="item in foodList">
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
  </div>
</template>

<script>
import HeaderBar from '../components/HeaderBar'
export default {

  data () {
    return {
      activeIndex2: 'assess',
      search: '',
      foodList: []
    }
  },
  components: {
    HeaderBar
  },
  mounted () {
    let name = this.$route.params.name
    console.log(name)

    this.$http.get('/api/foodList/' + name).then(
      response => { this.foodList = [response.body] },
      response => console.log(response)
    )
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
}
.in{
  height: 35px;
  padding-left: 10px;
  width: 250px;
  border: 1px solid #666;
  border-radius:6px;
}
.out{
  height: 35px;
  width: 70px;
}
.foodimg{
  display: block;
  width: auto;
  height: 300px;
}
</style>
