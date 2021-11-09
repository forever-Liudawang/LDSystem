import { reactive, toRefs, onMounted } from 'vue'
const LDMixin = {
    created(){
        console.log(this.$data,"this")
    },
    data(){
        return {
            name:"mixinCom"
        }
    }
}
export default LDMixin