<template>
  <div class = "container">
    <p>欢迎登录</p>
    <div class="form">
      <input type = "text" placeholder = "用户名" v-model="username" />
      <input type = "text" placeholder = "密码" v-model="password" />
      <button @click = "handleLogin">登录</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleLogin() {
      if (this.username === "" || this.password === "") {
        return;
      }
      this.$router.push("/");
    }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 930px;
  border: 1px #ddd solid;
  border-width: 0 0 0 1px;
  padding: 20px 0 20px 70px;
  margin: 20px auto 20px auto;
  p {
    font-size: 20px;
  }
  .form {
    input {
      display: block;
      border: none;
      padding: 11px 10px 11px 0;
      font-size: 16px;
      border: 1px #ddd solid;
      border-width: 0 0 1px 0;
      width: 100%;
      margin: 0;
      margin-bottom: 20px;
    }
    button {
      width: 100%;
      color: #fff;
      background-color: #ff4c4b;
      padding: 10px 28px;
      border: 0;
      outline: none;
      &:hover {
        cursor: pointer;
        opacity: 0.8;
      }
    }
  }
}
</style>
