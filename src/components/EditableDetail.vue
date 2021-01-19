<template>
  <div>
    <!-- <detail-list :title="title"> -->
    <a-form :form="form">
      <a-row v-for="(row, index) in details" :key="index" :gutter="row.gutter">
        <div class="collapse" v-if="index >= collapseRow">
          <a @click="seeMore">
            <a-icon :type="expand ? 'up' : 'right'" />更多信息
          </a>
        </div>
        <div v-if="index < collapseRow || (index >= collapseRow && expand)">
          <a-col v-for="(col, index) in row.details" :key="index" :md="col.md" :sm="col.sm">
            <a-form-item v-bind="col.formItemLayout" :label="col.label">
              <a-input
                v-if="isEdit && col.editable && col.type === 'input'"
                v-decorator="[
                col.value,
                {
                  initialValue: values[col.value],
                  rules: col.rules
                }
                ]"
              />
              <a-select
                v-if="isEdit && col.editable  && col.type === 'select'"
                v-decorator="[
                col.value,
                {
                  initialValue: values[col.value],
                  rules: col.rules
                }
                ]"
                :options="col.options"
              ></a-select>
              <a-input-number
                v-if="isEdit && col.editable && col.type === 'number'"
                :min="col.min"
                class="input-number"
                v-decorator="[
                col.value,
                {
                  initialValue: values[col.value],
                  rules: col.rules 
                }
                ]"
              />
              <a-radio-group
                v-if="isEdit && col.editable && col.type === 'radio'"
                v-decorator="[
                col.value,
                {
                  initialValue: values[col.value],
                  rules: col.rules
                }
                ]"
                :options="col.options"
              />
              <a-textarea
                v-if="isEdit && col.editable && col.type === 'area'"
                v-decorator="[
                col.value,
                {
                  initialValue: values[col.value],
                  rules: col.rules
                }
                ]"
                :autosize="col.autosize"
              />
              <a-auto-complete
                v-if="isEdit && col.editable && col.type === 'auto'"
                :dataSource="col.dataSource"
                @select="col.onSelect"
                @search="col.onSearch"
                v-decorator="[
                col.value,
                {
                  initialValue: values[col.value],
                  rules: col.rules
                }
                ]"
              />
              <a-range-picker
                v-if="isEdit && col.editable && col.type === 'dateRange'"
                v-decorator="[
                col.value,
                {
                  initialValue: values[col.value],
                  rules: col.rules,
                  getValueFromEvent: dateRangeChange
                }
                ]"
              ></a-range-picker>
              <a-input-search
                :placeholder="col.placeholder"
                v-if="isEdit && col.editable && col.type === 'search'"
                v-decorator="[
                col.value,
                {
                  initialValue: values[col.value],
                  rules: col.rules
                }
                ]"
              />
              <a-button
                v-if="isEdit && col.editable && col.type === 'btn'"
                :type="col.btnType"
                class="btn"
              >{{col.value}}</a-button>
              <div v-if="!isEdit || !col.editable">{{values[col.value]}}</div>
            </a-form-item>
          </a-col>
        </div>
      </a-row>
    </a-form>
    <!-- </detail-list> -->
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "editable-detail",
  props: {
    isEdit: {
      type: Boolean
    },
    details: {
      type: Array
    },
    title: {
      type: String
    },
    values: {
      type: Object
    },
    collapseRow: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      form: this.$form.createForm(this),
      expand: false
    };
  },
  methods: {
    dateRangeChange(date) {
      if (date[0] && date[1]) {
        date[0] = moment(date[0])
          .hour(0)
          .minute(0)
          .second(0);
        date[1] = moment(date[1])
          .hour(23)
          .minute(59)
          .second(59);
      }
      return date;
    },
    seeMore() {
      this.expand = !this.expand;
    }
  },
  mounted() {
    // this.form.setFieldsValue(this.productValueStore)
    // this.form.setFieldsValue(this.detailValueStore)
  }
};
</script>

<style>
.input-number {
  width: 100%;
}
.collapse {
  position: relative;
}
.ant-form-item /deep/ .ant-form-item-control-wrapper{
  height: 100%;
}
.btn {
  margin-left: 60%;
  width: 60%;
}
</style>