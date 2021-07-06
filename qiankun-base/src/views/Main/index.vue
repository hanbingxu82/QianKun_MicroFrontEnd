<!--
 * @Author: your name
 * @Date: 2021-04-02 14:05:48
 * @LastEditTime: 2021-07-05 13:50:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun/qiankun-base/src/views/Main/index.vue
-->
<template>
  <div class="main-content">
    <el-container>
      <!-- 顶部 -->
      <el-header>
        <router-link to="/home">
          <img src="../../assets/logo.png" class="logo" />
        </router-link>
      </el-header>
      <el-container>
        <!-- 左侧导航 -->
        <el-aside>
          <el-menu default-active="1" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" :router="true">
            <el-menu-item index="/home">
              <i class="el-icon-menu"></i>
              <span slot="title">Home</span>
            </el-menu-item>
            <el-menu-item index="/about">
              <i class="el-icon-menu"></i>
              <span slot="title">About</span>
            </el-menu-item>
            <el-menu-item index="/main/vue">
              <i class="el-icon-document"></i>
              <span slot="title">qiankun-vue</span>
            </el-menu-item>
            <el-menu-item index="/main/react">
              <i class="el-icon-setting"></i>
              <span slot="title">qiankun-react</span>
            </el-menu-item>
            <el-menu-item index="/main/reactBlog">
              <i class="el-icon-setting"></i>
              <span slot="title">qiankun-reactBlog</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <!-- 内容 -->
          <el-main>
            <router-view></router-view>
            <div id="vue"></div>
            <div id="react"></div>
            <div id="reactBlog"></div>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { start } from "qiankun";

export default {
  name: "Main",
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  },
};
</script>

<style lang="less" scoped>
.main-content {
  height: 100%;
  & > .el-container {
    height: 100%;
    .el-header {
      background-color: #3f4044;
      display: flex;
      align-items: center;
      .logo {
        height: 40px;
        width: auto;
        cursor: pointer;
      }
    }
    & > .el-container {
      height: 100%;
      & > .el-aside {
        background-color: #d3dce6;
        width: 200px !important;
        .el-menu-vertical-demo {
          height: 100%;
        }
      }
      .el-container {
        .el-main {
          //   background-color: #e9eef3;
          //   color: #333;
        }
      }
    }
  }
}
</style>
