<template>
  <div class="navbar">
    <!-- <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" /> -->

    <img class="logo" src="@/assets/common/logoone.png" alt="">
    <!-- <breadcrumb class="breadcrumb-container" /> -->
    <div class="right-menu">
      <!-- <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <div class="user-warper">
            <img src="@/assets/common/user.png">
            <span>欢迎您！admin</span>
            <span @click="logout">退出</span>
            <i class="el-icon-caret-bottom" />
          </div>

        </div>
      </el-dropdown> -->
      <el-row>
        <el-col :span="5">
          <div class="avatar grid-content bg-purple">
            <img src="@/assets/common/user.png">
          </div>
        </el-col>
        <el-col :span="13">
          <div class="grid-content bg-purple-light">
            <span>欢迎您！{{ username }}</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple" @click="logout">
            <span>退出</span>
            <i class="el-icon-caret-bottom" />
          </div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
// import Hamburger from '@/components/Hamburger'

export default {
  components: {
    // Hamburger
  },
  data() {
    return {
      username: this.$store.getters.name
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login`)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1999;
    background-image: url('~@/assets/common/backgroundone.png');//背景图片
    background-size: cover;
    background-repeat: no-repeat;
    .logo{
    width: 88px;
    position: relative;
    top: 4px;
    margin-top: 6px;
    margin-left: 15px;
    }
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    width: 240px;
    margin-right: 24px;
    .loginout{
      width: 50px;
      padding-left: 20px;
    }

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;
      color: #fff;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
  .avatar{
    margin-top: 8px;
  }
}
</style>
