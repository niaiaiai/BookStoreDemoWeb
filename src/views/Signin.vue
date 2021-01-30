<template>
  <div class="signin-card">
    <a-card title="用户注册" style="width: 500px">
      <editable-detail
        ref="signinForm"
        :is-edit="true"
        :details="signinModel"
        :values="signinValues"
      ></editable-detail>
      <div class="signin-form-btns">
        <a-button class="login-btn" @click="login">返回登录</a-button>
        <a-button class="signin-btn" @click="signin">注册</a-button>
      </div>
    </a-card>
  </div>
</template>

<script>
import EditableDetail from "../components/EditableDetail";
import { signinFormModel, signinValues } from "./signinModel";
import { post, ids4Instance } from '../utils/apiHelper'
export default {
  name: 'signin',
  components: { EditableDetail },
  data() {
    return {
      signinModel: signinFormModel,
      signinValues: signinValues
    }
  },
  methods: {
    login() {
      this.$router.push('/login')
    },
    signin() {
      const form = this.$refs.signinForm.form;
      form.validateFields((err, values) => {
        if (!err) {
          post('user/register', {
            userName: values.email,
            email: values.email,
            password: values.password
          }, ids4Instance).then(res => {
            this.$notification.success({
              message: '注册成功'
            })
            this.$router.push('/login')
          }).catch(err => {
            this.$notification.error({
              message: '注册失败',
              description: err.message
            })
          })
        }
      });
    }
  }
}
</script>

<style>
.signin-card {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.signin-form-btns {
  display: flex;
  justify-content: space-around;
}
.signin-form-btns .login-btn,
.signin-form-btns .signin-btn {
  width: 100px;
}
</style>