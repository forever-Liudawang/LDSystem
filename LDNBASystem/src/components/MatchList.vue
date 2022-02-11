<script setup lang="ts">
import { reactive, ref, toRefs, defineProps,onMounted,toRaw} from 'vue'
const dataList = ref<any>([])
const {matchList} = defineProps({
  matchList:{
    type: Array,
    required: true,
    default: ()=>[]
  }
})
function handleData(data:any [] = []) {
  console.log('data', data)
    let list = []
    for(let i=0;i<data.length;i++){
      const temp:any = {}
      const games = data[i].games || []
      const date = new Date(data[i].utcMillis)
      const day = date.getDate()
      const month = date.getMonth()+1
      const week = date.getDay()
      temp["time"] = `${month} ${day} 星期 ${week}`
      let gameData = []
      for(let j=0;i<games.length;j++){
        const t = games[i]
        const game:any= {}
        const gameDate = new Date(t.profile.utcMillis)
        game["date"] = gameDate.getHours() + "" + (gameDate.getMinutes() > 10 ?gameDate.getMinutes(): gameDate.getMinutes()+"0")
        game["team"] = t.homeTeam.profile.displayAbbr + "VS" + t.awayTeam.profile.displayAbbr
        game["score"] = t.boxscore.awayScore > 0 ? t.boxscore.awayScore - t.boxscore.homeScore: "-"
        game["address"] = t.profile.arenaName
        game["link"] = t.urls || []
        gameData.push(game)
      }
      temp["data"] = gameData
      console.log('temp :>> ', temp);
      list.push(temp)
    } 
    dataList.value = list
}
onMounted(()=>{
  handleData(toRaw(matchList))
  console.log(dataList,'dataList')
})
</script>

<template>
  <div>
    <div class="matchBox">
      <el-tag type="success">2月11日 星期五</el-tag>
      <el-table :data="[]" border style="width: 100%" size="mini">
        <el-table-column label="时间" prop="date"/>
        <el-table-column label="球队" prop="team"/>
        <el-table-column label="比分" prop="score" />
        <el-table-column label="球馆" prop="address" />
        <el-table-column label="链接" prop="link" />
      </el-table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.matchBox {
  width: 100%;
}
</style>
