<script setup>
import { ref } from 'vue'
import SkillCard from '../components/SkillCard.vue'

// 調整陣列結構，把技能與用途直接拆開
const skillList = ref([
  { skill: 'illustrator / photoshop', purpose: 'Graphic Design', level: 'ADVANCED' },
  { skill: 'rhino / keyshot', purpose: 'Product Design', level: 'Intermediate' },
  { skill: 'figma', purpose: 'UI / UX Design', level: 'ADVANCED' },
  { skill: 'html / CSS / javascript / Vue', purpose: 'Web Design', level: 'Intermediate' },
])
</script>

<template>
  <div class="skills-container">
    <div class="side-banner">
      <h2 class="vertical-title">SKILLS<span class="text-white"> .</span></h2>
      <p class="banner-sub">// TECHNICAL FOUNDATION</p>
    </div>

    <div class="content-area">
      <div class="skills-grid">
        <!-- 這裡改為個別傳入 skill 與 purpose -->
        <SkillCard v-for="item in skillList" :key="item.skill" :skill="item.skill" :purpose="item.purpose"
          :level="item.level" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 頁面 1 的 CSS 完全沒變，保留你原本的配色與 font-style */
.skills-container {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 5rem);
}

@media (min-width: 768px) {
  .skills-container {
    flex-direction: row;
  }
}

.side-banner {
  background-color: #1A3B8B;
  color: #F9EFE6;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (min-width: 768px) {
  .side-banner {
    width: 40%;
    padding: 4rem;
  }

  .vertical-title {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    margin: 0;
  }
}

.vertical-title {
  font-size: 4rem;
  font-weight: 900;
  color: #D93829;
  letter-spacing: -0.05em;
}

.text-white {
  color: #F9EFE6;
}

.banner-sub {
  font-family: monospace;
  font-size: 0.75rem;
  opacity: 0.7;
}

.content-area {
  padding: 3rem 2rem;
  display: flex;
  align-items: center;
  flex: 1;
}

@media (min-width: 768px) {
  .content-area {
    padding: 4rem;
  }
}

.skills-grid {
  display: grid;
  grid-template-cols: 1fr;
  gap: 1rem;
  width: 100%;
}

@media (min-width: 640px) {
  .skills-grid {
    grid-template-cols: repeat(2, 1fr);
  }
}
</style>