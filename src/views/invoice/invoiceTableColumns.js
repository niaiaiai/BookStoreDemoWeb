const columns = [
  {
    title: '发票日期',
    dataIndex: 'invoiceDate',
    scopedSlots: { customRender: 'date' },
    align: 'center'
  },
  {
    title: '发票代码',
    dataIndex: 'invoiceCode',
    align: 'center'
  },
  {
    title: '发票号码',
    dataIndex: 'invoiceNo',
    align: 'center'
  },
  {
    title: '订单号',
    dataIndex: 'orderNo',
    align: 'center'
  },
  {
    title: '金额',
    dataIndex: 'amount',
    align: 'center'
  },
  {
    title: '开票人',
    dataIndex: 'drawer',
    align: 'center'
  },
  {
    title: '备注',
    dataIndex: 'remark',
    align: 'center'
  }
]
export default columns