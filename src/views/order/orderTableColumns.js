const columns = [
    {
      title: '订单号',
      dataIndex: 'OrderNo',
      align: 'center'
    },
    {
      title: '订单时间',
      dataIndex: 'OrderDate',
      align: 'center'
    },
    {
      title: '需要发票',
      dataIndex: 'NeedInvoice',
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
export default columns