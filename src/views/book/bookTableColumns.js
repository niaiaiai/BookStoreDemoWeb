const columns = [
  {
    title: '标题',
    dataIndex: 'Title',
    align: 'center'
  },
  {
    title: '图片',
    dataIndex: 'Image',
    scopedSlots: { customRender: 'image' },
    align: 'center'
  },
  {
    title: '作者',
    dataIndex: 'Author',
    align: 'center'
  },
  {
    title: 'ISBN',
    dataIndex: 'ISBN',
    align: 'center'
  },
  {
    title: '出版社',
    dataIndex: 'Publisher',
    align: 'center'
  },
  {
    title: '类型',
    dataIndex: 'BookTypeId',
    scopedSlots: { customRender: 'bookType' },
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