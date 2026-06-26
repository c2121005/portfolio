<script setup></script>

<template>
  <div class="view-container">
    <div class="sub-header">[ DIGITAL GRAPHIC WORKSPACE &bull; VOL 2026 ]</div>

    <div class="main-layout">

      <div class="layout-left">
        <div class="profile-card">
          <div class="cross-mark top-left"></div>
          <div class="cross-mark bottom-right"></div>

          <div class="typography-hero">
            <h1 class="hero-text text-red">Port-</h1>
            <h1 class="hero-text text-blue">
              folio<span class="text-red">.</span>
            </h1>
          </div>

          <div class="year-stamp">
            <div class="year-num">20</div>
            <div class="year-num text-red">26</div>
          </div>
        </div>
      </div>

      <div class="layout-right">
        <div class="intro-section">
          <span class="section-tag">// WHO I AM</span>
          <h2 class="intro-headline">
            跨越數位網格與實體視覺的<br>
            <span class="highlight-text">前端開發者 / 設計師 .</span>
          </h2>

          <div class="bio-paragraphs">
            <p>
              你好，我是Ａ。我專注於建構具備強烈視覺張力的 Vue.js 網頁應用程式。深受 1950 年代瑞士國際主義風格（Swiss
              Design）的啟發，我熱衷於將大膽的字體排印、高對比色塊以及嚴謹的幾何網格系統，轉化為流暢、直覺且富有生命力的數位互動體驗。
            </p>
            <p>
              在前端開發的世界裡，我不僅僅滿足於「讓功能動起來」，更在意元件的架構美學與狀態傳遞的嚴謹度。透過 Props、Emits 與清晰的路由切換，將繁複的程式邏輯封裝成優雅、好維護的組件系統。
            </p>
          </div>

          <div class="experience-snapshot">
            <div class="exp-item">
              <span class="exp-year">2016 - 2019</span>
              <span class="exp-title">台中女子高級中學 畢業</span>
            </div>
            <div class="exp-item">
              <span class="exp-year">2019 - 2026</span>
              <span class="exp-title">中原大學 商業設計系產品設計組 畢業</span>
            </div>
            <div class="exp-item">
              <span class="exp-year">2026 - ?</span>
              <span class="exp-title">UI / UX 持續學習中</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="view-footer">
      <div class="footer-grid-line"></div>
      <router-link to="/projects" class="action-btn">
        Go To Portfolio &rarr;
      </router-link>
    </div>
  </div>

  <!-- <div class="index-2">AAAAA</div> -->
</template>

<style scoped>
.view-container {
  min-height: calc(100vh - 5rem);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #F9EFE6;
}

@media (min-width: 768px) {
  .view-container {
    padding: 4rem;
  }
}

.sub-header {
  font-family: monospace;
  font-size: 0.75rem;
  color: #1A3B8B;
  letter-spacing: 0.05em;
  margin-bottom: 2rem;
}

/* 雙欄主佈局 */
.main-layout {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex-grow: 1;
}

@media (min-width: 1024px) {
  .main-layout {
    flex-direction: row;
    align-items: center;
    gap: 4rem;
  }

  .layout-left {
    width: 45%;
  }

  .layout-right {
    width: 55%;
    border-left: 1px solid rgba(26, 59, 139, 0.2);
    padding-left: 4rem;
  }
}

.profile-card {
  position: relative;
  padding: 4rem 0;
  margin: 2rem 0;
  width: 100%;
}

.typography-hero {
  position: relative;
  z-index: 10;
}

.hero-text {
  font-size: 12vw;
  font-weight: 900;
  line-height: 0.85;
  letter-spacing: -0.06em;
  text-transform: uppercase;
  margin: 0;
}

.text-red {
  color: #D93829;
}

.text-blue {
  color: #1A3B8B;
}

.year-stamp {
  position: absolute;
  right: 0;
  bottom: 2rem;
  text-align: right;
  font-family: monospace;
  display: none;
}

@media (min-width: 768px) {
  .year-stamp {
    display: block;
  }
}

.year-num {
  font-size: 4rem;
  font-weight: 900;
  line-height: 1;
  color: #1A3B8B;
}

/* 印刷加工對位符號線 */
.cross-mark {
  position: absolute;
  width: 20px;
  height: 20px;
  opacity: 0.4;
}

.top-left {
  top: 0;
  left: 0;
  border-top: 2px solid #1A3B8B;
  border-left: 2px solid #1A3B8B;
}

.bottom-right {
  bottom: 0;
  right: 0;
  border-bottom: 2px solid #1A3B8B;
  border-right: 2px solid #1A3B8B;
}

/* 右側描述文字設計 */
.intro-section {
  display: flex;
  flex-direction: column;
}

.section-tag {
  font-family: monospace;
  font-size: 0.75rem;
  color: #D93829;
  font-weight: 700;
  margin-bottom: 1rem;
}

.intro-headline {
  font-size: 2.25rem;
  font-weight: 900;
  line-height: 1.2;
  color: #1A3B8B;
  letter-spacing: -0.03em;
  margin: 0 0 2rem 0;
}

.highlight-text {
  color: #D93829;
}

.bio-paragraphs {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.bio-paragraphs p {
  font-size: 1rem;
  line-height: 1.7;
  color: #333333;
  margin: 0;
  text-align: justify;
}

/* 經歷快照細線排版 */
.experience-snapshot {
  margin-top: 2.5rem;
  border-top: 1px solid #1A3B8B;
  padding-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.exp-item {
  display: flex;
  gap: 2rem;
  font-size: 0.875rem;
}

.exp-year {
  font-family: monospace;
  font-weight: 700;
  color: #D93829;
  min-width: 6rem;
}

.exp-title {
  color: #1A3B8B;
  font-weight: 500;
}

/* 底部按鈕區 */
.view-footer {
  margin-top: 3rem;
  width: 100%;
  display: flex;
  /* 啟用 flex 佈局 */
  justify-content: flex-end;
  /* 讓裡面的元件全部靠右對齊 */
}

.footer-grid-line {
  height: 1px;
  background-color: rgba(26, 59, 139, 0.3);
  margin-bottom: 1.5rem;
}

.action-btn {
  display: inline-block;
  background-color: #1A3B8B;
  color: #F9EFE6;
  padding: 1rem 2.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-decoration: none;
  font-size: 0.875rem;
  transition: background-color 0.2s, transform 0.2s;
}

.action-btn:hover {
  background-color: #D93829;
  transform: translateY(-2px);
}

.index-2 {
  height: 100vh;
}
</style>