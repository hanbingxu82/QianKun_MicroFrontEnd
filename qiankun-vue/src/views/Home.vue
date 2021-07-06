<template>
  <div class="home">
    默认的base -- {{ userName }}
    <el-button @click="changeActions">改变actions值</el-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      userName: "init userName",
    };
  },
  mounted() {
    // 增加state监听，当mt数据发生变化的时候，我们修改name，体现在页面上
    this.$onGlobalStateChange((state, prev) => {
      if (state.userName !== prev.userName) {
        this.userName = state.userName;
      }
    });
  },
  methods: {
    changeActions() {
      this.$setGlobalState({ userName: "小红" });
    },
  },
};
</script>