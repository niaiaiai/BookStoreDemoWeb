<template>
  <div>
    <editable-detail ref="searchForm" :is-edit="true" :details="searchModel" :values="searchValue" @onClick="searchBook(0)"></editable-detail>
    <a-table :columns="bookColumns" :data-source="bookData" :pagination="pagination" @change="onPageChange">
      <div slot="image" slot-scope="text,record" class="image-slot">
        <a-upload
          accept="image/png, image/jpeg"
          :customRequest="uploadImage"
          list-type="picture-card"
          :before-upload="beforeUploadImage"
          :file-list="[]"
          @change="uploadImageBookId = record.id"
        >
          <div v-if="!text">
            <div class="ant-upload-text">上传</div>
          </div>
          <div v-else class="image-block">
            <img :src="text" />
          </div>
        </a-upload>
      </div>
      <div slot="bookType" slot-scope="text">
        <span v-if="text === 1">计算机</span>
        <span v-if="text === 2">漫画</span>
        <span v-if="text === 3">人际关系</span>
      </div>
      <div class="remark-slot" slot="remark" slot-scope="text,record">
        <div>{{text}}</div>
        <a-button type="link" @click="editRemark(record)">编辑备注</a-button>
      </div>
    </a-table>
    <a-modal v-model="editRemarkVisible" title="编辑备注" @ok="handleRemarkOk" closable>
      <a-textarea
      v-model="tempRemarkValue"
      :auto-size="{ minRows: 3, maxRows: 5 }"
    />
    </a-modal>
  </div>
</template>

<script>
import EditableDetail from '../../components/EditableDetail.vue'
import { bookSearchModel, values } from './bookSearchModel'
import columns from './bookTableColumns'
import { get, put } from '../../utils/apiHelper'
import { getBase64URL } from '../../utils/image'
export default {
  name: 'book',
  components: { EditableDetail },
  data() {
    return {
      searchModel: bookSearchModel,
      searchValue: values,
      bookColumns: columns,
      bookData: [],
      pagination: {
        total: 0
      },
      uploadImageBookId: '',
      editRemarkVisible: false,
      tempRemarkValue: '',
      updateRemarkBookId: ''
    }
  },
  methods: {
    searchBook(pageIndex) {
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
      get('book', params).then(res => {
        this.bookData = res.data
        this.pagination.total = res.total
      }).catch(err => {
        this.$notification.error({
          message: '查询失败',
          description: err.message
        });
      })
    },
    onPageChange(pagination) {
      this.searchBook(pagination.current - 1)
    },
    beforeUploadImage(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
      if (!isJpgOrPng) {
        this.$notification.error({
          message: '上传图片失败',
          description: '请上传JPG图片'
        })
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$notification.error({
          message: '上传图片失败',
          description: '请上传小于2MB的图片'
        })
      }
      return isJpgOrPng && isLt2M
    },
    async uploadImage(value) {
      const base64URL = await getBase64URL(value.file)
      await put('book/image', {
        id: this.uploadImageBookId,
        imageBase64: base64URL
      }).then(res => {
        const book = this.bookData.find(b => b.id == this.uploadImageBookId)
        book.image = base64URL
      }).catch(err => {
        this.$notification.error({
          message: '上传图片失败',
          description: err.message
        })
      })
    },
    editRemark(book) {
      this.updateRemarkBookId = book.id
      this.tempRemarkValue = book.remark
      this.editRemarkVisible = true
    },
    handleRemarkOk() {
      put('book/remark', {
        id: this.updateRemarkBookId,
        remark: this.tempRemarkValue
      }).then(res => {
        const book = this.bookData.find(b => b.id == this.updateRemarkBookId)
        book.remark = this.tempRemarkValue
        this.editRemarkVisible = false
      }).catch(err => {
        this.$notification.error({
          message: '修改备注失败',
          description: err.message
        })
      })
    }
  },
  mounted() {
    this.searchBook(0)
  }
}
</script>

<style>
.image-slot .ant-upload-picture-card-wrapper {
  display: flex;
  justify-content: center;
}
</style>