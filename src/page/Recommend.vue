<template>
  <div>
    <HeaderBar :myindex='activeIndex3'></HeaderBar>
    <div>
      <h1>推荐饮食</h1>
    </div>

  </div>

</template>

<script>
import HeaderBar from '../components/HeaderBar'
export default {

  data () {
    return {
      activeIndex3: 'recommend',
      search: ''
    }
  },
  components: {
    HeaderBar
  }
}
</script>

<style lang="css" scoped>

</style>
