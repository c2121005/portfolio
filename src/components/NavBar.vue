<script setup></script>

<template>
  <nav class="navbar">
    <router-link to="/" class="nav-logo">
      MY.PF<span class="dot">.</span>
    </router-link>
    <div class="nav-links">
      <router-link to="/" active-class="active">Home</router-link>
      <router-link to="/skills" active-class="active">Skills</router-link>
      <router-link to="/projects" active-class="active">Portfolio</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: rgba(249, 239, 230, 0.95);
  backdrop-filter: blur(4px);
  border-bottom: 1px solid rgba(26, 59, 139, 0.2);
}

.nav-logo {
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: #1A3B8B;
  text-decoration: none;
}

.dot {
  color: #D93829;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.nav-links a {
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #1A3B8B;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a.active {
  color: #D93829;
}
</style>