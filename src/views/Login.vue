<template>
  <div class="login-card">
    <a-card title="用户登录" style="width: 500px">
      <editable-detail
        ref="loginForm"
        :is-edit="true"
        :details="loginModel"
        :values="loginValues"
      ></editable-detail>
      <div class="login-form-btns">
        <a-button class="login-btn" @click="login">登录</a-button>
        <a-button class="signin-btn" @click="signin">去注册</a-button>
      </div>
    </a-card>
  </div>
</template>

<script>
import EditableDetail from "../components/EditableDetail";
import { loginFormModel, loginValues } from "./loginModel";
import { mapState } from "vuex";
import { getResourceOwnerPasswordToken } from '../utils/ids4Helper'
import config from '../config/httpConfig'
export default {
  name: "login",
  components: {
    EditableDetail,
  },
  data() {
    return {
      loginModel: loginFormModel,
      loginValues: loginValues,
    };
  },
  computed: {
    ...mapState({
      ids4WellKnown: (state) => state.app.ids4WellKnown,
      accessToken: (state) => state.app.accessToken
    }),
  },
  methods: {
    login() {
      const form = this.$refs.loginForm.form;
      form.validateFields(async (err, values) => {
        if (!err) {
          const params = {
            grant_type: config.ids4.passwordType,
            username: values.email,
            password: values.password,
            client_id: config.ids4.clientId,
            scope: config.ids4.scope
          }
          getResourceOwnerPasswordToken(params).then(res => {
            this.$router.push('/')
          }).catch(err => {
            this.$notification.error({
              message: '登录失败',
              description: err.message
            });
          })
        } // end if
      });
    },
    signin() {
      this.$router.push('/signin')
    },
  },
};
</script>

<style>
.login-card {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-form-btns {
  display: flex;
  justify-content: space-around;
}
.login-form-btns .login-btn,
.login-form-btns .signin-btn {
  width: 100px;
}
</style>