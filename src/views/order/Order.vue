<template>
  <div>
    <editable-detail ref="searchForm" :is-edit="true" :details="searchModel" :values="searchValue" @onClick="searchOrder(0)"></editable-detail>
    <a-tabs :activeKey="tabKey" @change="tabChange">
      <a-tab-pane v-for="orderTab in orderTabs" :key="orderTab.key" :tab="orderTab.tab">
        <a-table :columns="orderColumns" :data-source="orderData" :pagination="pagination" @change="onPageChange">
          <div slot="date" slot-scope="text">{{moment(text).format('YYYY-MM-DD HH:mm:ss')}}</div>
          <div slot="invoice" slot-scope="text">
            <span v-if="text">需要发票</span>
            <span v-else>无需发票</span>
          </div>
          <div slot="status">aaa</div>
          <a-button slot="action">查看</a-button>
        </a-table>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import moment from "moment";
import EditableDetail from '../../components/EditableDetail.vue'
import { orderSearchModel, values } from './orderSearchModel'
import columns from './orderTableColumns'
import { get } from '../../utils/apiHelper'
export default {
  name: 'order',
  components: { EditableDetail },
  data() {
    return {
      searchModel: orderSearchModel,
      searchValue: values,
      orderColumns: columns,
      orderData: [],
      orderTabs: [
        { key: 'all', tab: '全部' },
        { key: 'deliver', tab: '待发货' },
        { key: 'done', tab: '待收货' },
        { key: 'close', tab: '已关闭' }
      ],
      pagination: {
        total: 0
      },
      moment: moment,
      tabKey: 'all'
    }
  },
  methods: {
    searchOrder(pageIndex, isDeliver = null, isDone = null, isClose = null) {
      const fieldsValue = this.$refs.searchForm.form.getFieldsValue()
      let params = {
        orderNo: fieldsValue.orderNo,
        isClose: isClose,
        isDone: isDone,
        needInvoice: Number.isInteger(fieldsValue.needInvoice) ? Boolean(fieldsValue.needInvoice) : null,
        isDeliver: isDeliver,
        pageSize: this.pagination.pageSize,
        index: pageIndex
      }
      if((fieldsValue.orderTime && fieldsValue.orderTime[0])) {
        Object.assign(params, { startTime: moment(fieldsValue.orderTime[0]).format('YYYY-MM-DD HH:mm:ss') })
      }
      if((fieldsValue.orderTime && fieldsValue.orderTime[1])) {
        Object.assign(params, { endTime: moment(fieldsValue.orderTime[1]).format('YYYY-MM-DD HH:mm:ss') })
      }
      get('order', params).then(res => {
        this.orderData = res.data
        this.pagination.total = res.total
      }).catch(err => {
        this.$notification.error({
          message: '查询失败',
          description: err.message
        });
      })
    },
    onPageChange(pagination) {
      switch(this.tabKey) {
        case 'all': this.searchOrder(pagination.current - 1); break
        case 'deliver': this.searchOrder(pagination.current - 1, false, undefined, false); break
        case 'done': this.searchOrder(pagination.current - 1, true, false, false); break
        case 'close': this.searchOrder(pagination.current - 1, undefined, undefined, true); break
      }
    },
    tabChange(activeKey) {
      this.tabKey = activeKey
      switch(this.tabKey) {
        case 'all': this.searchOrder(0); break
        case 'deliver': this.searchOrder(0, false, undefined, false); break
        case 'done': this.searchOrder(0, true, false, false); break
        case 'close': this.searchOrder(0, undefined, undefined, true); break
      }
    }
  },
  mounted() {
    this.searchOrder(0)
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