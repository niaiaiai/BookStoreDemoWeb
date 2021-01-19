import defaultStyle from '../../utils/defaultStyle'
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
                    { title: '', value: '' },
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
    orderTime: [],
    needInvoice: ''
}

export {
    orderSearchModel,
    values
} 