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
        value: 'orderAutoSearch',
        onSearch: (searchText) => {
          clearTimeout(timer)
          timer = setTimeout(() => {
            console.log(searchText)
          }, 2000)
        },
        onSelect: (value) => {
          console.log(value)
        },
        dataSource: orderAutoSearchData,
        rules: [
          { required: true, message: '请输入图书', trigger: 'blur' }
        ],
        type: 'auto',
        editable: true
      },
      {
        formItemLayout: defaultStyle.defaultLayout,
        md: defaultStyle.md,
        sm: defaultStyle.sm,
        label: '发票代码',
        value: 'invoiceCode',
        rules: [
          { required: true, message: '请输入发票代码', trigger: 'blur' }
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
          { required: true, message: '请输入发票号码', trigger: 'blur' }
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
          { required: true, message: '请输入开票人', trigger: 'blur' }
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
  orderAutoSearch: '',
  invoiceCode: '',
  invoiceNo: '',
  drawer: '',
  remark: ''
}

let orderAutoSearchData = ['123']
let timer = null

export {
  invoiceAddModel,
  addValues
} 