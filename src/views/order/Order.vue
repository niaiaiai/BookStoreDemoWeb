<template>
  <div>
    <editable-detail :is-edit="true" :details="searchModel" :values="searchValue"></editable-detail>
    <a-tabs default-active-key="all" @change="callback">
      <a-tab-pane v-for="orderTab in orderTabs" :key="orderTab.key" :tab="orderTab.tab">
        <a-table :columns="orderColumns" :data-source="orderData" :pagination="pagination">
          <div slot="status">aaa</div>
          <a-button slot="action">查看</a-button>
        </a-table>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import EditableDetail from '../../components/EditableDetail.vue'
import { orderSearchModel, values } from './orderSearchModel'
import columns from './orderTableColumns'
export default {
  name: 'order',
  components: { EditableDetail },
  data() {
    return {
      searchModel: orderSearchModel,
      searchValue: values,
      orderColumns: columns,
      orderData: [{}],
      orderTabs: [
        { key: 'all', tab: '全部' },
        { key: 'deliver', tab: '待发货' },
        { key: 'done', tab: '已完成' },
        { key: 'close', tab: '已关闭' }
      ],
      pagination: {
        total: 15
      },
    }
  }
}
</script>

<style>
.ant-tabs-nav {
  width: 100%;
}
.ant-tabs-nav div {
  display: grid;
  grid-template-columns: repeat(4, 25%);
}
.ant-tabs-nav .ant-tabs-tab,
.ant-tabs-nav .ant-tabs-ink-bar {
  display: flex;
  justify-content: center;
}
</style>