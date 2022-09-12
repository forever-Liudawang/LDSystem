<template>
  <div class="demoBox">
    <div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="title" label="demo标题" />
        <el-table-column prop="link" label="链接地址" />
        <el-table-column prop="desc" label="demo描述" />
        <el-table-column label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
            <el-button
              size="mini"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
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
    <div>
      <el-form ref="demoModel" :model="demoModel" :rules="rules">
        <el-row>
          <el-col :span="12">
            <el-form-item label="demo标题" prop="title">
              <el-input v-model="demoModel.title" clearable />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="demo地址" prop="link">
              <el-input v-model="demoModel.link" clearable :rows="2" />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="demo简介" prop="desc">
              <el-input
                v-model="demoModel.desc"
                clearable
                :rows="2"
                type="textarea"
              />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-button type="primary" @click="submitForm('demoModel')"
              >提交</el-button
            >
            <el-button type="primary" @click="resetForm('demoModel')"
              >重置</el-button
            >
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import "highlight.js/styles/monokai-sublime.css";
export default {
  data() {
    return {
      demoModel: {
        title: "",
        link: "",
        desc: "",
      },
      rules: {
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        link: [{ required: true, message: "请输入demo地址", trigger: "blur" }],
        desc: [{ required: true, message: "请填写demo简介", trigger: "blur" }],
      },
      tableData: [],
      pagation: {
        curPage: 0,
        pageSize: 5,
        total: 0,
      },
      imageUrl: "",
      uploadImgUrl: process.env.VUE_APP_BASE_API + "/uploadImg",
      isEdit: true,
    };
  },
  mounted() {
    this.handleGetList();
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.$confirm("是否提交?", "提示", {
            callback: async (action) => {
              if (action === "confirm") {
                let resp = null;
                if (!this.isEdit) {
                  const { _id, ...data } = this.demoModel;
                  resp = await this.$http({
                    url: "/onlineDemo/add",
                    data,
                    method: "post",
                  });
                  if (resp && resp.success) {
                    this.$message.success(
                      this.isEdit ? "编辑成功" : "创建成功"
                    );
                    this.$refs[formName].resetFields();
                    this.isEdit = false;
                    this.handleGetList();
                  }
                } else {
                  resp = await this.$http({
                    url: "/onlineDemo/update",
                    data: this.demoModel,
                    method: "post",
                  });
                  if (resp && resp.success) {
                    this.$message.success(
                      this.isEdit ? "编辑成功" : "创建成功"
                    );
                    this.$refs[formName].resetFields();
                    this.isEdit = false;
                    this.handleGetList();
                  }
                }
              }
            },
          });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$confirm("是否重置demo信息?", "提示", {
        callback: async (action) => {
          if (action === "confirm") {
            this.$refs[formName].resetFields();
            this.demoModel = {};
          }
        },
      });
    },
    async handleGetList() {
      const resp = await this.$http({
        url: "/onlineDemo/getList",
        method: "get",
        params: {
          pageSize: this.pagation.pageSize,
          pageIndex: this.pagation.curPage,
        },
      });
      if (resp && resp.success) {
        this.tableData = resp.data;
        this.pagation.total = resp.extend.total
      }
    },
    handleDelete(index, row) {
      this.$confirm("是否删除此demo项?", "提示", {
        callback: async (action) => {
          if (action === "confirm") {
            const resp = await this.$http({
              url: "/onlineDemo/delete",
              data: { demoId: row["_id"] },
              method: "post",
            });
            if (resp && resp.success) {
              this.$message.success("删除成功");
              this.handleGetList();
            }
          }
        },
      });
    },
    handleEdit(index, row) {
      this.demoModel = row;
      this.isEdit = true;
    },
    handlePageChange(curPage) {
      this.pagation.curPage = curPage - 1;
      this.handleGetList();
    },
  },
};
</script>

<style lang="scss" scoped>
.demoBox {
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
<style scoped>
.demoBox >>> .el-input,
.el-select,
.el-textarea {
  width: 80% !important;
}
.demoBox >>> .el-form-item__error {
  left: 40% !important;
}
.tagSelect {
  padding-left: 8px;
}
.tagSelect >>> .el-input {
  width: 100% !important;
}
.tagSelect >>> .el-select {
  width: 81% !important;
}
.btns {
  display: flex;
  flex-direction: column;
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
  border-color: #409eff;
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
