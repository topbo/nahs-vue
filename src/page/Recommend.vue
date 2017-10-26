<template>
  <div>
    <HeaderBar :myindex='activeIndex3'></HeaderBar>
    <div class="recommendList">
    <el-row>
      <el-col :span="12" :offset="6">
         <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="菜名"
        width="200">
      </el-table-column>
      <el-table-column
        prop="rate"
        label="评分"
        width="200">
      </el-table-column>
      <el-table-column
        prop="result"
        label="推荐理由"

        >
      </el-table-column>
    </el-table>
      </el-col>
    </el-row>

    </div>

  </div>

</template>

<script>
import HeaderBar from '../components/HeaderBar'
export default {

  data () {
    return {
      activeIndex3: 'recommend',
      search: '',
      tableData: [{
        name: '三文鱼饭',
        rate: '4.8',
        result: '美味且富含蛋白质'
      }, {
        name: '杏仁西兰花',
        rate: '4.6',
        result: '胡萝卜素、维生素C及钾'
      }, {
        name: '蘑菇青菜',
        rate: '4.7',
        result: '维生素'
      }, {
        name: '苹果蔬菜饮',
        rate: '4.6',
        result: '好喝又营养'
      }]
    }
  },
  components: {
    HeaderBar
  }
}
</script>

<style lang="css" scoped>
.recommendList{
  margin-top: 80px;
}
</style>
