<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import ProjectCard from '../components/ProjectCard.vue'

const props = defineProps({
  projects: Array,
})

const router = useRouter()

const currentCategory = ref('ALL')

const categories = ref(['ALL', 'VUE', 'USER DESIGN', 'GRAPHIC DESIGN'])

const filteredProjects = computed(() => {
  if (currentCategory.value === 'ALL') {
    return props.projects
  }

  return props.projects.filter(project => {
    if (!project.category || !Array.isArray(project.category)) return false

    return project.category.includes(currentCategory.value)
  })
})

const handleViewDetail = (id) => {
  router.push(`/projects/${id}`)
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
      <div v-for="project in filteredProjects" :key="project.id" class="grid-item">
        <ProjectCard :project="project" @view="handleViewDetail" />
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

.filter-btn.filter-active {
  background-color: #D93829;
  color: #F9EFE6;
}

.filter-line {
  height: 2px;
  background-color: #1A3B8B;
  width: 100%;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  width: 100%;
}

.grid-item {
  width: 100%;
  min-width: 0;
}

@media screen and (min-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

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