import defaultStyle from '../../utils/defaultStyle'
const priceSearchModel = [
  {
    gutter: defaultStyle.gutter,
    details: [
      {
        formItemLayout: defaultStyle.defaultLayout,
        md: defaultStyle.md,
        sm: defaultStyle.sm,
        label: '标题',
        value: 'title',
        initialValue: '',
        rules: [],
        type: 'input',
        editable: true
      },
      {
        formItemLayout: defaultStyle.defaultLayout,
        md: defaultStyle.md,
        sm: defaultStyle.sm,
        label: 'ISBN',
        value: 'isbn',
        initialValue: '',
        rules: [],
        type: 'input',
        editable: true
      },
      {
        formItemLayout: defaultStyle.defaultLayout,
        md: defaultStyle.md,
        sm: defaultStyle.sm,
        label: '类型',
        value: 'bookType',
        options: [
          { title: '全部', value: -1 }
        ],
        type: 'select',
        editable: true
      },
      {
        formItemLayout: defaultStyle.defaultLayout,
        md: defaultStyle.md,
        sm: defaultStyle.sm,
        label: '',
        value: '查询',
        btnType: 'default',
        type: 'btn',
        editable: true
      }
    ]
  }
]

const values = {
  title: '',
  isbn: '',
  bookType: -1
}

export {
  priceSearchModel,
  values
} 