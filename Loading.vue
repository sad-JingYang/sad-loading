<template>
  <transition name="fade">
    <div
      v-if="show"
      class="loading_container"
    >
      <div class="loader">
        <div class="outer" />
        <div class="middle" />
        <div class="inner" />
        <div class="loading">
          {{ text }}<span class="load" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
defineProps({
  show: {
    type: Boolean,
    default: true
  },
  text: {
    type: String,
    default: '加载中'
  }
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.loading_container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999999;
  background-color: rgba(black, 1);
}

.loader {
  position: relative;

  .loading {
    margin-top: 96px;
    color: #16c2a3;
    letter-spacing: 5px;
    font-size: 16px;
    font-weight: 600;
    font-family: 幼圆, emoji;

    .load {
      height: 2.5px;
      width: 2.5px;
      display: inline-block;
      box-shadow:
        2px 0 0 #16c2a3,
        7px 0 0 #16c2a3,
        12px 0 0 #16c2a3;
      animation: change 2.4s infinite steps(1, start);
    }

    @keyframes change {
      25% {
        box-shadow: 2px 0 0 #16c2a3;
      }
      50% {
        box-shadow:
          2px 0 0 #16c2a3,
          7px 0 0 #16c2a3;
      }
      75% {
        box-shadow:
          2px 0 0 #16c2a3,
          7px 0 0 #16c2a3,
          12px 0 0 #16c2a3;
      }
    }
  }
}

.outer,
.middle,
.inner {
  border: 3px solid transparent;
  border-top-color: #16c2a3;
  border-right-color: #16c2a3;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
}

.outer {
  width: 3.5em;
  height: 3.5em;
  margin-left: -1.75em;
  margin-top: -1.75em;
  animation: spin 2s linear infinite;
}

.middle {
  width: 2.1em;
  height: 2.1em;
  margin-left: -1.05em;
  margin-top: -1.05em;
  animation: spin 1.75s linear reverse infinite;
}

.inner {
  width: 0.8em;
  height: 0.8em;
  margin-left: -0.4em;
  margin-top: -0.4em;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
