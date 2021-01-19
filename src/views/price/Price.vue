<template>
  <div>
    <editable-detail :is-edit="true" :details="searchModel" :values="searchValue"></editable-detail>
    <a-table :columns="priceColumns" :data-source="priceData" :pagination="pagination" rowKey="Id">
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
import { priceSearchModel, values } from './priceSearchModel'
import { priceAddModel, addValues } from './priceAddModel'
import columns from './priceTableColumns'
export default {
  name: 'price',
  components: { EditableDetail },
  data() {
    return {
      searchModel: priceSearchModel,
      searchValue: values,
      priceColumns: columns,
      priceData: [{}],
      pagination: {
        total: 15
      },
      addModel: priceAddModel,
      addValue: addValues
    }
  }
}
</script>

<style>

</style>