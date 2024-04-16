# Loading 组件说明文档

## 介绍

Loading 组件是一个加载状态展示组件，适用于在网页上展示加载状态，并提供一些可选的动画效果。该组件适用于需要在数据加载或特定事件发生时显示加载状态的场景。

## 特性

- 可自定义的加载文本：支持自定义加载提示文本。

- 支持过渡动画：提供了淡入淡出的过渡效果，使加载状态的显示与隐藏更加平滑。

## 使用方法

### 安装

在项目中安装 Loading 组件：

```shell
npm install sad-loading
```

### 属性

- `show` (`boolean`, 默认: `true`): 控制加载状态的显示与隐藏。

- `text` (`string`, 默认: `'加载中'`): 加载提示文本。

## 示例

```vue

<template>
  <div>
    <!-- 显示加载状态 -->
    <button @click="showLoading">显示加载状态</button>
    <!-- 隐藏加载状态 -->
    <button @click="hideLoading">隐藏加载状态</button>
    <Loading/>
  </div>
</template>

<script lang="ts" setup>
  import Loading from 'sad-loading';

  const showLoading = () = {
    Loading.show('加载中...'); // 可以传入自定义文本
  }

  const hideLoading = () = {
    Loading.hide();
  }
</script>
```

## 自定义文本

你可以在显示加载状态时传入自定义文本：

```javascript
Loading.show('自定义加载文本');
```

## 注意事项

- 请确保在真正需要显示加载状态的地方调用 `Loading.show()`，并在不需要显示加载状态的地方调用 `Loading.hide()`。
- 若在 Vue 组件中使用，请确保在组件被销毁前调用 `Loading.hide()`，以避免内存泄漏。
