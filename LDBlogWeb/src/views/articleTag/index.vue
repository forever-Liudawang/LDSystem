<template>
  <div style="padding:10px">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>前端</h3>
            <el-button style="float: right;" type="primary"  @click="handleAddTag('front')">添加标签</el-button>
          </div>
          <div class="tag">
            <el-tag
              v-for="tag in frontTags"
              :key="tag._id"
              closable
              type="info"
              @close="handleDeleteTag(tag)"
            >
              {{ tag.articleTagName }}
            </el-tag>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h3>后端</h3>
            <el-button style="float: right;" type="primary"  @click="handleAddTag('backEnd')">添加标签</el-button>
          </div>
          <div class="tag">
            <el-tag
              v-for="tag in backEndTags"
              :key="tag._id"
              closable
              type="info"
              @close="handleDeleteTag(tag)"
            >
              {{ tag.articleTagName }}
            </el-tag>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ],
      frontTags: [],
      backEndTags: []
    }
  },
  mounted() {
    this.handleGetTags()
  },
  methods: {
    async handleDeleteTag(tag) {
      console.log(tag)
      this.$confirm('是否删除此标签?', '提示', { callback: async(action) => {
        if (action === 'confirm') {
          const { _id } = tag
          const resp = await this.$http({
            url: '/articleTag/deleteTag',
            method: 'post',
            data: { tagId: _id }
          })
          if (resp && resp.success) {
            this.$message.success('删除成功')
            this.handleGetTags()
          } else {
            this.$message.error(resp.error)
          }
        }
      } })
    },
    handleAddTag(type) {
      let articleCateId = 1
      if (type === 'backEnd') {
        articleCateId = 2
      }
      this.$prompt('请输入标签', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(async({ value }) => {
        const resp = await this.$http({
          url: '/articleTag/inertTag',
          data: { articleCateId, articleTagName: value },
          method: 'post'
        })
        if (resp && resp.success) {
          this.$message.success('添加成功')
          this.handleGetTags()
        } else {
          this.$message.error(resp.error)
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    async handleGetTags() {
      const resp = await this.$http({
        url: '/articleTag/getTags',
        method: 'get'
      })
      if (resp && resp.success) {
        // this.tags = resp.data
        this.filterTag(resp.data)
      } else {
        this.$message.error(resp.error)
      }
    },
    filterTag(tags) {
      const frontTags = []
      const backEndTags = []
      tags.forEach(item => {
        // eslint-disable-next-line eqeqeq
        if (item.articleCateId == 1) {
          frontTags.push(item)
        } else {
          backEndTags.push(item)
        }
      })
      this.frontTags = frontTags
      this.backEndTags = backEndTags
    }
  }
}
</script>

<style lang="scss" scoped>
.box-card {
  height: 90vh;
}
.tag{
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  span{
    min-width:20%;
    margin: 20px;
  }
  .el-tag__close{
    right: -50%;
  }
}
.btn{
  display: flex;
  justify-content: flex-end;
}
</style>
