<template>
  <div>
    <editable-detail ref="searchForm" :is-edit="true" :details="searchModel" :values="searchValue" @onClick="searchInvoice(0)"></editable-detail>
    <a-table :columns="invoiceColumns" :data-source="invoiceData" :pagination="pagination" @change="onPageChange">
      <div slot="date" slot-scope="text">{{moment(text).format('YYYY-MM-DD HH:mm:ss')}}</div>
    </a-table>
    <a-card title="新增" :bordered="false" style="width: 100%">
      <editable-detail ref="addForm" :is-edit="true" :details="addModel" :values="addValue" @onClick="addInvoice"></editable-detail>
    </a-card>
  </div>
</template>

<script>
import moment from "moment";
import EditableDetail from '../../components/EditableDetail.vue'
import { invoiceSearchModel, values } from './invoiceSearchModel'
import columns from './invoiceTableColumns'
import { invoiceAddModel, addValues } from './invoiceAddModel'
import { get, post } from '../../utils/apiHelper'
export default {
  name: 'invoice',
  components: { EditableDetail },
  data() {
    return {
      searchModel: invoiceSearchModel,
      searchValue: values,
      invoiceColumns: columns,
      invoiceData: [],
      pagination: {
        total: 0
      },
      addModel: invoiceAddModel,
      addValue: addValues,
      moment: moment
    }
  },
  methods: {
    searchInvoice(pageIndex) {
      const fieldsValue = this.$refs.searchForm.form.getFieldsValue()
      let params = {
        invoiceCodeNo: fieldsValue.invoiceCodeNo,
        drawer: fieldsValue.drawer,
        orderNo: fieldsValue.orderNo,
        isRed: Number.isInteger(fieldsValue.isRed) ? Boolean(fieldsValue.isRed) : null,
        pageSize: this.pagination.pageSize,
        index: pageIndex
      }
      if((fieldsValue.invoiceTime && fieldsValue.invoiceTime[0])) {
        Object.assign(params, { StartTime: moment(fieldsValue.invoiceTime[0]).format('YYYY-MM-DD HH:mm:ss') })
      }
      if((fieldsValue.invoiceTime && fieldsValue.invoiceTime[1])) {
        Object.assign(params, { EndTime: moment(fieldsValue.invoiceTime[1]).format('YYYY-MM-DD HH:mm:ss') })
      }
      get('invoice', params).then(res => {
        this.invoiceData = res.data
        this.pagination.total = res.total
      }).catch(err => {
        this.$notification.error({
          message: '查询失败',
          description: err.message
        });
      })
    },
    addInvoice() {
      const fieldsValue = this.$refs.addForm.form.getFieldsValue()
      const data = {
        orderNo: fieldsValue.orderNo,
        invoiceCode: fieldsValue.invoiceCode,
        invoiceNo: fieldsValue.invoiceNo,
        drawer: fieldsValue.drawer,
        remark: fieldsValue.remark
      }
      post('invoice', data).then(res => {
        this.$notification.success({
          message: '新增成功'
        })
        this.$refs.addForm.form.resetFields()
        this.searchInvoice(0)
      }).catch(err => {
        this.$notification.error({
          message: '新增失败',
          description: err.message
        });
      })
    },
    onPageChange(pagination) {
      this.searchInvoice(pagination.current - 1)
    }
  },
  mounted() {
    this.searchInvoice(0)
  }
}
</script>

<style>

</style>