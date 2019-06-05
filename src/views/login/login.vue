<template>
  <div class="login-container">
    <el-form
      ref="loginForm"
      status-icon
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
      auto-complete="on"
      label-position="left"
      @submit.native.prevent
    >
      <div class="title-container">
          <h2>动态管理系统</h2>
           <h2>admin</h2>
        <!-- <img src="../../assets/images/login-logo-1.png" alt> -->
      </div>
      <el-form-item prop="userid">
        <span class="svg-container">
          <i class="iconfont icon-dengluyonghu"></i>
        </span>
        <el-input
          v-model="loginForm.userid"
          ref="username"
          placeholder="用户名"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
           @keyup.enter.native="handleLogin('loginForm')"
        />
      </el-form-item>
        <el-form-item prop="password">
          <span class="svg-container">
            <i class="iconfont icon-ai-password"></i>
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="密码"
            name="password"
            tabindex="2"
             @keyup.enter.native="handleLogin('loginForm')"
          />
        </el-form-item>
      <el-form-item prop="checkcode">
        <span class="svg-container">
          <i class="iconfont icon-yanzhengma1"></i>
        </span>
        <el-input
          ref="checkcode"
          v-model="loginForm.checkcode"
          placeholder="请输入验证码"
          name="checkcode"
          type="text"
          tabindex="3"
          auto-complete="on"
           @keyup.enter.native="handleLogin('loginForm')"
        />
         <el-image :src="src" title='重新加载' class="authLoad-img error-img" @click.native="fetchAuthCode"></el-image>
      </el-form-item>

      <div clsas="login-btn" style="margin:0 auto; text-align: center">
        <el-button
          v-focus
          :loading="loading"
          type="primary"
          align="center"
          style="width:70%;margin-bottom:30px;"
          @click.native.prevent="handleLogin('loginForm')"
          @keyup.enter.native="handleLogin('loginForm')"
        >登录</el-button>
      </div>
    </el-form>
  </div>
</template>
<script>
// import API from '../../api/login';
export default {
  name: 'login',
  data () {
    return {
      loginForm: {
        userid: '',
        password: ''
      },
      loginRules: {
        userid: {
          required: true,
          message: '请输入用户名',
          trigger: 'change'
        },
        password: {
          required: true,
          message: '请输入密码',
          trigger: 'change'
        },
        checkcode: {
          required: true,
          message: '请输入验证码',
          trigger: 'change'
        }
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      src: ''
    };
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      }
    }
  },
  mounted () {
    if (this.loginForm.userid === '') {
      this.$refs.username.focus();
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus();
    }
    this.fetchAuthCode();
  },
  methods: {
    fetchAuthCode () {
      this.$store.dispatch('users/authCode')
        .then(res => {
          const src = `data:image/jpeg;base64,${res.data}`;
          this.src = src;
        });
    },
    handleLogin (form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch('users/loginInfo', this.loginForm)
            .then(data => {
              this.loading = false;
              if (data.code === 200) {
                this.$message({
                  type: 'success',
                  message: data.msg
                });
                this.$router.replace('/home');
              } else {
                this.$message({
                  type: 'error',
                  message: data.msg
                });
                if (data.msg.includes('失效')) {
                  this.fetchAuthCode();
                }
              }
            })
            .catch(error => {
              console.log(error);
              this.loading = false;
            });
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss" >
$bg: #283443;
$light_gray: #fff;
$cursor: color #889aa4;
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  .el-input {
    display: inline-block;
    height: 40px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      // padding: px 5px 20px 15px;
      color: $cursor;
      height: 40px;
      caret-color: $cursor;
      font-size: 18px;
      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #fff inset !important;
        // -webkit-text-fill-color: #fff !important;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  overflow: hidden;
  background: url("../../assets//login-bg1.png") center no-repeat;
  background-position: 80px;;
  background-size: cover;
  background-color: #316CD8;
  height: 100%;
  .login-form {
    position: relative;
    width: 500px;
    max-width: 100%;
    margin-top: -5%;
    background: rgba(255, 255, 255, 1);
    overflow: hidden;
    padding: 25px;
    border-radius: 20px;
  }
  .el-button {
    padding: 12px;
    color: #fff;
    background: linear-gradient(
      -10deg,
      rgba(75, 130, 230, 1) 0%,
      rgba(49, 108, 216, 1) 100%
    );
    border-radius: 32px;
    margin-top: 5px;
    font-size: 20px;
    cursor: pointer;
  }
   .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
    width: 70%;
    text-align: center;
    margin: 25px auto;
    border-radius: 32px;
    border: 2px solid rgba(238, 238, 238, 1);
    background: transparent;
  }
  .svg-container {
    color: $dark_gray;
    width: 30px;
    i {
      font-size: 18px;
      padding-left: 5px;
    }
  }
  .authLoad-img{
    position: absolute;
    right: -1px;
    top: -1px;
    height: 41px;
    cursor: pointer;
  }
  .error-img{
    width: 86px;
    height: 45px;
    top: -2px;
    right: -2px;
  }
}
</style>
