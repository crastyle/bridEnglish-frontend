<template>
   <div class="root">
        <div class="validMobile">
            <div class="cell-input">
                <input class="input-item block icon-mobile" placeholder="手机" v-model="userInfo.mobile">
            </div>
            <div class="cell-input">
                <input class="input-item block icon-code" placeholder="验证码" v-model="userInfo.smsCode">
                <button class="valid-button" @click="getCode" v-bind:class="{'disabled': buttonStatus}">{{validButtonText}}</button>
            </div>
            <div class="cell-input">
                <a href="javascript:;" class="confirm-button">登录</a>
            </div>
        </div>
    </div>
</template>

<script>
import {Button, Message} from 'element-ui'
import Vue from 'vue'
import base from  '../base'
Vue.component(Button.name, Button)
export default {
  name: '',
  data () {
    return {
      validButtonText: '获取验证码',
      buttonStatus: false,
      userInfo: {
        mobile: '',
        smsCode: ''
      }
    }
  },
  methods: {
     getCode: function () {
      let second = 60
      let _this = this
      if (!base.validate.isTelephone(this.userInfo.mobile)) {
        Message({
          message: '请输入正确的手机号码',
          duration: 2000
        })
        return false
      }
      if (_this.buttonStatus) {
        return false
      }
      _this.buttonStatus = true
      this.validButtonText = `${second}重新获取`
      resource.smsCode({
        mobile: this.userInfo.mobile
      }).then(res => {
        Message({
          message: '验证码发送成功',
          duration: 1500
        })
        let timer = setInterval(() => {
          second--
          _this.validButtonText = `${second}重新获取`
          if (second === 0) {
            _this.buttonStatus = false
            _this.validButtonText = '获取验证码'
            clearInterval(timer)
          }
        }, 1000)
      })

    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/app';
.validMobile {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: url(../assets/login-background.png) no-repeat;
    background-size: cover;
    @include vertical();
    .mint-cell {
        background: transparent;
    }
    .cell-input {
        width: 400px;
        height: 41px;
        position: relative;
        margin-bottom: 20px;
        border-radius: 10px;
        overflow: hidden;
    }
    .confirm-button {
        width: 200px;
        height: 32px;
        border-radius: 10px;
        background: #fff;
        color: $maincolor;
        text-align: center;
        line-height: 32px;
        display: block;
        font-size: 16px;
    }
    .input-item {
        width: 200px;
        height: 50px;
        border: 1px solid #fff;
        color: #fff;
        display: block;
        position: relative;
        box-sizing: border-box;
        padding-left: 35px;
        border-radius: 10px;
        font-size: 16px;
        &::-webkit-input-placeholder {
            color: #fff;
        }
        &.icon-mobile {
            background: url(../assets/image/icon-login-mobile.png) no-repeat left 10px center;
            background-size: 17px 26px;
        }
        &.icon-code {
            background: url(../assets/image/icon-login-code.png) no-repeat left 10px center;
            background-size: 17px 23px;
        }
    }
    .valid-button {
        position: absolute;
        right: 0;
        top: 0;
        width: 200px;
        height: 32px;
        border: 1px solid #fff;
        color: $maincolor;
        background: #fff;
        outline: none;
        &.disabled {
            border: 1px solid #ccc;
            background: #ccc;
            color: #fff;
        }
    }
}
.section-button {
    padding: 16px;
}
</style>
