import defaultStyle from '../../utils/defaultStyle'
const priceAddModel = [
  {
    gutter: defaultStyle.gutter,
    details: [
      {
        formItemLayout: defaultStyle.defaultLayout,
        md: defaultStyle.md,
        sm: defaultStyle.sm,
        label: '图书isbn',
        value: 'bookIsbn',
        rules: [
          { required: true, message: '请输入图书', trigger: 'blur', whitespace: true }
        ],
        type: 'input',
        editable: true
      },
      {
        formItemLayout: defaultStyle.defaultLayout,
        md: defaultStyle.md,
        sm: defaultStyle.sm,
        label: '价格',
        value: 'price',
        min: 0,
        initialValue: '',
        rules: [
          { required: true, message: '请输入价格', trigger: 'blur', type: 'number' }
        ],
        type: 'number',
        editable: true
      },
      {
        formItemLayout: defaultStyle.defaultLayout,
        md: defaultStyle.md,
        sm: defaultStyle.sm,
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
  bookIsbn: '',
  price: 0,
  remark: ''
}


export {
  priceAddModel,
  addValues
} 