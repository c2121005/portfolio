<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import project1 from '@/assets/img/1.webp'
import project2 from '@/assets/img/2.webp'
import project3 from '@/assets/img/3.webp'
import project4 from '@/assets/img/4.webp'
import project5 from '@/assets/img/5.webp'

// 需求 6：作品集資料寫在 Vue 檔案中集中管理
const projects = ref([
  {
    id: 1,
    title: '清水眷村文化園區網站改版',
    category: ['VUE', 'USER DESIGN', 'GRAPHIC DESIGN'],
    tagline: '讓眷村文化被看見，讓出發到訪變自然。',
    tech: 'Vue 3 / Vue Router / Pinia / JavaScript / Google Maps API / Figma / Html / CSS',
    description: `本專案以清水眷村文化園區現有網站為基礎，團隊共同討論重新梳理龐雜的資訊架構與頁面層級，解決原版痛點。後續使用 Figma 進行網站視覺設計和規劃元件庫，建立一個以使用者需求出發，導覽層級精簡、資訊更加完善、使用流程體驗更友善的新版網站。
    
    技術實作上，使用 Vue 建立模組化頁面與元件方便共同開發及維護，並透過 Vue Router 靈活調度首頁、展覽、交通、景點與活動報名等內容，打造無縫流暢的多頁式瀏覽體驗。以 Google Maps JavaScript API 實作景點地圖，支援 Marker 定位與外部導航連結，優化實際到訪流程。`,
    image: project1,
    links: [
      { label: 'ORIGINAL WEB', url: 'https://www.qingshuiartvillage.net' },
      { label: 'OUR LIVE DEMO', url: 'https://nchu-11503-qingshui-artvillage.dev-hub.io/' },
    ]
  },
  {
    id: 2,
    title: '個人音樂收藏庫',
    category: ['VUE'],
    tagline: '不追隨串流的節奏，只收藏對味的靈魂。',
    tech: 'Vue 3 / Html / CSS',
    description: `本專案為具有日系雜誌與策展風格的「個人音樂收藏庫」，將冰冷的資料管理轉譯為富有生活溫度的視覺空間。網頁消滅了所有銳利直角，以大圓角與柔和漸層勾勒出如白雲般的溫暖氛圍。
    
    技術實作上，透過 v-model 與 unshift 語法，讓新加入的音樂能即時置頂呈現. 運用 v-for 渲染 5 星級評分與 hoverRating 機制，並在滿分時以條件式類別（Conditional class）觸發特殊的三色漸層藝術外框。此外，利用 computed 屬性動態計算「總收藏數」與「平均星級」，同時實作了帶有數量徽章的膠囊分類篩選流。最後，內建預設封面與文字框防爆版設計，完美兼顧了視覺的精緻度。`,
    image: project2,
    links: [
      { label: 'LIVE DEMO', url: 'https://c2121005.github.io/MusicCollection/' },
      { label: 'GITHUB REPO', url: 'https://github.com/c2121005/MusicCollection' }
    ]
  },
  {
    id: 3,
    title: '會員小卡產生器',
    category: ['VUE'],
    tagline: 'Vue 表單與即時預覽',
    tech: 'Vue 3 / Html / CSS',
    description: `本專案為具有現代極簡格的「會員小卡產生器」，網頁採用雙欄佈局，將單調表單轉譯為即時互動，左側直覺配置參數，右側呈現精緻的卡片預覽。切換至 VIP 模式時，卡片會轉變為乾燥玫瑰粉漸層，帶來有儀式感的視覺體驗。
    
    技術實作上，透過 v-model.trim 實作表單與卡片資訊的雙向綁定，達成文字與圖片網址的即時同步與去空白校正。動態運用 computed 計算屬性建立智慧型顯示機制（isShow），讓卡片在使用者開始輸入姓名時才優雅現身。同時結合 v-if 與 HTML5 template 標籤，在不增加額外 DOM 節點的精簡架構下，靈活控制詳細資料區塊的展開與隱藏。最後，藉由動態類別綁定（:class）與 Vue 邏輯，完美整合年齡防呆防錯提示，並在未上傳頭像時自動遞補預設視覺。`,
    image: project3,
    links: [
      { label: 'LIVE DEMO', url: 'https://c2121005.github.io/membership/' },
      { label: 'GITHUB REPO', url: 'https://github.com/c2121005/membership' }
    ]
  },
  {
    id: 4,
    title: '視差滾動網頁設計',
    category: ['GRAPHIC DESIGN'],
    tagline: '更多樣化的網頁設計方法',
    tech: 'Html / CSS',
    description: `本專案為視差滾動設計的練習，以大地色系與溫暖的貓咪意象為核心，營造出療癒且舒適的視覺氛圍。網頁採用柔和的半透明黃橙色作為固定式導航列，並運用 background-attachment: fixed 技巧，讓多張貓咪滿版大圖在捲動時產生多層次的空間深邃感。
    
    視覺細節上，當滑鼠懸停於圓形貓咪 Logo 時，會觸發流暢的放大與 370 度大轉身動態特效，搭配半透明柔光遮罩與經典的圓角橢圓膠囊按鈕，完美將靜態影像轉化為充滿節奏感與沉浸感的動態故事長頁。`,
    image: project4,
    links: [
      { label: 'LIVE DEMO', url: 'https://c2121005.github.io/ParallaxScrolling/' },
      { label: 'GITHUB REPO', url: 'https://github.com/c2121005/ParallaxScrolling' }
    ]
  },
  {
    id: 5,
    title: 'FACEBOOK 部份仿切',
    category: ['GRAPHIC DESIGN'],
    tagline: 'HTML 與 CSS 的運用',
    tech: 'Html / CSS',
    description: `本專案為FB 部份仿切練習，以高還原度挑戰了 Facebook 經典的暗黑模式（Dark Mode）個人主頁。視覺設計上，網頁採用深邃的沉穩暗灰（rgb(40,40,40)）作為核心基調，頂部配置了完美的半透明固定式導覽列，並精準重現了左側搜尋框、中央五大功能分頁圖標，以及右側帶有狀態小紅點的圓形貓咪頭像。
    
    主視覺區域運用細緻的線性漸層（linear-gradient）襯托出滿版封面相片，將「編輯封面相片」、「新增到限時動態」等經典膠囊按鈕精確排列。透過絕對定位與純 CSS 切割，精準還原社群龍頭流暢、對稱且具現代科技感的介面美學。`,
    image: project5,
    links: [
      { label: 'LIVE DEMO', url: 'https://c2121005.github.io/fb/' },
      { label: 'GITHUB REPO', url: 'https://github.com/c2121005/fb' }
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