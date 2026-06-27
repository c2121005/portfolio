<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ProjectDetail from '../components/ProjectDetail.vue'

const props = defineProps({
  id: [String, Number],
  projects: Array
})

const router = useRouter()
const route = useRoute()

const targetProject = computed(() => {
  if (!props.projects) return null
  return props.projects.find(p => String(p.id) === String(props.id))
})

const goBack = () => {
  router.push({
    path: '/projects',
    query: { cat: route.query.cat || 'ALL' }
  })
}
</script>

<template>
  <div v-if="targetProject">
    <ProjectDetail :project="targetProject" @back="goBack" />
  </div>
  <div v-else class="not-found">
    <p>[ ERR: PROJECT NOT FOUND ]</p>
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