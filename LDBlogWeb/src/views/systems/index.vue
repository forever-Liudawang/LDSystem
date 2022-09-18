<template>
  <div class="systems">
    <div class="title">
      <h2>我的一些demo</h2>
    </div>
    <div class="cardBox">
      <el-card class="box-card" v-for="item in tableData" :key="item._id">
        <div slot="header" class="clearfix">
          <span>{{ item.title }}</span>
          <el-button style="float: right; padding: 3px 0" type="text">
            <el-link type="primary"
              ><a :href="item.link" target="_blank">demo地址</a></el-link
            ></el-button
          >
        </div>
        <div class="text item">
          {{ item.desc }}
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
  mounted() {
    this.handleGetTable();
  },
  methods: {
    async handleGetTable() {
      const resp = await this.$http({
        url: "/onlineDemo/getList",
        method: "get",
        params: {
          pageSize: 10,
        },
      });
      if (resp && resp.success) {
        this.tableData = resp.data;
      }
    },
  },
};
</script>
<style>
.systems {
  min-height: 100vh;
  padding: 40px;
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  box-sizing: border-box;
  background: #ffffff;
  background: url("../../assets/bg.jpg") no-repeat;
  background-size: cover;
}
.cardBox {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
}
.title{
  text-align: center;
}
.title h2 {
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 4px;
}
.box-card {
  width: 29%;
  display: inline-block;
  height: 25%;
  margin: 2%;
}
</style>
