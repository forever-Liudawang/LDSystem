<template>
  <div>
    <h1>Hom2</h1>
    <input type="number" v-fixed:[direction]="300" v-model="position">
    <input type="text" v-fixed:[direction]="position" />
    <teleport to="body">
        <div >
            123
        </div>
    </teleport>
  </div>
  -------------------------------------------
</template>

<script>
import { reactive, toRefs, onMounted,ref} from "vue";
import LDMixin from "../utils/MixinCom";
export default {
  name: "",
  mixins: [LDMixin],
  directives: {
    fixed: {
      mounted(el, binding) {
        console.log(`el`, el);
        el.style.position = "fixed";
        const dir = binding.arg || "top";
        el.style[dir] = binding.value + "px";
      },
      updated(el, binding) {
        const s = binding.arg || 'top'
        el.style[s] = binding.value + 'px'
      }
    },
  },
  setup() {
    const data = toRefs(reactive({
        position:0,
        direction:"left"
    }));
    onMounted(() => {});
    return {
      ...data
    };
  },
};
</script>
<style scoped>
</style>