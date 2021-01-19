<template>
  <div>
    <editable-detail :is-edit="true" :details="searchModel" :values="searchValue"></editable-detail>
    <a-table :columns="bookColumns" :data-source="bookData" :pagination="pagination">
      <div slot="image">aaa</div>
      <div slot="bookType">aaa</div>
      <a-button slot="remark">编辑</a-button>
    </a-table>
  </div>
</template>

<script>
import EditableDetail from '../../components/EditableDetail.vue'
import { bookSearchModel, values } from './bookSearchModel'
import columns from './bookTableColumns'
export default {
  name: 'book',
  components: { EditableDetail },
  data() {
    return {
      searchModel: bookSearchModel,
      searchValue: values,
      bookColumns: columns,
      bookData: [{}],
      pagination: {
        total: 15
      }
    }
  }
}
</script>

<style>

</style>