
<script setup>
defineProps({
  project: Object,
  isFavorite: Boolean
})
defineEmits(['view', 'toggle-favorite'])
</script>

<template>
  <div class="project-card">
    <div class="card-header" :class="{ 'is-favorite-bg': isFavorite }">
      <div class="category-tags-wrapper">
        <span 
          v-for="(cat, index) in project.category" 
          :key="index" 
          class="category-tag"
        >
          [{{ cat }}]
        </span>
      </div>
      
      <h3 class="project-title">{{ project.title }}</h3>
      <div class="project-bg-number">-0{{ project.id }}.</div>
    </div>

    <div class="card-body">
      <p class="project-tagline">{{ project.tagline }}</p>

      <div class="card-actions">
        <button class="btn btn-primary" @click="$emit('view', project.id)">
          查看作品 &rarr;
        </button>
        <button class="btn btn-secondary" @click.stop="$emit('toggle-favorite', project.id)">
          {{ isFavorite ? '★ 已收' : '☆ 收藏' }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  border: 2px solid #1A3B8B;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* 鎖定這行！強迫卡片一定要吃滿外層分配給它的 RWD 寬度 */
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
}

.card-header {
  background-color: #1A3B8B;
  color: #F9EFE6;
  padding: 1.5rem;
  height: 10rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.3s ease;
}

.project-card:hover .card-header,
.is-favorite-bg {
  background-color: #D93829;
}

.category-tag {
  font-size: 0.75rem;
  font-family: monospace;
  letter-spacing: 0.1em;
  opacity: 0.8;
}

.project-title {
  font-size: 2rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin: 0;
  text-transform: uppercase;
}

.project-bg-number {
  position: absolute;
  right: 1rem;
  bottom: 0.5rem;
  font-size: 3.5rem;
  font-weight: 900;
  font-family: monospace;
  opacity: 0.1;
}

.card-body {
  padding: 1.25rem;
  background-color: #F9EFE6;
  border-top: 2px solid #1A3B8B;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex-grow: 1;
  justify-content: space-between;
}

.project-tagline {
  font-size: 0.85rem;
  color: #555555;
  font-family: monospace;
  margin: 0;
}

.card-actions {
  display: flex;
  gap: 0.5rem;
}

.btn {
  font-weight: bold;
  font-size: 0.75rem;
  padding: 0.6rem 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s;
}

.btn-primary {
  flex: 1;
  background-color: #1A3B8B;
  color: #F9EFE6;
}

.btn-primary:hover {
  background-color: #D93829;
}

.btn-secondary {
  background-color: transparent;
  border: 1px solid #D93829;
  color: #D93829;
}

.btn-secondary:hover {
  background-color: #D93829;
  color: #F9EFE6;
}
</style>
