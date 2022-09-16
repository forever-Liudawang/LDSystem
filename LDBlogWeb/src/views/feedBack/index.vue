<template>
  <div class="articleList">
    <div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="反馈时间">
          <el-date-picker
            v-model="filterModel.publishTime"
            type="date"
            format="yyyy-MM-dd"
            value-format="timestamp"
            placeholder="选择日期时间"
          />
        </el-form-item>
        <el-form-item label="关键字搜索">
          <el-input v-model="filterModel.searchKey" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table :data="tableData" border style="width: 100%" :show-overflow-tooltip="true">
        <el-table-column prop="created" label="反馈时间" width="160" :formatter="dateFormat" />
        <el-table-column prop="emailAddress" label="反馈邮箱" width="200" />
        <el-table-column prop="info" label="反馈信息" />
        <el-table-column prop="replayStatus" label="回复状态" width="160">
          <template slot-scope="scope">
            <el-button v-if="scope.row.replayStatus" type="success" size="mini">已回复</el-button>
            <el-button v-else type="warning" size="mini" >未回复</el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="160">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="handleReplay(scope.$index, scope.row)"
              v-permission="{role:'admin',type:'btn'}"
            >回复</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagation">
      <el-pagination
        background
        layout="prev, pager, next"
        :page-size="pagation.pageSize"
        :total="pagation.total"
        @current-change="handlePageChange"
      />
    </div>
    <el-dialog
      title="回复"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <div>
        <el-input v-model="replayInfo" type="textarea" />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleSureReplay">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      pagation: {
        curPage: 0,
        pageSize: 5,
        total: 0
      },
      filterModel: {
        publishTime: '',
        searchKey: ''
      },
      curRecommend: false,
      dialogVisible: false,
      curReplay: null,
      replayInfo: ''
    }
  },
  mounted() {
    this.getDataList()
  },
  methods: {
    dateFormat(row, column, cellValue, index) {
      const date = row['created']
      if (date != null) {
        const dateMat = new Date(date)
        const year = dateMat.getFullYear()
        const month = dateMat.getMonth() + 1
        const day = dateMat.getDate()
        const timeFormat = year + '-' + month + '-' + day
        return timeFormat
      }
    },
    handlePageChange(curPage) {
      console.log(`curPage`, curPage)
      this.pagation.curPage = curPage - 1
      this.getDataList()
    },
    handleReplay(index, row) {
      this.curReplay = row
      this.dialogVisible = true
    },
    search() {
      this.pagation.curPage = 0
      this.getDataList()
    },
    handleSureReplay() {
      this.$confirm('是否回复?', '提示', { callback: async(action) => {
        if (action === 'confirm') {
          const resp = await this.$http({
            url: '/email/sendEmail',
            data: { toEmail: this.curReplay.emailAddress, replayInfo: this.replayInfo, replayId: this.curReplay._id },
            method: 'post'
          })
          if (resp && resp.success) {
            this.$message.success('回复成功')
            this.dialogVisible = false
            this.getDataList()
          }
        }
      } })
    },
    async getDataList() {
      const resp = await this.$http({
        url: '/email/getList',
        params: { ...this.filterModel, pageSize: this.pagation.pageSize, pageIndex: this.pagation.curPage },
        method: 'get'
      })
      if (resp && resp.success) {
        this.tableData = resp.data || []
        this.pagation.total = resp.extend.total
      }
    }
  }
}
</script>

<style scoped lang="scss">
.articleList{
    padding: 20px;
    .pagation{
        float: right;
        padding-top: 10px;
    }
}
</style>
