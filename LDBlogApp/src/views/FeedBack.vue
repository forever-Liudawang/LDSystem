<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue'
import { insertFeedback } from '@src/apis'
import { Dialog, Toast } from 'vant'
const model = reactive({
  emailAddress: '',
  info: ''
})
const emailPattern = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
const onSubmit = (val: any) => {
  Dialog.confirm({
    title: '',
    message: '是否提交反馈信息？'
  }).then(async () => {
    const resp = await insertFeedback(val)
    if (resp && resp.success) {
      Toast('反馈成功，请注意查看垃圾邮件！')
    }
  }).catch(()=>{})
}
</script>

<template>
  <div class="feedback">
    <van-notice-bar left-icon="volume-o" text="请输入正确的邮箱地址，看到后会在第一时间内回复" />
    <h2>反馈</h2>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="model.emailAddress"
          name="emailAddress"
          label="邮箱地址"
          placeholder="邮箱地址"
          :rules="[{ required: true, pattern: emailPattern, message: '请填写正确的邮箱地址' }]"
        />
        <van-field
          v-model="model.info"
          type="textarea"
          rows="5"
          name="info"
          label="反馈信息"
          placeholder="反馈信息"
          :rules="[{ required: true, message: '请填写反馈信息' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button color="#ff4c21" round block type="primary" native-type="submit"> 提交 </van-button>
      </div>
    </van-form>
  </div>
</template>

<style lang="scss" module>
.themeColor {
  background-color: $theme-color !important;
}
</style>
<style lang="scss" scoped>
.feedback {
  padding-top: 100px;
  h2 {
    text-align: center;
    font-size: 60px;
    letter-spacing: 20px;
  }
}
</style>
