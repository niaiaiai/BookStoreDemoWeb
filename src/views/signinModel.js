import defaultStyle from '../utils/defaultStyle'
const signinFormModel = [
  {
    gutter: defaultStyle.gutter,
    details: [
      {
        formItemLayout: {
          labelCol: { lg: 4, md: 5 },
          wrapperCol: { lg: 20, md: 19 }
        },
        md: 24,
        sm: 24,
        label: '邮箱',
        value: 'email',
        initialValue: '',
        rules: [
          { required: true, message: '请输入邮箱', trigger: 'blur', whitespace: true, type: 'email' }
        ],
        type: 'input',
        editable: true
      }
    ]
  },
  {
    gutter: defaultStyle.gutter,
    details: [
      {
        formItemLayout: {
          labelCol: { lg: 4, md: 5 },
          wrapperCol: { lg: 20, md: 19 }
        },
        md: 24,
        sm: 24,
        label: '密码',
        value: 'password',//固定password
        initialValue: '',
        rules: [
          { required: true, message: '请输入密码', trigger: 'blur', whitespace: true }
        ],
        type: 'password',
        editable: true
      }
    ]
  },
  {
    gutter: defaultStyle.gutter,
    details: [
      {
        formItemLayout: {
          labelCol: { lg: 4, md: 5 },
          wrapperCol: { lg: 20, md: 19 }
        },
        md: 24,
        sm: 24,
        label: '确认密码',
        value: 'confirmPassword', //固定confirmPassword
        initialValue: '',
        rules: [
          { required: true, message: '请再次输入密码', trigger: 'blur', whitespace: true }
        ],
        type: 'password',
        editable: true
      }
    ]
  }
]

const signinValues = {
  password: '',
  confirmPassword: '',
  email: ''
}

export {
  signinFormModel,
  signinValues
}