const home = {
    state: {
        homeCount: 1
    },
    mutations: {
        CHANG_HOMECOUNT: (state, currentValue) => {
            state.homeCount = currentValue;
        }
    },
    actions: {
        changeHomeCount({ commit }, currentValue) {
            commit('CHANG_HOMECOUNT', currentValue);
        }
    }
};

export default home;