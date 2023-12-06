import { createStore } from "vuex";
import { common } from "./common";
import { auth } from "./auth.module";

const store = createStore({
    modules: {
        common,
        auth
    },
});

export default store;