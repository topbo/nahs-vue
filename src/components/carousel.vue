<template>
  <div>
    <el-carousel :interval="6000" height="380px">
      <el-carousel-item v-for="item in things" :key="item">
        <h3>{{ item.name }}</h3>
        <img :src="item.url" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {

  name: 'carousel',

  data () {
    return {
      things: [
        {
          name: '蛋白质',
          url: 'http://p.ishowx.com/uploads/allimg/170711/970-1FG1122430.jpg'
        },
        {
          name: '碳水化合物',
          url: 'http://www.caihaibo.cn/wp-content/uploads/2016/04/20160401020801.jpg'
        },
        {
          name: '脂肪',
          url: 'http://www.hc99.com/uploadfile/2013/1029/20131029100305756.jpg'
        },
        {
          name: '维生素',
          url: 'http://img02.tooopen.com/images/20151020/tooopen_sy_145818212426.jpg'
        },
        {
          name: '无机盐',
          url: 'http://s3.sinaimg.cn/mw690/005yUutCgy6TbEjAw9k12&690'
        },
        {
          name: '矿物质',
          url: 'https://gss2.bdstatic.com/9fo3dSag_xI4khGkpoWK1HF6hhy/baike/crop%3D0%2C42%2C494%2C325%3Bc0%3Dbaike80%2C5%2C5%2C80%2C26/sign=e6beba4573cb0a46916dd1795653da10/3bf33a87e950352a2c117db75b43fbf2b2118b19.jpg'
        }
      ]
    };
  }
};
</script>

<style lang="css" scoped>

.el-carousel__item h3 {
    color: #475669;
    font-size: 34px;
    line-height: 68px;
    margin: 0;
  }
.el-carousel__item img{
  width: auto;
}

</style>
