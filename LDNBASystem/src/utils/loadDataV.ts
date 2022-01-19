import dataV from '@jiaminghi/data-view'
import { App } from 'vue';
function loadDataV (Vue:App<Element>) {
    Vue.use(dataV)
}
export default loadDataV;