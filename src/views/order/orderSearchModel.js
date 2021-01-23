import defaultStyle from '../../utils/defaultStyle'
import moment from "moment";
const orderSearchModel = [
    {
        gutter: defaultStyle.gutter,
        details: [
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
            },
            {
                formItemLayout: defaultStyle.defaultLayout,
                md: defaultStyle.md,
                sm: defaultStyle.sm,
                label: '订单时间',
                value: 'orderTime',
                initialValue: '',
                rules: [],
                type: 'dateRange',
                editable: true
            },
            {
                formItemLayout: defaultStyle.defaultLayout,
                md: defaultStyle.md,
                sm: defaultStyle.sm,
                label: '需要发票',
                value: 'needInvoice',
                initialValue: '',
                rules: [],
                type: 'select',
                options: [
                    { title: '全部', value: '' },
                    { title: '是', value: 1 },
                    { title: '否', value: 0 }
                ],
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
    orderNo: '',
    orderTime: [moment(new Date()).add(-3, 'months').hour(0).minute(0).second(0), moment(new Date()).hour(23).minute(59).second(59)],
    needInvoice: ''
}

export {
    orderSearchModel,
    values
} 