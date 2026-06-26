<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ProjectCard from '../components/ProjectCard.vue'

// 承接從 App.vue 傳下來的共享資料
const props = defineProps({
  projects: Array,
  favorites: Array
})

const emit = defineEmits(['toggle-favorite'])
const router = useRouter()

// 1. 宣告目前選中的分類狀態，預設為 'ALL'
const currentCategory = ref('ALL')

// 2. 定理所有的分類標籤清單（要跟資料庫/陣列中的 category 字串對應）
const categories = ref(['ALL', 'WEB APP', 'BRANDING', 'CONCEPT'])

// 3. 核心邏輯：使用 computed 動態篩選符合當前分類的作品
const filteredProjects = computed(() => {
  if (currentCategory.value === 'ALL') {
    return props.projects // 若選 ALL 則回傳全部
  }
  return props.projects.filter(project => project.category === currentCategory.value)
})

// 點擊查看作品詳細頁的路由跳轉
const handleViewDetail = (id) => {
  router.push(`/projects/${id}`)
}

const handleToggleFav = (id) => {
  emit('toggle-favorite', id)
}
</script>

<template>
  <div class="projects-view">
    <div class="archive-header">
      <div class="archive-tag">[ INDEX OF ARCHIVES ]</div>
      <div class="project-count">TOTAL: {{ filteredProjects.length }}</div>
    </div>

    <div class="filter-wrapper">
      <div class="filter-buttons">
        <button v-for="cat in categories" :key="cat" class="filter-btn"
          :class="{ 'filter-active': currentCategory === cat }" @click="currentCategory = cat">
          [ {{ cat }} ]
        </button>
      </div>
      <div class="filter-line"></div>
    </div>

    <div class="projects-grid" v-if="filteredProjects.length > 0">
      <div v-for="proj in filteredProjects" :key="proj.id" class="grid-item">
        <ProjectCard :project="proj" :is-favorite="favorites.includes(proj.id)" @view="handleViewDetail"
          @toggle-favorite="handleToggleFav" />
      </div>
    </div>

    <div class="empty-state" v-else>
      NO PROJECTS FOUND IN THIS CATEGORY.
    </div>
  </div>
</template>

<style scoped>
.projects-view {
  padding: 2rem;
  background-color: #F9EFE6;
  min-height: calc(100vh - 5rem);
}

@media (min-width: 768px) {
  .projects-view {
    padding: 4rem;
  }
}

.archive-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.archive-tag {
  font-family: monospace;
  font-size: 0.75rem;
  color: #D93829;
  font-weight: 700;
}

.project-count {
  font-family: monospace;
  font-size: 0.75rem;
  color: #1A3B8B;
  font-weight: 700;
}

/* 分類按鈕區排版 */
.filter-wrapper {
  margin-bottom: 3rem;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.filter-btn {
  background: none;
  border: none;
  color: #1A3B8B;
  font-family: monospace;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  transition: all 0.2s ease;
}

.filter-btn:hover {
  color: #D93829;
}

/* 當前被選中分類的強烈紅底反白樣式 */
.filter-btn.filter-active {
  background-color: #D93829;
  color: #F9EFE6;
}

.filter-line {
  height: 2px;
  background-color: #1A3B8B;
  width: 100%;
}

/* ==========================================================================
   全新修正版 RWD Grid (修正 columns 拼字)
   ========================================================================== */
.projects-grid {
  display: grid;
  /* ⭕ 注意：是 columns 不是 cols！ */
  grid-template-columns: 1fr;
  gap: 2.5rem;
  width: 100%;
}

.grid-item {
  width: 100%;
  min-width: 0;
  /* 防止內層元件超出邊界 */
}

/* 💻 當螢幕寬度達到 1024px（筆電）：切換為 2 欄 */
@media screen and (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* 🖥️ 當螢幕寬度達到 1440px 以上（大螢幕）：切換為 3 欄 */
@media screen and (min-width: 1440px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.empty-state {
  text-align: center;
  padding: 6rem 0;
  font-family: monospace;
  color: #1A3B8B;
  font-weight: bold;
  border: 2px dashed rgba(26, 59, 139, 0.3);
}
</style>