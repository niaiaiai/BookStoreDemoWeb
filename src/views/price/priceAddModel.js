import defaultStyle from '../../utils/defaultStyle'
const priceAddModel = [
  {
    gutter: defaultStyle.gutter,
    details: [
      {
        formItemLayout: defaultStyle.defaultLayout,
        md: defaultStyle.md,
        sm: defaultStyle.sm,
        label: '图书',
        value: 'bookAutoSearch',
        onSearch: (searchText) => {
          clearTimeout(timer)
          timer = setTimeout(() => {
            console.log(searchText)
          }, 2000)
        },
        onSelect: (value) => {
          console.log(value)
        },
        dataSource: bookAutoSearchData,
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
        label: '价格',
        value: 'price',
        min: 0,
        initialValue: '',
        rules: [
          { required: true, message: '请输入价格', trigger: 'blur' }
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
  bookAutoSearch: '',
  price: 0,
  remark: ''
}

let bookAutoSearchData = ['123']
let timer = null

export {
  priceAddModel,
  addValues
} 