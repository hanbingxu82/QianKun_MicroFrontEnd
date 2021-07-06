<template>
  <div class="home">
    homeCount：
    <el-input-number
      v-model="count"
      @change="changeHomeCount"
      :min="1"
      :max="10"
      label="描述文字"
    ></el-input-number>
    <p></p>
    <el-button @click="changeActions">改变actions值</el-button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      count: 1,
    };
  },
  computed: {
    ...mapGetters(["homeCount"]),
  },
  methods: {
    changeHomeCount(currentValue, oldValue) {
      this.$store.dispatch("changeHomeCount", currentValue);
    },
    changeActions() {
      this.$actions.setGlobalState({ userName: '小王' });
    }
  },
};
</script>