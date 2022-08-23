import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse:false,
    tabsList: [
        {
            path: '/home',
            label: '首页',
            icon: 'home'
        }
    ],
    currentMenu: null,
    menu: [
      {
        path: "/home",
        name: "roleList",
        label: "角色管理",
        icon: "s-home",
      },
      {
        path: "/usersList",
        name: "usersList",
        label: "用户管理",
        icon: "video-play",
      },
      {
        path: "/dataCollection",
        name: "dataCollection",
        label: "数据展示",
        icon: "s-claim",
      },
      {
        path: "/projectList",
        name: "projectList",
        label: "项目管理",
        icon: "setting",
      },
      {
        label: "其他",
        icon: "location",
        children: [
          {
            path: "/page1",
            name: "page1",
            label: "页面1",
            icon: "setting",
          },
          {
            path: "/page2",
            name: "page2",
            label: "页面2",
            icon: "setting",
          },
        ],
      },
    ],
  },
  mutations: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    selectMenu(state, val) {
      if (val.name !== 'roleList') {
          state.currentMenu = val
          const result = state.tabsList.findIndex(item => item.name === val.name)
          if (result === -1) {
              state.tabsList.push(val)
          }
      } else {
          state.currentMenu = null
      }
  },
  closeTag(state, val) {
    const result = state.tabsList.findIndex(item => item.name === val.name)
    state.tabsList.splice(result, 1)
},
  },
  actions: {
  },
  modules: {
  }
})
