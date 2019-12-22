// 减肥文章
<template>
  <div class = "container">
    <div class = "article">{{ selectContent }}</div>
    <div class = "rightbar">
      <h3>推荐文章</h3>
      <div
        @click = "handleArticleSelect(item)"
        v-for = "(item, index) in articleList"
        :key = "index"
      >
        {{ `${index + 1}.` }}{{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleList: [],
      selectContent: ""
    };
  },
  methods: {
    handleArticleSelect(item) {
      this.selectContent = item.content;
    }
  },
  mounted() {
    this.axios.get("/api/getAllArticle").then(res => {
      this.articleList = res.data.article;
      this.selectContent = this.articleList[0].content;
    });
  }
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  margin: 20px auto;
  .article {
    flex: 1;
    margin-right: 20px;
    padding: 0 40px;
    line-height: 1.5;
    color: #666;
  }
  .rightbar {
    h3 {
      font-size: 14px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
      color: #666;
      margin-bottom: 10px;
    }
    div {
      line-height: 25px;
      &:hover {
        color: #61cc73;
        cursor: pointer;
      }
    }
  }
}
</style>
