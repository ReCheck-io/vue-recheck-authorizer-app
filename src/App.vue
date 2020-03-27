<template>
  <div id="app">
    <header class="header">
      <router-link to="/">App Home</router-link>
      <router-link to="/scan">App Camera</router-link>
      <router-link to="/identity">App Identity</router-link>
    </header>
    <main role="main">
      <router-view />
    </main>
    <footer class="footer">
      <p>Copyright &copy; {{ currentYear }} ReCheck BV</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;

  font-family: "Lato", Arial, sans-serif;
  font-size: 16px;
  font-weight: 400;
}
.header {
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 6px rgba(20, 20, 20, 0.09);
  margin-bottom: 44px;
}
.header a {
  color: #141414;
  text-decoration: none;
}
.header a:not(:last-child) {
  margin-right: 44px;
}
main {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 0 32px;
}
.footer {
  margin: 72px 0;
  text-align: center;
}
</style>
