import { defineConfig,loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
//按需加载
import styleImport from "vite-plugin-style-import"
const resolve = (name:string)=> path.resolve(__dirname.toString(),name)
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs:[
        {
          libraryName:'vant',
          esModule: true,
          resolveComponent: (name:string):string=> `vant/es/${name}style`
        }
      ]
    })
  ],
  resolve:{
    alias:[
      {find:"@src",replacement:resolve("src")}
    ]
  },
})
function __dirname(__dirname: any, name: string) {
  throw new Error('Function not implemented.')
}

