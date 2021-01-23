<template>
  <a-layout id="components-layout-demo-responsive">
    <a-layout-sider breakpoint="lg" collapsed-width="0">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="inline"
        :selectedKeys="[lastMenuKey]"
        @click="menuClick"
      >
        <a-menu-item key="1">
          <span class="nav-text">订单管理</span>
        </a-menu-item>
        <a-menu-item key="2">
          <span class="nav-text">发票管理</span>
        </a-menu-item>
        <a-menu-item key="3">
          <span class="nav-text">书本管理</span>
        </a-menu-item>
        <a-menu-item key="4">
          <span class="nav-text">价格管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "layout",
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState({
      lastMenuKey: (state) => state.app.lastMenuKey,
    }),
  },
  watch: {
    lastMenuKey() {
      switch (this.lastMenuKey) {
        case "1":
          this.$router.push("/order");
          break;
        case "2":
          this.$router.push("/invoice");
          break;
        case "3":
          this.$router.push("/book");
          break;
        case "4":
          this.$router.push("/price");
          break;
      }
    },
  },
  methods: {
    menuClick(menuValue) {
      this.$store.commit("setLastMenuKey", menuValue.key);
    },
  },
  mounted() {
    if(this.$route.path !== '/order' && this.lastMenuKey === '1') {
      this.$router.push("/order");
    }
    if(this.$route.path !== '/invoice' && this.lastMenuKey === '2') {
      this.$router.push("/invoice");
    }
    if(this.$route.path !== '/book' && this.lastMenuKey === '3') {
      this.$router.push("/book");
    }
    if(this.$route.path !== '/price' && this.lastMenuKey === '4') {
      this.$router.push("/price");
    }
  },
};
</script>

<style>
#components-layout-demo-responsive {
  height: 100%;
}
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>