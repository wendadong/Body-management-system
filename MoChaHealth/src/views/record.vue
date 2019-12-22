<template>
 <div class = "record">
    <div class = "container">
      <div class = "wrapper">
        <span>{{ d }}</span>
        <input type = "text" placeholder = "输入体重" v-model="value" />
        <button @click = "insertRecord">记录</button>
      </div>
      <div class = "echart">
        <div id="myChart" :style = "{height: '300px' }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      d: "",
      value: "",
      recordList: [],
      x: [],
      v: []
    };
  },
  methods: {
    drawLine() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        title: { text: "体重记录" },
        xAxis: {
          type: "category",
          data: this.x
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.v,
            type: "line"
          }
        ]
      });
    },
    insertRecord() {
      if (this.value === "") return;
      this.axios.post("/api/insertRecord", {
        value: this.value,
        date: this.d
      });
    }
  },
  mounted() {
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth();
    var day = myDate.getDate();
    this.d = year + "-" + (month + 1) + "-" + day;
    this.axios.get("/api/getAllRecord").then(res => {
      res.data.record.forEach(item => {
        this.x.push(item.date);
        this.v.push(+item.value);
      });
      this.drawLine();
    });
  }
};
</script>

<style lang="less" scoped>
.record {
  margin: 20px 0;
  .wrapper {
    display: flex;
    padding-bottom: 20px;
    input {
      border: 1px solid #ccc;
      border-right: 0;
      border-left: 0;
      height: 40px;
      line-height: 40px;
      padding: 0 10px;
    }
    span {
      display: inline-block;
      padding: 0 18px;
      font-size: 14px;
      color: #fff;
      border-radius: 5px 0px 0px 5px;
      height: 40px;
      line-height: 40px;
      background: #61cc73;
      text-align: center;
      border: 0;
      outline: none;
    }
    button {
      width: 110px;
      padding: 0 18px;
      font-size: 14px;
      color: #fff;
      border-radius: 0 5px 5px 0;
      height: 40px;
      line-height: 40px;
      background: #61cc73;
      text-align: center;
      border: 0;
      outline: none;
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
