<template>
  <el-container class="body">
    <el-header class="head">
      <i class="el-icon-s-fold" @click="isShow = !isShow"></i>
      系统
    </el-header>
    <el-container class="wrapper">
      <el-aside class="aside" :class="{'hidden-menu': isShow}">
        <el-menu
          default-active="2"
          router
          class="el-menu-vertical-demo">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>绩效考核</span>
            </template>
            <el-menu-item index="1-4" route="/user">
              <template slot="title">考核结果</template>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="2" route="/home">
            <i class="el-icon-menu"></i>
            <span slot="title">个人档案</span>
          </el-menu-item>
          <el-menu-item index="3" route="/login">
            <i class="el-icon-document"></i>
            <span slot="title">医疗绩效</span>
          </el-menu-item>
          <el-menu-item index="4" disabled>
            <i class="el-icon-setting"></i>
            <span slot="title">其它</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "layout",
    data() {
      return {
        isShow: true
      }
    },
    methods: {}
  }
</script>

<style scoped>
  @media screen and (max-width: 414px) {
    .aside {
      background-color: antiquewhite !important;
    }

    .wrapper {
      flex-direction: column;
    }

    .aside {
      width: 100% !important;
      max-height: 100%;
      transition: max-height 1s ease;
    }

    .hidden-menu {
      max-height: 0;
    }
  }

  .body {
    height: 100%;
    background-color: #f5faff;
  }

  .head {
    display: flex;
    box-sizing: content-box;
    align-items: center;
    justify-content: space-between;
  }

  .head i {
    vertical-align: bottom;
    font-size: 22px;
    cursor: pointer;
  }

  .aside {
    background-color: #42b983;
  }

  .main {

  }
</style>
