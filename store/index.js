import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)
// import commeon from "@/store/modules/commeon.js"
import audio from "@/store/modules/audio.js"
import user from "@/store/modules/user.js"

export default new Vuex.Store({
	modules: {
		audio,
		user,
		
	}
})
