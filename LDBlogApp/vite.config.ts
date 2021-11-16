import { ConfigEnv, defineConfig,loadEnv, UserConfigExport} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

import {viteVConsole} from "vite-plugin-vconsole"
//按需加载
import styleImport from "vite-plugin-style-import"
// 通过loadenv
// loadEnv(mode, process.cwd()).VITE_APP_PATH
const resolve = (name:string)=> path.join(__dirname,name)
export default ({ command, mode }: ConfigEnv):UserConfigExport=>{
  return defineConfig({
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
      }),
      viteVConsole({
        entry: resolve('src/main.ts'),
        localEnabled: command === 'serve',
        enabled: command === 'build' && mode === 'test',
        config: {
          maxLogNumber: 1000,
          theme: 'light'
        }
      })
    ],
    resolve:{
      alias:[
        {find:"@src",replacement:resolve("src")}
      ]
    },
  })
}
