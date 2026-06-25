<template>
  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-white focus:shadow-card"
  >
    Перейти к содержимому
  </a>

  <LayoutHeader />

  <main id="main">
    <slot />
  </main>

  <LayoutFooter />
</template>
