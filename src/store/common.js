const isTopMenu = localStorage.getItem('isTopMenu');
const themeColor = localStorage.getItem('themeColor');

const initialState = {
  isTopMenu: isTopMenu ? isTopMenu : false,
  themeColor: themeColor ? themeColor : "navy",
}

export const common = {
  namespaced: true,
  state: initialState,
  actions: {
    toggleTopMenu({ commit }) {
      commit("toggleTopMenu")
    },
    setThemeColor({ commit }, value) {
      commit("setThemeColor", value)
    },
  },
  mutations: {
    toggleTopMenu(state) {
      state.isTopMenu = !state.isTopMenu
      localStorage.setItem('isTopMenu', state.isTopMenu);
    },
    setThemeColor(state, value) {
      state.themeColor = value;
      localStorage.setItem('themeColor', state.themeColor);
    },
  },
}
