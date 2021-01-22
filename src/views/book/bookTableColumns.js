const columns = [
  {
    title: '标题',
    dataIndex: 'title',
    align: 'center'
  },
  {
    title: '图片',
    dataIndex: 'image',
    scopedSlots: { customRender: 'image' },
    align: 'center'
  },
  {
    title: '作者',
    dataIndex: 'author',
    align: 'center'
  },
  {
    title: 'ISBN',
    dataIndex: 'isbn',
    align: 'center'
  },
  {
    title: '出版社',
    dataIndex: 'publisher',
    align: 'center'
  },
  {
    title: '类型',
    dataIndex: 'bookTypeId',
    scopedSlots: { customRender: 'bookType' },
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