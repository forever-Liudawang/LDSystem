<template>
    <div class='login'>
        <el-dialog :visible.sync="loginDialogVisible" width="500px" :before-close="handleClose" class="login-dialog" >
            <slot name="title">
                <i class="el-icon-warning" style="color:#ff0000"></i> &nbsp;
                <span style="font-size:14px;color:#ff0000 ">登录成功后将会自动关注我哦</span>
            </slot>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="手机登陆" name="psdLogin">
                    <div class="login-wrapper">
                        <img src="../../assets/me.svg" alt="" class="login-logo">
                        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" style="width:100%">
                            <el-form-item prop="phone">
                                <el-input v-model="loginForm.phone" placeholder="请输入网易云绑定的手机号">
                                    <i slot="prefix" class="iconfont icon-phone"></i>
                                </el-input>
                            </el-form-item>
                            <template>
                                <div style="margin-bottom:5px">
                                    <el-radio v-model="loginMethod" label="1">验证码登录</el-radio>
                                    <el-radio v-model="loginMethod" label="2">密码登录</el-radio>
                                </div>
                            </template>
                            <el-form-item prop="pwd" v-show="loginMethod == 2">
                                <el-input v-model="loginForm.pwd" placeholder="请输入密码" show-password>
                                    <i slot="prefix" class="iconfont icon-pwd"></i>
                                </el-input>
                            </el-form-item>
                            <el-form-item prop="verifyCode" v-show="loginMethod == 1">
                                <el-button :disabled="isGetVerifyCode" type="primary" :loading="isGetVerifyCode" size="mini" @click="handleGetVerifyCode">
                                   <span v-if="isGetVerifyCode">{{time}}</span> 获取验证码
                                </el-button>
                                <el-input v-model="loginForm.verifyCode" placeholder="请输入验证码" show-password>
                                    <i slot="prefix" class="iconfont icon-pwd"></i>
                                </el-input>
                            </el-form-item>
                        </el-form>
                        <span slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="submitForm">登录</el-button>
                        </span>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="二维码登陆" name="qRcodeLogin" style="">
                    <div style="display:flex;flex-direction:column">
                        <el-image
                            style="width: 200px; height: 200px"
                            :src="codeUrl"
                            :fit="fit"></el-image>
                        <div style="text-align:center;color:#ff4c21;">请使用网易云客户端扫码登录</div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-dialog>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    components: {},
    data () {
        // 这里存放数据
        return {
            loginForm: {
                phone: '',
                pwd: '',
                verifyCode: ''
            },
            loginFormRules: {
                phone: [{ required: true, message: '请输入绑定的网易云手机号', trigger: 'blur' }],
                pwd: [{ required: true, message: '请输入网易密码', trigger: 'blur' }],
                verifyCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
            },
            codeUrl: '',
            fit: 'cover',
            activeName: 'psdLogin',
            loginKey: '',
            checkTimer: null,
            loginMethod: '1',
            isGetVerifyCode: false,
            time: 60,
            timer: null
        }
    },
    // 监听属性 类似于data概念
    computed: {
        ...mapGetters(['loginDialogVisible'])
    },
    // 方法集合
    methods: {
        ...mapMutations(['setLogin', 'setUserInfo', 'setLoginDialog']),
        handleClose () {
            this.setLoginDialog(false)
        },
        async submitForm () {
            this.$refs.loginFormRef.validate(async (valid) => {
                    let res = null
                    if (this.loginMethod === '1') {
                        this.loginForm.pwd = '1122'
                        if (valid) {
                            const data = await this.$http.loginByVerifyCode({ phone: this.loginForm.phone, captcha: this.loginForm.verifyCode })
                            res = data.data
                        }
                    } else {
                        this.loginForm.verifyCode = '1122'
                        if (valid) {
                            const data = await this.$http.login(this.loginForm)
                            res = data.data
                        }
                    }
                    if (res.code !== 200) {
                        this.$msg.error(res.msg)
                    } else {
                        this.getUserInfo(res.profile.userId)
                        window.sessionStorage.setItem('token', res.token)
                        window.sessionStorage.setItem('cookie', res.cookie)
                        window.sessionStorage.setItem('isLogin', true)
                        this.setLoginDialog(false)
                    }
            })
        },
        async getUserInfo (uid) {
            const { data: res } = await this.$http.getUserInfo({ uid: uid })

            if (res.code !== 200) {
                this.$msg.error(res.msg)
            } else {
                window.sessionStorage.setItem('userInfo', JSON.stringify(res.profile))
                this.setLogin(true)
                this.setUserInfo(res.profile)
            }
        },
        async getQrCode () {
            const resp = await this.$http.loginByQrCodeGetKey()
            if (!resp.data && resp.data.code !== 200) {
                this.$msg.error('登陆失败')
            } else {
                const key = resp.data.data.unikey
                this.loginKey = key
                const res = await this.$http.loginByQrCodeGetImg(key)
                if (this.checkTimer)clearInterval(this.checkTimer)
                this.handleCheckLogin()
                if (res && res.data) {
                    if (res.data.code === 200) {
                        this.codeUrl = res.data.data && res.data.data.qrimg
                        console.log('this.codeUrl', this.codeUrl)
                    } else {
                        this.$msg.error('出现错误啦,请稍后重试！！！')
                    }
                } else {
                        this.$msg.error('出现错误啦,请稍后重试！！！')
                }
            }
        },
        handleClick (tab) {
            if (this.activeName === 'qRcodeLogin' && !this.codeUrl) {
                this.getQrCode()
            }
        },
        async handleCheckLogin () {
            this.checkTimer = setInterval(async () => {
                const res = await this.$http.loginByQrCodeCheck(this.loginKey, Date.now())
                if (res && res.data) {
                    if (res.data.code === 803) {
                        const resp = await this.$http.loginSuccess(Date.now(), { headers: res.data.cookie })
                        if (resp.data && (resp.data.data && resp.data.data.code === 200)) {
                            this.getUserInfo(resp.data.data.profile.userId)
                            window.sessionStorage.setItem('isLogin', true)
                            this.setLoginDialog(false)
                            clearInterval(this.checkTimer)
                            this.$msg.success('登陆成功！')
                            this.$nextTick(async () => {
                                const userId = resp.data.data.profile.userId
                                if (userId !== '637815558') {
                                    // eslint-disable-next-line no-use-before-define
                                    const resp = await this.$http.followUser(resp.data.data.profile.userId)
                                    if (resp && resp.data.code === 200) {
                                        // this.$msg.success("关注成功!")
                                        // this.$parent.getSerachMatch()
                                    }
                                }
                            })
                        } else {
                          this.$msg.error('登陆失败！')
                        }
                    } else if (res.data.code === 800) {
                        this.$msg.error(res.data.message)
                        if (this.checkTimer)clearInterval(this.checkTimer)
                    }
                }
            }, 3000)
        },
        async handleGetVerifyCode () {
            if (!this.loginForm.phone) {
                return this.$msg.error('请输入手机号码')
            }
            const { data: res } = await this.$http.getVerifyCode({ phone: this.loginForm.phone })
            if (res.data) {
                this.$msg.success('验证码发送成功')
                this.isGetVerifyCode = true
                this.handleTime()
            }
        },
        handleTime () {
            this.timer && clearInterval(this.timer)
            const timer = setInterval(() => {
                if (this.time <= 0) {
                    this.isGetVerifyCode = false
                    this.time = 60
                    clearInterval(this.timer)
                }
                this.time--
            }, 1000)
            this.timer = timer
        }
    },
    beforeDestroy () {
        this.checkTimer && clearInterval(this.checkTimer)
        this.timer && clearInterval(this.timer)
    }
}
</script>
<style scoped lang="less">
.login-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.login-logo {
    margin-bottom: 20px;
    width: 60px;
}
.login-dialog {

    /deep/.el-dialog__body {
        padding: 30px 20px 0;
        height: 380px;
    }
    .dialog-footer {
        position: relative;
        z-index: 2;
        display: block;
        width: 100%;
        margin-bottom: 100px;

        .el-button {
            width: 100%;
        }
    }

    /deep/.el-dialog__footer {
        position: relative;

        &:after {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
            content: "";
            width: 100%;
            height: 100%;
            opacity: .3;
            background: url(../../assets/login_bg2.jpg) center bottom no-repeat;
            background-size: contain;
        }
    }
    /deep/ #pane-qRcodeLogin {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

</style>
