<template>
  <div>
    <editable-detail ref="searchForm" :is-edit="true" :details="searchModel" :values="searchValue" @onClick="searchPrice(0)"></editable-detail>
    <a-table :columns="priceColumns" :data-source="priceData" :pagination="pagination" rowKey="Id" @change="onPageChange">
      <div slot="bookType" slot-scope="text">
        <span v-if="text === 1">计算机</span>
        <span v-if="text === 2">漫画</span>
        <span v-if="text === 3">人际关系</span>
      </div>
    </a-table>
    <a-card title="新增" :bordered="false" style="width: 100%">
      <editable-detail ref="addForm" :is-edit="true" :details="addModel" :values="addValue" @onClick="addPrice"></editable-detail>
    </a-card>
  </div>
</template>

<script>
import EditableDetail from '../../components/EditableDetail.vue'
import { priceSearchModel, values } from './priceSearchModel'
import { priceAddModel, addValues } from './priceAddModel'
import columns from './priceTableColumns'
import { get, post } from '../../utils/apiHelper'
export default {
  name: 'price',
  components: { EditableDetail },
  data() {
    return {
      searchModel: priceSearchModel,
      searchValue: values,
      priceColumns: columns,
      priceData: [],
      pagination: {
        total: 0
      },
      addModel: priceAddModel,
      addValue: addValues
    }
  },
  methods: {
    searchPrice(pageIndex) {
      const fieldsValue = this.$refs.searchForm.form.getFieldsValue()
      let params = {
        title: fieldsValue.title,
        author: fieldsValue.author,
        ISBN: fieldsValue.isbn,
        bookTypeId: fieldsValue.bookType,
        publisher: fieldsValue.publisher,
        pageSize: this.pagination.pageSize,
        index: pageIndex
      }
      get('price', params).then(res => {
        this.priceData = res.data
        this.pagination.total = res.total
      }).catch(err => {
        this.$notification.error({
          message: '查询失败',
          description: err.message
        });
      })
    },
    onPageChange(pagination) {
      this.searchPrice(pagination.current - 1)
    },
    addPrice() {
      const fieldsValue = this.$refs.addForm.form.getFieldsValue()
      const data = {
        bookISBN: fieldsValue.bookIsbn,
        price: fieldsValue.price,
        remark: fieldsValue.remark
      }
      post('price', data).then(res => {
        this.$notification.success({
          message: '新增成功'
        });
        this.searchPrice(0)
        this.$refs.addForm.form.resetFields()
      }).catch(err => {
        this.$notification.error({
          message: '新增失败',
          description: err.message
        });
      })
    }
  },
  mounted() {
    this.searchPrice(0)
  }
}
</script>

<style>

</style>