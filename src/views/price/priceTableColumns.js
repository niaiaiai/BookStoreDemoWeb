const columns = [
  {
    title: '标题',
    dataIndex: 'bookTitle',
    align: 'center'
  },
  {
    title: 'ISBN',
    dataIndex: 'isbn',
    align: 'center'
  },
  {
    title: '价格',
    dataIndex: 'price',
    align: 'center'
  },
  {
    title: '备注',
    dataIndex: 'remark',
    scopedSlots: { customRender: 'remark' },
    align: 'center'
  }
]
export default columns