import defaultStyle from '../../utils/defaultStyle'
import moment from "moment";
const invoiceSearchModel = [
  {
    gutter: defaultStyle.gutter,
    details: [
      {
        formItemLayout: defaultStyle.defaultLayout,
        md: defaultStyle.md,
        sm: defaultStyle.sm,
        label: '发票号',
        value: 'invoiceCodeNo',
        initialValue: '',
        rules: [],
        type: 'input',
        editable: true
      },
      {
        formItemLayout: defaultStyle.defaultLayout,
        md: defaultStyle.md,
        sm: defaultStyle.sm,
        label: '发票日期',
        value: 'invoiceTime',
        initialValue: '',
        rules: [],
        type: 'dateRange',
        editable: true
      },
      {
        formItemLayout: defaultStyle.defaultLayout,
        md: defaultStyle.md,
        sm: defaultStyle.sm,
        label: '开票人',
        value: 'drawer',
        initialValue: '',
        rules: [],
        type: 'input',
        editable: true
      },
      {
        formItemLayout: defaultStyle.defaultLayout,
        md: defaultStyle.md,
        sm: defaultStyle.sm,
        label: '订单号',
        value: 'orderNo',
        initialValue: '',
        rules: [],
        type: 'input',
        editable: true
      }
    ]
  },
  {
    gutter: defaultStyle.gutter,
    details: [
      {
        formItemLayout: defaultStyle.defaultLayout,
        md: defaultStyle.md,
        sm: defaultStyle.sm,
        label: '是否红票',
        value: 'isRed',
        options: [
          { title: '全部', value: '' },
          { title: '是', value: 1 },
          { title: '否', value: 0 }
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
  invoiceCodeNo: '',
  invoiceTime: [moment(new Date()).add(-3, 'months').hour(0).minute(0).second(0), moment(new Date()).hour(23).minute(59).second(59)],
  orderNo: '',
  drawer: '',
  isRed: ''
}

export {
  invoiceSearchModel,
  values
} 