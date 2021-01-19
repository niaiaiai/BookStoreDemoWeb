<template>
  <div>
    <editable-detail :is-edit="true" :details="searchModel" :values="searchValue"></editable-detail>
    <a-table :columns="invoiceColumns" :data-source="invoiceData" :pagination="pagination">
      <div slot="image">aaa</div>
      <div slot="bookType">aaa</div>
      <a-button slot="remark">编辑</a-button>
    </a-table>
    <a-card title="新增" :bordered="false" style="width: 100%">
      <editable-detail :is-edit="true" :details="addModel" :values="addValue"></editable-detail>
    </a-card>
  </div>
</template>

<script>
import EditableDetail from '../../components/EditableDetail.vue'
import { invoiceSearchModel, values } from './invoiceSearchModel'
import columns from './invoiceTableColumns'
import { invoiceAddModel, addValues } from './invoiceAddModel'
export default {
  name: 'invoice',
  components: { EditableDetail },
  data() {
    return {
      searchModel: invoiceSearchModel,
      searchValue: values,
      invoiceColumns: columns,
      invoiceData: [{}],
      pagination: {
        total: 15
      },
      addModel: invoiceAddModel,
      addValue: addValues
    }
  }
}
</script>

<style>

</style>