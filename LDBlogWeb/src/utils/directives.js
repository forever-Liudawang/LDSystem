import Vue from 'vue'
Vue.directive('permission', {
  inserted(el, binding, vnode) {
    const {value} = binding
    const roleAuth = localStorage.getItem('BLOGROLE')
    if(roleAuth == value.role){
    }else{
      el.disabled = true
      el.classList.add('notHaveAuth')
      el.onclick=function(){
        console.log('1233', 1233)
      }
    }
  }
})
