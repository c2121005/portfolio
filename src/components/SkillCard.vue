<script setup>
defineProps({
  skill: String,
  purpose: String,
  level: String
})
</script>

<template>
  <div class="skill-card">
    <div class="skill-info">
      <!-- 1. 技能主體 -->
      <span class="skill-main">{{ skill }}</span>
      
      <!-- 2. for + 用途 -->
      <span class="skill-purpose">
        <span class="for-text">for</span> {{ purpose }}
      </span>
    </div>
    
    <!-- 3. 熟練度 -->
    <span class="skill-level">[ {{ level }} ]</span>
  </div>
</template>

<style scoped>
.skill-card {
  border: 2px solid #1A3B8B;
  padding: 1.5rem;
  background-color: transparent;
  color: #1A3B8B;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.1s ease;
  min-height: 5.5rem;
}

/* .skill-card:hover {
  background-color: #D93829;
  border-color: #D93829;
  color: #F9EFE6;
}

.skill-card:hover .skill-purpose {
  color: #F9EFE6;
  opacity: 0.9;
}
.skill-card:hover .for-text {
  color: #F9EFE6;
  opacity: 0.6;
} */

.skill-info {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

/* 技能本體：大寫、粗體、深藍 */
.skill-main {
  font-weight: 900;
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1.1;
}

/* 用途描述：取消全大寫、細字重、低調灰 */
.skill-purpose {
  font-weight: 500;
  font-size: 0.9rem;
  text-transform: none; /* 保持原本的大小寫，不強制大寫 */
  color: #1a3c8bc5;
  transition: color 0.3s ease;
}

/* 針對小寫 for 的亮點色設計 */
.for-text {
  font-family: monospace;
  font-style: italic;
  color: #D93829; /* 平時是紅色的 for */
  font-weight: bold;
  margin-right: 0.25rem;
}

.skill-level {
  font-size: 0.875rem;
  font-family: monospace;
  font-weight: 700;
  opacity: 0.8;
  margin-left: 1rem;
  white-space: nowrap;
}
</style>