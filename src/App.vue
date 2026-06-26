<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'

// 需求 6：作品集資料寫在 Vue 檔案中集中管理
const projects = ref([
  {
    id: 1,
    title: '清水眷村文化園區網站改版',
    category: ['VUE', 'JAVASCRIPT', 'USER & GRAPHIC DESIGN'],
    tagline: 'A minimalist online shopping experience.',
    tech: 'Vue 3 / Vite / Pinia / Vue 3 / Vite / Pinia / Vue 3 / Vite / Pinia',
    description: 'We abandoned heavy grid systems and embraced typographic tension We abandoned heavy grid systems and embraced typographic tension We abandoned heavy grid systems and embraced typographic tension We abandoned heavy grid systems and embraced typographic tension We abandoned heavy grid systems and embraced typographic tension We abandoned heavy grid systems and embraced typographic tension We abandoned heavy grid systems and embraced typographic tension We abandoned heavy grid systems and embraced typographic tension We abandoned heavy grid systems and embraced typographic tension ',
    image: '/images/project1.png',
    links: [
      { label: 'OUR LIVE DEMO', url: 'https://nchu-11503-qingshui-artvillage.dev-hub.io/' },
      { label: '原始網站', url: 'https://www.qingshuiartvillage.net' },
    ]
  },
  {
    id: 2,
    title: 'E Commerce Platform',
    category: ['Vue', 'JavaScript'],
    tagline: 'A minimalist online shopping experience.',
    tech: 'Vue 3 / Vite / Pinia',
    description: 'We abandoned heavy grid systems and embraced typographic tension...',
    image: '/images/project1.png',
    links: [
      { label: 'LIVE DEMO', url: 'https://example.com' },
      { label: 'GITHUB REPO', url: 'https://github.com' }
    ]
  },
  {
    id: 3,
    title: 'E Commerce Platform',
    category: ['Vue', 'JavaScript'],
    tagline: 'A minimalist online shopping experience.',
    tech: 'Vue 3 / Vite / Pinia',
    description: 'We abandoned heavy grid systems and embraced typographic tension...',
    image: '/images/project1.png',
    links: [
      { label: 'LIVE DEMO', url: 'https://example.com' },
      { label: 'GITHUB REPO', url: 'https://github.com' }
    ]
  },
  {
    id: 4,
    title: 'E Commerce Platform',
    category: ['Vue', 'JavaScript'],
    tagline: 'A minimalist online shopping experience.',
    tech: 'Vue 3 / Vite / Pinia',
    description: 'We abandoned heavy grid systems and embraced typographic tension...',
    image: '/images/project1.png',
    links: [
      { label: 'LIVE DEMO', url: 'https://example.com' },
      { label: 'GITHUB REPO', url: 'https://github.com' }
    ]
  },
  {
    id: 5,
    title: 'E Commerce Platform',
    category: ['Vue', 'JavaScript'],
    tagline: 'A minimalist online shopping experience.',
    tech: 'Vue 3 / Vite / Pinia',
    description: 'We abandoned heavy grid systems and embraced typographic tension...',
    image: '/images/project1.png',
    links: [
      { label: 'LIVE DEMO', url: 'https://example.com' },
      { label: 'GITHUB REPO', url: 'https://github.com' }
    ]
  },
])

// 挑戰題：收藏狀態清單（紀錄被收藏的作品 id）
const favorites = ref([])

const handleToggleFavorite = (id) => {
  const index = favorites.value.indexOf(id)
  if (index === -1) {
    favorites.value.push(id) // 未收藏則加入
  } else {
    favorites.value.splice(index, 1) // 已收藏則移除
  }
}
</script>

<template>
  <div class="app-wrapper">
    <NavBar :favorite-count="favorites.length" />

    <div class="main-content">
      <router-view :projects="projects" :favorites="favorites" @toggle-favorite="handleToggleFavorite" />
    </div>
  </div>
</template>

<style>
/* 這裡不加 scoped，作為全站環境的基礎底層設定 */
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #F9EFE6;
  /* 你要的粉白主底色 */
  color: #222222;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.app-wrapper {
  min-height: 100vh;
  position: relative;
}

.main-content {
  padding-top: 5rem;
  /* 保留頂部導覽列的高度空間 */
}

/* 全局反白特殊色 (紅底白字，瑞士風格加分細節) */
::selection {
  background-color: #D93829;
  color: #F9EFE6;
}
</style>