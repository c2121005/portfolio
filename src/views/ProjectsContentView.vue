<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import ProjectDetail from '../components/ProjectDetail.vue'

const props = defineProps({
  id: [String, Number], // ⭕ 寬容型態，接受字串或數字
  projects: Array  // 由 App.vue 傳下來的共享資料
})

const router = useRouter()

// 依據路由參數 id，過濾出該項作品的完整物件
const targetProject = computed(() => {
  if (!props.projects) return null
  // 🔍 網址抓下來的 id (props.id) 是字串型態，
  // 為了安全，我們通通轉成 String 來比對，就不會因為強轉 parseInt 失敗而 error 了！
  return props.projects.find(p => String(p.id) === String(props.id))
})

const goBack = () => {
  router.push('/projects')
}
</script>

<template>
  <div v-if="targetProject">
    <ProjectDetail :project="targetProject" @back="goBack" />
  </div>

  <div v-else class="not-found">
    <p>[ ERR: PROJECT NOT FOUND ]</p>

    <div class="debug-box">
      <h4>🕵️‍♂️ 核心數據體檢：</h4>
      <p><strong>1. 目前網址傳過來的 id：</strong> <span class="highlight">"{{ props.id }}"</span> (型態: {{ typeof props.id }})
      </p>
      <p><strong>2. 父層傳下來的 projects 數量：</strong> <span class="highlight">{{ props.projects ? props.projects.length : 0
      }}</span> 筆</p>
      <p v-if="props.projects && props.projects.length > 0">
        <strong>3. 現有的作品 ID 清單：</strong>
        <span class="highlight">[{{props.projects.map(p => p.id).join(', ')}}]</span>
      </p>
    </div>

    <button @click="goBack" class="debug-back-btn">GO BACK</button>
  </div>
</template>

<style scoped>
.not-found {
  padding: 4rem;
  text-align: center;
  font-family: monospace;
  color: #D93829;
  font-weight: bold;
}

/* 瑞士粗獷風格除錯框 */
.debug-box {
  margin: 2rem auto;
  max-width: 500px;
  padding: 1.5rem;
  border: 2px dashed #1A3B8B;
  background-color: #ffffff;
  color: #1A3B8B;
  text-align: left;
  font-size: 0.85rem;
  font-weight: normal;
}

.highlight {
  color: #D93829;
  background-color: rgba(219, 56, 41, 0.1);
  padding: 0.1rem 0.4rem;
  font-weight: bold;
}

.debug-back-btn {
  margin-top: 1rem;
  background-color: #1A3B8B;
  color: #F9EFE6;
  border: none;
  padding: 0.5rem 1rem;
  font-family: monospace;
  cursor: pointer;
}
</style>