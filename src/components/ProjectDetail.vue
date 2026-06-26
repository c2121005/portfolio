<script setup>
defineProps({ project: Object })
defineEmits(['back'])
</script>

<template>
  <div v-if="project" class="detail-container">

    <div class="panel-left"
      :style="{ '--bg-image': `url(${project?.image || 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800'})` }">
      <div class="panel-left-overlay"></div>

      <button @click="$emit('back')" class="back-btn">
        &larr; BACK TO PORTFOLIO
      </button>

      <div class="hero-info-box">
        <p class="detail-serial">// PROJECT -0{{ project.id }}.</p>
      </div>

      <div class="panel-footer-text">[ VISUAL SYSTEM DESIGN &copy; 2026 ]</div>
    </div>

    <div class="panel-right">
      <div class="title-header-box">
        <h2 class="detail-title">{{ project.title ? project.title.replace(' ', '-') : '' }}</h2>
      </div>

      <div class="spec-table">
        <div class="table-row">
          <div class="table-cell">
            <span class="label">[ Category ]</span>
            <span class="value">
              {{ Array.isArray(project.category) ? project.category.join(' / ') : project.category }}
            </span>
          </div>
          <div class="table-cell">
            <span class="label">[ Tech Stack ]</span>
            <span class="value">{{ project.tech }}</span>
          </div>
        </div>
      </div>

      <div class="content-body">
        <h3 class="section-tag">[ DESIGN APPROACH ]</h3>
        <p class="desc-text">{{ project.description }}</p>
      </div>

      <div v-if="project.links && project.links.length > 0" class="project-links-wrapper">
        <a 
          v-for="(link, index) in project.links" 
          :key="index" 
          :href="link.url" 
          target="_blank" 
          class="external-link-btn"
        >
          {{ link.label }} &rarr;
        </a>
      </div>

      <div class="system-stamp">
        <span>STATUS: STABLE_VER_ACTIVE</span>
        <span>[ RE-BRUTALISM SYSTEM ]</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.detail-container {
  display: flex;
  flex-direction: column;
  background-color: #F9EFE6;
  min-height: calc(100vh - 5rem);
}

@media (min-width: 768px) {
  .detail-container {
    flex-direction: row;
  }
}

/* 🖼️ 左側海報區 */
.panel-left {
  position: relative;
  background-color: #1A3B8B;
  background-image: var(--bg-image);
  background-size: cover;
  background-position: center;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  transition: all 0.5s ease;
}

.panel-left-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(26, 59, 139, 0.88);
  mix-blend-mode: multiply;
  transition: all 0.4s ease;
  z-index: 1;
}

.panel-left:hover .panel-left-overlay {
  background-color: rgba(26, 59, 139, 0.2);
}

@media (min-width: 768px) {
  .panel-left {
    width: 45%;
    position: sticky;
    top: 5rem;
    height: calc(100vh - 5rem);
    padding: 4rem 3rem;
  }
}

.back-btn,
.hero-info-box,
.panel-footer-text {
  position: relative;
  z-index: 2;
}

/* 🧱 第一版：硬派黑邊框重陰影按鈕 */
.back-btn {
  background-color: #F9EFE6;
  color: #1A3B8B;
  border: 2px solid #1A3B8B;
  font-weight: 900;
  font-family: monospace;
  font-size: 0.8rem;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  width: fit-content;
  letter-spacing: 0.05em;
  box-shadow: 4px 4px 0px #D93829;
  transition: transform 0.1s, box-shadow 0.1s;
}

.back-btn:hover {
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px #D93829;
  background-color: #ffffff;
  color: #D93829;
}

.detail-serial {
  font-family: monospace;
  font-size: 1.1rem;
  font-weight: bold;
  color: #F9EFE6;
  background-color: #D93829;
  padding: 0.25rem 0.6rem;
  display: inline-block;
  margin: 0;
}

.panel-footer-text {
  font-family: monospace;
  font-size: 0.75rem;
  color: #F9EFE6;
  opacity: 0.7;
}

/* 📝 右側資訊區 */
.panel-right {
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .panel-right {
    width: 55%;
    padding: 3.8rem 4rem 4rem 4rem;
    margin-top: 4rem;
  }
}

/* 右側標題外框 */
.title-header-box {
  margin-bottom: 2rem;
  border-bottom: 4px solid #1A3B8B;
  padding-bottom: 2.5rem;
}

.detail-title {
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 0.9;
  color: #D93829;
  text-transform: uppercase;
  margin: 0;
  letter-spacing: -0.03em;
}

/* 細線規格表 */
.spec-table {
  border-bottom: 1px solid #1A3B8B;
  padding-bottom: 2rem;
  margin-bottom: 2.5rem;
}

.table-row {
  display: flex;
  gap: 2rem;
}

.table-cell {
  flex: 1;
}

.content-body{
    margin-bottom: 1rem;
}

.label {
  display: block;
  font-size: 0.75rem;
  color: #888888;
  font-family: monospace;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}

.value {
  font-weight: 700;
  color: #1A3B8B;
  font-family: monospace;
  font-size: 1.1rem;
}

.value.dark {
  color: #222222;
  font-family: inherit;
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.5;
}

.section-tag {
  font-size: 0.75rem;
  font-family: monospace;
  color: #D93829;
  margin-bottom: 1rem;
}

.desc-text {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #333333;
  margin-bottom: 2rem; /* 稍微縮小底距，讓連結按鈕向上推近 */
}

/* ➕ 全新設計：連結按鈕容器排版 */
.project-links-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 4rem; /* 與最下方 stamp 保持剛好的粗獷呼吸距離 */
}

/* ➕ 全新設計：粗獷硬派風格連結按鈕 */
.external-link-btn {
  background-color: #1A3B8B; /* 品牌皇家藍底色 */
  color: #F9EFE6;
  border: 2px solid #1A3B8B;
  font-weight: 800;
  font-family: monospace;
  font-size: 0.85rem;
  padding: 0.8rem 1.5rem;
  text-decoration: none; /* 拔除超連結底線 */
  letter-spacing: 0.05em;
  box-shadow: 4px 4px 0px #D93829; /* 強烈標誌性紅色重陰影 */
  transition: transform 0.1s, box-shadow 0.1s, background-color 0.2s;
}

.external-link-btn:hover {
  background-color: #D93829; /* 懸停時與陰影融合變火熱紅 */
  border-color: #D93829;
  color: #F9EFE6;
  transform: translate(2px, 2px);
  box-shadow: 2px 2px 0px #D93829;
}

/* 全新結尾戳記 */
.system-stamp {
  margin-top: auto;
  border-top: 1px dashed #1A3B8B;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  font-family: monospace;
  font-size: 0.7rem;
  color: #1A3B8B;
  opacity: 0.6;
}
</style>