const columns = [
  {
    title: '标题',
    dataIndex: 'BookTitle',
    align: 'center'
  },
  {
    title: 'ISBN',
    dataIndex: 'ISBN',
    align: 'center'
  },
  {
    title: '价格',
    dataIndex: 'Price',
    align: 'center'
  },
  {
    title: '备注',
    dataIndex: 'Remark',
    scopedSlots: { customRender: 'remark' },
    align: 'center'
  }
]
export default columns