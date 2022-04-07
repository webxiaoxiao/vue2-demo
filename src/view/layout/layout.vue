<template>
  <el-container class="body">
    <el-header class="head">
      <i class="el-icon-s-fold" @click="isShow = !isShow"></i>
      系统
      <el-dropdown
        style="line-height: normal;"
        class="dropdown"
        @command="handCommand"
        @visible-change="v => (dropdownVisible = v)"
      >
        <div>
          <i style="padding: 0 6px" class="el-icon-user"></i>
          <span>
            用户名
<!--              {{ $settings.user.name }}-->
              <i
                :class="
                  dropdownVisible ? 'el-icon-arrow-up' : 'el-icon-arrow-down'
                "
              ></i>
            </span>
        </div>

        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="profile">个人中心</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
          <el-menu-item index="3" route="/pdf">
            <i class="el-icon-document"></i>
            <span slot="title">pdf</span>
          </el-menu-item>
          <el-menu-item index="5" route="/map">
            <i class="el-icon-document"></i>
            <span slot="title">map</span>
          </el-menu-item>
          <el-menu-item index="4" disabled>
            <i class="el-icon-setting"></i>
            <span slot="title">其它</span>
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
  import {removeToken} from "../../utils/cache";

  export default {
    name: "layout",
    data() {
      return {
        isShow: true,
        dropdownVisible: false
      }
    },
    methods: {
      handCommand(command) {
        if (command === 'profile') this.profile();
        if (command === 'logout') this.logout();
      },
      logout() {
        removeToken();
        window.location.href = '/login';
      },
      profile() {
        this.$router.push({
          path: 'profile'
        });
      }
    }
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
    /*background-color: #42b983;*/
    background-color: #fff;
  }

  .main {

  }
</style>
