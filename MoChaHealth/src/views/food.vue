// 食物
<template>
  <div class = "food">
    <div class = "container">
      <p class = "crumb">
        薄荷食物库搜索"
        <span>{{ ss }}</span
        >"的结果
      </p>
      <div class = "result">
        <h3>{{ ss }}</h3>
        <ul>
          <li v-for = "(item, index) in foodList" :key="index">
            <img :src = "item.img" />
            <div>
              <p>{{ item.des }}</p>
              <p>{{ item.cal }}</p>
            </div>
          </li>
          <li v-if="foodList.length === 0">无结果</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    $route() {
      this.ss = this.$route.query.ss;
    },
    ss() {
      this.axios
        .post(`/api/getFoodByKeyword`, { keyword: this.ss })
        .then(res => {
          this.foodList = res.data.food;
        });
    }
  },
  data() {
    return {
      ss: "",
      foodList: []
    };
  },
  mounted() {
    this.ss = this.$route.query.ss;
  }
};
</script>

<style lang = "less" scoped>
.food {
  .crumb {
    margin: 26px 0;
    font-size: 14px;
    padding-left: 15px;
    border-left: 5px solid #61cc73;
    span {
      color: #61cc73;
    }
  }
  .result {
    border: 1px solid #e3e3e3;
    h3 {
      margin: 0;
      padding: 10px 20px;
      font-size: 14px;
      font-weight: normal;
      background: #f9f9f9;
      border-bottom: 1px solid #61cc73;
    }
    ul {
      padding: 0 20px;
      li {
        display: flex;
        align-items: center;
        padding: 20px 0;
        border-bottom: 1px solid #e3e3e3;
        &:last-of-type {
          border-bottom: 0;
        }
        img {
          width: 36px;
          height: 36px;
        }
        div {
          padding-left: 20px;
          p {
            margin: 0;
            &:first-of-type {
              font-size: 14px;
              padding-bottom: 5px;
            }
            &:last-of-type {
              font-size: 12px;
              color: #999;
            }
          }
        }
      }
    }
  }
}
</style>
