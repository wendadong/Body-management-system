// 热量查询
<template>
  <div class = "cal-search">
    <div class = "container">
      <h3 class = "common-food">常见食物分类</h3>
      <div class = "category-list">
        <div class = "cate-card" v-for="(item, index) in typeList" :key="index">
          <img :src = "item.img" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeList: []
    };
  },
  mounted() {
    this.axios.get("/api/getAllType").then(res => {
      this.typeList = res.data.type;
    });
  }
};
</script>

<style lang="less" scoped>
.common-food {
  text-align: center;
  margin: 20px 0;
}
.category-list {
  display: flex;
  flex-wrap: wrap;
  .cate-card {
    text-align: center;
    width: 33.333%;
    margin-bottom: 40px;
  }
}
</style>
