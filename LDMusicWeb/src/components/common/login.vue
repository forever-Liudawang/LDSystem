<template>
    <div class='login'>
        <el-dialog :visible.sync="loginDialogVisible" width="28%" :before-close="handleClose" class="login-dialog">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="账号密码登陆" name="psdLogin">
                    <div class="login-wrapper">
                        <img src="../../assets/logo.jpg" alt="" class="login-logo">
                        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules">
                            <el-form-item prop="phone">
                                <el-input v-model="loginForm.phone" placeholder="请输入网易云帐号登录">
                                    <i slot="prefix" class="iconfont icon-phone"></i>
                                </el-input>
                            </el-form-item>
                            <el-form-item prop="pwd">
                                <el-input v-model="loginForm.pwd" placeholder="请输入密码" show-password>
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
                pwd: ''
            },
            loginFormRules: {
                phone: [{ required: true, message: '请输入网易帐号', trigger: 'blur' }],
                pwd: [{ required: true, message: '请输入网易密码', trigger: 'blur' }]
            },
            codeUrl: '',
            fit: 'cover',
            activeName: 'psdLogin',
            loginKey: '',
            checkTimer: null
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
                if (valid) {
                    const { data: res } = await this.$http.login(this.loginForm)

                    if (res.code !== 200) {
                        this.$msg.error(res.msg)
                    } else {
                        this.getUserInfo(res.profile.userId)
                        window.sessionStorage.setItem('token', res.token)
                        window.sessionStorage.setItem('cookie', res.cookie)
                        window.sessionStorage.setItem('isLogin', true)
                        this.setLoginDialog(false)
                    }
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
            console.log(resp,'resp===.....')
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
                const resp = await this.$http.loginByQrCodeCheck(this.loginKey, Date.now())
                console.log(resp, 'resp===....')
                if (resp && resp.data) {
                    if (resp.data.code === 803) {
                        const resp = await this.$http.loginSuccess(Date.now())
                        console.log('resp', resp)
                        if (resp.data && (resp.data.data && resp.data.data.code === 200)) {
                            this.getUserInfo(resp.data.data.profile.userId)
                            window.sessionStorage.setItem('isLogin', true)
                            this.setLoginDialog(false)
                            clearInterval(this.checkTimer)
                            this.$msg.success('登陆成功！')
                        } else {
                          this.$msg.error('登陆失败！')
                        }
                    } else if (resp.data.code === 800) {
                        this.$msg.error(resp.data.message)
                        if (this.checkTimer)clearInterval(this.checkTimer)
                    }
                }
            }, 3000)
        }
    },
    beforeDestroy () {
        console.log('12333', 12333)
        this.checkTimer && clearInterval(this.checkTimer)
    }
}
</script>
<style scoped lang="less">
.login-logo {
    margin-bottom: 50px;
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
