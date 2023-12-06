const initialState = {
  isTopMenu: false,
  themeColor: 'navy'
};

export const common = {
  namespaced: true,
  state: initialState,
  actions: {
    toggleTopMenu({ commit }) {
      commit('toggleTopMenu');
    },
    setThemeColor({ commit }, value) {
      commit('setThemeColor', value);
    }
  },
  mutations: {
    toggleTopMenu(state) {
      state.isTopMenu = !state.isTopMenu;
    },
    setThemeColor(state, value) {
      state.themeColor = value;
    }
  }
};