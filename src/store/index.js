import { createStore } from "vuex";
import state from "./modules/state";
import * as actions from "./modules/actions";
import * as mutations from "./modules/mutations";
import * as getters from "./modules/getters";

const store = createStore({
  state,
  actions,
  mutations,
  getters,
});

export default store;
