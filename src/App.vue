<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-locale-provider>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import { getWellKnown, refreshToken } from "./utils/ids4Helper";
import config from "./config/httpConfig";
export default {
  name: "App",
  data() {
    return {
      locale: zhCN,
    };
  },
  mounted() {
    getWellKnown();
    if (this.$store.state.app.refresh_token) {
      refreshToken({
        grant_type: config.ids4.refreshType,
        client_id: config.ids4.clientId,
        refresh_token: this.$store.state.app.refresh_token,
      });
    }
  },
};
</script>

<style>
#app {
  height: 100%;
}
</style>
