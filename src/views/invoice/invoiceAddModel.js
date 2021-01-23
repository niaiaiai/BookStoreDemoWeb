import defaultStyle from '../../utils/defaultStyle'
const invoiceAddModel = [
  {
    gutter: defaultStyle.gutter,
    details: [
      {
        formItemLayout: defaultStyle.defaultLayout,
        md: defaultStyle.md,
        sm: defaultStyle.sm,
        label: '订单号',
        value: 'orderNo',
        rules: [
          { required: true, message: '请输入订单号', trigger: 'blur', whitespace: true }
        ],
        type: 'input',
        editable: true
      },
      {
        formItemLayout: defaultStyle.defaultLayout,
        md: defaultStyle.md,
        sm: defaultStyle.sm,
        label: '发票代码',
        value: 'invoiceCode',
        rules: [
          { required: true, message: '请输入发票代码', trigger: 'blur', whitespace: true }
        ],
        type: 'input',
        editable: true
      },
      {
        formItemLayout: defaultStyle.defaultLayout,
        md: defaultStyle.md,
        sm: defaultStyle.sm,
        label: '发票号码',
        value: 'invoiceNo',
        rules: [
          { required: true, message: '请输入发票号码', trigger: 'blur', whitespace: true }
        ],
        type: 'input',
        editable: true
      },
      {
        formItemLayout: defaultStyle.defaultLayout,
        md: defaultStyle.md,
        sm: defaultStyle.sm,
        label: '开票人',
        value: 'drawer',
        rules: [
          { required: true, message: '请输入开票人', trigger: 'blur', whitespace: true }
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
          labelCol: { lg: 3, md: 5 },
          wrapperCol: { lg: 21, md: 19 }
        },
        md: 18,
        sm: 16,
        label: '备注',
        value: 'remark',
        initialValue: '',
        rules: [],
        type: 'input',
        editable: true
      },
      {
        formItemLayout: defaultStyle.defaultLayout,
        md: defaultStyle.md,
        sm: defaultStyle.sm,
        label: '',
        value: '添加',
        btnType: 'default',
        type: 'btn',
        editable: true
      }
    ]
  }
]

const addValues = {
  orderNo: '',
  invoiceCode: '',
  invoiceNo: '',
  drawer: '',
  remark: ''
}

export {
  invoiceAddModel,
  addValues
} 