<!--
 * @Author: your name
 * @Date: 2021-06-27 19:23:58
 * @LastEditTime: 2021-06-28 15:26:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /hx/examples/views/ComponentsLibrary/Forms/InputNumber.vue
-->

<template>
  <div>
    <h2
      id="inputNumber-an-niu"
      style='box-sizing: border-box; margin: 0px; padding: 10px 0px; font-size: 28px; font-weight: 400; color: rgb(31, 47, 61); border-bottom: 1px solid rgb(197, 217, 232); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#inputNumber-an-niu" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;InputNumber 数字输入
    </h2>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      用于输入数字。
    </p>
    <h3
      id="ji-chu-yong-fa"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#ji-chu-yong-fa" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;基础用法
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      基础的数字输入用法。
    </p>
    <p>
      <br />
    </p>
    <Demo>
      <div slot="source">
        <tb-input-number v-model="yourVModel" />
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html1">
        </code>
      </pre>
    </Demo>
    <h3
      id="bu-shu-yu-jing-du"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#bu-shu-yu-jing-du" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;步数与精度
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设定步数与精度 step每次行走的步数 步数小数点最好不要超过15位小数 因为可能会失去精度。
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <tb-input-number v-model="yourVModel1" :step="0.222" />
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html2">
        </code>
      </pre>
    </Demo>
    <h3
      id="min-max"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#min-max" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;最大与最小值
    </h3>
    <p
      style='box-sizing: border-box; margin-top: 1em; margin-bottom: 1em; padding: 0px; color: rgba(0, 0, 0, 0.85); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-size: 14px; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      设置数值传输的最大值与最小值
    </p>
    <p>
      <br />
    </p>

    <Demo>
      <div slot="source">
        <div>
          <tb-input-number v-model="yourVModel2" :min="2" :max="10" />
        </div>
      </div>
      <pre slot="highlight" v-highlight>
        <code class="javascript"  v-text="html3">
        </code>
      </pre>
    </Demo>

    <h3
      id="rowInputNumber"
      style='box-sizing: border-box; margin: 36px 0px 20px; padding: 0px; font-size: 22px; font-weight: 400; color: rgb(31, 47, 61); font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; white-space: normal; background-color: rgb(255, 255, 255);'
    >
      <a href="#rowInputNumber" class="header-anchor" style="box-sizing: border-box; color: rgb(16, 137, 255); text-decoration-line: none;">¶</a>&nbsp;InputNumber props
    </h3>
    <p>
      <br />
    </p>
    <tb-table-eazy :rows="rowInputNumber" :cols="col"></tb-table-eazy>
    <RightSmallNav :rightTitle="rightTitle" @goMeowPoint="goMeowPoint" />
  </div>
</template>

<script>
import useScroll from "../../../utils/mixins";
import RightSmallNav from "../../../components/RightSmallNav.vue";
export default {
  name: "InputNumber",
  components: { RightSmallNav },
  data() {
    return {
      yourVModel: 0,
      yourVModel1: 0,
      yourVModel2: 2,

      //   定义当前传递过来的数据是所有类型的数据
      rightTitle: [
        { title: "InputNumber 按钮", id: "inputNumber-an-niu" },
        { title: "基础用法", id: "ji-chu-yong-fa" },
        { title: "步数与精度", id: "bu-shu-yu-jing-du" },
        { title: "最大与最小值", id: "min-max" },
        { title: "InputNumber props", id: "rowInputNumber" },
      ],
      rowInputNumber: [
        {
          Parameters: "value / v-model",
          Explain: "绑定值",
          Types: "number",
          Optional: "-",
          Default: "-",
        },

        {
          Parameters: "min",
          Explain: "最小传输值",
          Types: "number",
          Optional: "-",
          Default: "0",
        },
        {
          Parameters: "max",
          Explain: "最大传输值",
          Types: "number",
          Optional: "-",
          Default: "0",
        },
        {
          Parameters: "step",
          Explain: "步数，每次行走的步数  步数小数点最好不要超过15位小数  如果超过就会失去精度",
          Types: "number",
          Optional: "-",
          Default: "1",
        },
        {
          Parameters: "mouseDownSpeed",
          Explain: "鼠标按下的时间间隔多长时间毫秒涨一次步数",
          Types: "number",
          Optional: "-",
          Default: "100",
        },
        {
          Parameters: "inputClass",
          Explain: "文本框的样式",
          Types: "string",
          Optional: "-",
          Default: "tb-input-number__input",
        },
        {
          Parameters: "buttonClass",
          Explain: "两个按钮的样式class",
          Types: "string",
          Optional: "-",
          Default: "tb-input-number__button",
        },
      ],
      html1: `    <template>
        <div>
            <tb-input-number  v-model="yourVModel" />
        </div>
    </template>

    <script>
        export default {
            data () {
            return {
                yourVModel: 0
            };
            }
        }
    <\/script>
              `,
      html2: `    <template>
        <div>
            <tb-input-number  v-model="yourVModel1" :step="0.222"/>
        </div>
    </template>

    <script>
        export default {
            data () {
            return {
                yourVModel1: 0
            };
            }
        }
    <\/script>
              `,
      html3: `    <template>
        <div>
            <tb-input-number  v-model="yourVModel2" :min="2" :max="10"/>
        </div>
    </template>

    <script>
        export default {
            data () {
            return {
                yourVModel2: 2
            };
            }
        }
    <\/script>
              `,

    };
  },
  /**
   * @description: 引入minxns   src/utils/mixins.ts
   * @param {rightTitle}  rightTitle:右侧right浮起框数据
   * @return {*}
   */
  mixins: [useScroll],
  methods: {
    /**
     * @description: 点击右侧区域跳转至对应的html区域
     * @param {id:string} id:id节点地址
     * @return {*}
     */
    goMeowPoint(id) {
      const containern = window.document.querySelector("#" + id);
      containern.scrollIntoView(true);
    },
  },
};
</script>
<style lang="less" scoped>
.tb-inputNumber {
  margin: 5px;
}
.tb-input-number {
  width: 300px;
}
</style>
