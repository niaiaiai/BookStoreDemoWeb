const columns = [
    {
      title: '订单号',
      dataIndex: 'orderNo',
      align: 'center'
    },
    {
      title: '订单时间',
      dataIndex: 'orderDate',
      scopedSlots: { customRender: 'date' },
      align: 'center'
    },
    {
      title: '需要发票',
      dataIndex: 'needInvoice',
      scopedSlots: { customRender: 'invoice' },
      align: 'center'
    },
    {
      title: '订单状态',
      align: 'center',
      scopedSlots: { customRender: 'status' }
    },
    {
      title: '操作',
      align: 'center',
      scopedSlots: { customRender: 'action' }
    },
  ]

const orderStatus = {
  title: '订单状态',
  align: 'center',
  scopedSlots: { customRender: 'status' }
}
export {
  columns,
  orderStatus
}