<template>
  <div class="articleList">
    <div>
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="文章分类">
          <el-select v-model="filterModel.articleCate" placeholder="选择文章分类">
            <el-option label="全部" value="0" />
            <el-option label="前端技术" value="1" />
            <el-option label="后端技术" value="2" />
            <el-option label="生活随笔" value="3" />
            <!-- <el-option label="后端技术" value="2" /> -->
          </el-select>
        </el-form-item>
        <el-form-item label="发布时间">
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
      <el-table :data="tableData" border style="width: 100%" >
        <el-table-column prop="_id" label="文章ID" width="220" />
        <el-table-column prop="created" label="创建时间" width="140" :formatter="dateFormat" />
        <el-table-column prop="userName" label="创建用户" width="100" />
        <el-table-column prop="articleCate" label="文章分类" :formatter="cateFormat" width="160" />
        <el-table-column prop="articleTitle" label="文章标题" />
        <el-table-column prop="isMyRecommend" label="文章热推">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.isMyRecommend"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="handleSwitch(scope)"
            />
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button>
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
        articleCate: '',
        searchKey: '',
        isMyRecommend: false
      },
      curRecommend: false
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
        const timeFormat = year + '/' + month + '/' + day
        return timeFormat
      }
    },
    cateFormat(row, column) {
      const articleCate = row['articleCate']
      if (articleCate === '1') {
        return '前端技术'
      } else if (articleCate === '2') {
        return '后端技术'
      } else if (articleCate === '3') {
        return '生活随笔'
      }
      return '暂未分类'
    },
    handlePageChange(curPage) {
      console.log(`curPage`, curPage)
      this.pagation.curPage = curPage - 1
      this.getDataList()
    },
    handleEdit(index, row) {
      this.$router.push({
        name: 'articleDetail',
        params: { articleId: row._id }
      })
    },
    handleDelete(index, row) {
      this.$confirm('是否删除此文章?', '提示', { callback: async(action) => {
        if (action === 'confirm') {
          const resp = await this.$http({
            url: '/article/deleteArticle',
            data: { articleId: row['_id'] },
            method: 'post'
          })
          if (resp && resp.success) {
            this.$message.success('删除成功')
          }
        }
      } })
    },
    search() {
      this.pagation.curPage = 0
      this.getDataList()
    },
    async getDataList() {
      const resp = await this.$http({
        url: '/article/getArticleList',
        params: { ...this.filterModel, pageSize: this.pagation.pageSize, pageIndex: this.pagation.curPage },
        method: 'get'
      })
      if (resp && resp.success) {
        this.tableData = resp.data || []
        this.pagation.total = resp.extend.total
      }
    },
    async handleSwitch(scope) {
      const data = scope.row
      console.log(`data`, data)
      const resp = await this.$http({
        url: '/article/switchRecommendArticle',
        data: { articleId: data._id, newState: data.isMyRecommend },
        method: 'post'
      })
      if (resp && resp.success) {
        this.getDataList()
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
