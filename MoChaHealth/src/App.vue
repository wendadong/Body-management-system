<template>
  <div id = "app">
    <header>
      <div id = "nav">
        <div class = "navbar">
          <div class = "container">
            <img src = "./assets/img/logo.png"/>
            <ul>
              <router-link to = "/search">热量查询</router-link>
              <router-link to = "/article">减肥文章</router-link>
              <router-link to = "/record">记录</router-link>
            </ul>
            <div class = "login">
              <span @click = "login_btn">登录</span>
              <label>|</label>
              <span>注册</span>
            </div>
          </div>
        </div>
        <div class = "cover">
          <h1>超过30万种食物的数据</h1>
          <div class = "search-group">
            <input type = "text" placeholder = "搜索食物查询热量" v-model = "keyword" />
            <div class="btn" @click = "handleSearch">搜索</div>
          </div>
        </div>
      </div>
    </header>
    <router-view />
    <footer>
      <div class = "top">
        <div class = "left">
          <p>客服电话 400-110-0690</p>
        </div>
        <div class = "right">
          <ul>
            <li>关于抹茶</li>
            <li>联系我们</li>
            <li>加入抹茶</li>
            <li>合作伙伴</li>
            <li>法律声明</li>
            <li>快递查询</li>
          </ul>
        </div>
      </div>
      <div class="cpright">
        版权所有© 2006~2019 薄荷网 boohee.com 沪ICP备06060176号
        增值电信业务经营许可证：沪B2-20160210 | 营业执照
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: "",
      res: []
    };
  },
  methods: {
    handleSearch() {
      this.$router.push({ path: "/food", query: { ss: this.keyword } });
    },
    login_btn() {
      this.$router.push({ path: "/login" });
    },
  }
};
</script>

<style lang = "less">
header {
  #nav {
    position: relative;
    .navbar {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.4);
      .container {
        display: flex;
        align-items: center;
        > img {
          height: 70px;
          cursor: pointer;
        }
        ul {
          margin-left: 295px;
          flex: 1;
          a {
            padding-right: 20px;
            transition: all 0.25s;
            color: #fff;
            &:hover {
              color: #61cc73;
            }
          }
        }
        .login {
          color: #fff;
          label {
            padding: 0 10px;
          }
          span {
            cursor: pointer;
            &:hover {
              color: #61cc73;
            }
          }
        }
      }
    }
    .cover {
      width: 100%;
      height: 400px;
      background: url("~@/assets/img/food_bg_1.jpg") 50% 50% no-repeat;
      background-size: cover;
      padding-top: 170px;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 40px;
        font-weight: 400;
        color: #fff;
        letter-spacing: 3px;
        text-align: center;
      }
      .search-group {
        display: flex;
        margin-top: 40px;
        border-radius: 5px;
        input {
          color: #7b7b7b;
          font-size: 14px;
          width: 590px;
          height: 40px;
          line-height: 40px;
          padding: 0 10px;
          border-radius: 5px 0 0 5px;
        }
        .btn {
          width: 110px;
          padding: 0 18px;
          font-size: 14px;
          color: #fff;
          border-radius: 0 5px 5px 0;
          height: 40px;
          line-height: 40px;
          background: #61cc73;
          text-align: center;
          &:hover {
            cursor: pointer;
          }
        }
      }
    }
  }
}
footer {
  margin-top: 40px;
  background: #f0f0f0;
  color: #666;
  .top {
    display: flex;
    justify-content: center;
    align-items: center;
    .right {
      ul {
        display: flex;
        padding-left: 20px;
        li {
          border-left: 1px solid #ccc;
          font-size: 12px;
          padding: 0 10px;
          &:last-of-type {
            border-right: 1px solid #ccc;
          }
        }
      }
    }
  }
  .cpright {
    font-size: 12px;
    padding: 15px 0;
    text-align: center;
    color: #8c8a8a;
    background: #242424;
  }
}
</style>
