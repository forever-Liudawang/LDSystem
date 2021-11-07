<template>
  <div class="createArticle">
    <div>
      <el-form ref="articleModel" :model="articleModel" :rules="rules">
        <el-row>
          <el-col :span="12">
            <el-form-item label="文章标题" prop="articleTitle">
              <el-input v-model="articleModel.articleTitle" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="文章分类" prop="articleCate">
              <el-select v-model="articleModel.articleCate" placeholder="请选择文章分类">
                <el-option label="前端技术" value="1" />
                <el-option label="后端技术" value="2" />
                <el-option label="生活随笔" value="3" />
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="文章简介" prop="articleDesc">
              <el-input v-model="articleModel.articleDesc" clearable :rows="2" type="textarea" />
            </el-form-item>
            <el-form-item label="标签分类" prop="articleTags" class="tagSelect">
              <el-select v-model="articleModel.articleTags" multiple placeholder="请选择">
                <el-option
                  v-for="item in articleTagsSelect"
                  :key="item._id"
                  :label="item.articleTagName"
                  :value="item.articleTagName"
                />
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <div style="display:flex;align-items: flex-start">
              <el-form-item label="文章图片" prop="coverImg" style="width:60%">
                <el-upload
                  class="avatar-uploader"
                  :action="uploadImgUrl"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                >
                  <img v-if="articleModel.coverImg" :src="articleModel.coverImg" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon" />
                </el-upload>
              </el-form-item>
              <el-button style="height:40px" type="primary" @click="submitForm('articleModel')">发布文章</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="editor">
      <div ref="editorRef" class="editorDom" />
    </div>
  </div>
</template>

<script>
import WangEditor from 'wangeditor'
export default {
  data() {
    return {
      articleModel: {
        coverImg: '',
        articleCate: ''
      },
      rules: {
        articleTitle: [
          { required: true, message: '请选择文章标题', trigger: 'blur' },
          { min: 5, max: 20, message: '长度在 5 到 20 个字符', trigger: 'blur' }
        ],
        articleCate: [
          { required: true, message: '请选择文章分类', trigger: 'blur' }
        ],
        articleDesc: [
          { required: true, message: '请填写文章简介', trigger: 'blur' },
          { min: 5, max: 40, message: '长度在 5 到 80 个字符', trigger: 'blur' }
        ],
        coverImg: [
          { required: true, message: '请上传文章封面', trigger: 'blur' }
        ]
      },
      editor: null,
      imageUrl: '',
      uploadImgUrl: process.env.VUE_APP_BASE_API + '/uploadImg',
      articleTagsSelect: ['Vue', 'React', 'nodejs', 'java', '数据库', '部署']
    }
  },
  watch: {
    'articleModel.articleCate'(newVal, oldVal) {
      this.handleGetTags(newVal)
    }
  },
  mounted() {
    this.initEditor()
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async(valid) => {
        if (valid) {
          this.$confirm('是否发布文章?', '提示', { callback: async(action) => {
            if (action === 'confirm') {
              const content = this.editor.txt.html()
              const resp = await this.$http({
                url: '/article/createArtice',
                data: { ...this.articleModel, content },
                method: 'post'
              })
              if (resp && resp.success) {
                this.$message.success('发布成功')
                this.$router.push({
                  name: 'articleList'
                })
              }
            }
          } })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    initEditor() {
      const editor = new WangEditor(this.$refs.editorRef)
      editor.config.height = 1000
      editor.config.zIndex = 10
      editor.config.customUploadImg = async(resultFiles, insertImgFn) => {
        const formData = new FormData()
        formData.append('file', resultFiles[0])
        const resp = await this.$http({
          url: '/uploadImg',
          data: formData,
          method: 'post'
        })
        if (resp.success) {
          insertImgFn(resp.data)
        } else {
          this.$message.error(resp.data)
        }
      }
      // 创建编辑器
      editor.create()
      this.editor = editor
    },
    handleAvatarSuccess(res) {
      if (res && res.success) {
        this.articleModel.coverImg = res.data
      }
    },
    beforeAvatarUpload(file) {
      console.log(`file`, file)
    },
    async handleGetTags(articleCateId) {
      if (articleCateId > 2) {
        this.articleTagsSelect = []
        return
      }
      const resp = await this.$http({
        url: '/articleTag/getTags',
        method: 'get'
      })
      if (resp && resp.success) {
        const data = resp.data || []
        const newData = data.filter(item => {
          // eslint-disable-next-line eqeqeq
          return item.articleCateId == articleCateId
        })
        this.articleTagsSelect = newData
      } else {
        this.$message.error(resp.error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.createArticle{
  padding:  20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
<style scoped>
.createArticle >>> .el-input,.el-select,.el-textarea{
  width: 80% !important;
}
.createArticle >>> .el-form-item__error{
  left:40% !important;
}
.tagSelect{
  padding-left: 8px;
}
.tagSelect >>> .el-input{
  width:100% !important;
}
.tagSelect >>> .el-select{
  width: 81% !important;
}
</style>
<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 115px;
    height: 115px;
    line-height: 115px;
    text-align: center;
  }
  .avatar {
    width: 115px;
    height: 115px;
    display: block;
  }
</style>
