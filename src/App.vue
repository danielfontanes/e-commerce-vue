<template>
  <div id="app">
    <SideMenu />
    <div class="main-container">
      <header>HEADER</header>
        <router-view class="flex-grow-1"/>
      <footer>FOOTER</footer>
    </div>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue'

export default {
  name: 'App',
  components: {
    SideMenu
  }
}
</script>

<style>
/* IMPORTS */
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

/* RESET STYLES */
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

/* VARIABLES */
:root {
  --primary-color: #ffffff;
  --secondary-color: #2a69f2;
}

/* GENERAL STYLES */
a {
  text-decoration: none;
}
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
}
.main-container{
  display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    min-height: 99.97vh;
}
#app header,
#app footer {
  background-color: var(--secondary-color);
  color: var(--primary-color);
}
#app > div {
  flex-grow: 1;
}</style>
