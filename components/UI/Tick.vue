<script lang="ts" setup>
interface Props {
  align?: "left" | "center";
}
withDefaults(defineProps<Props>(), { align: "left" });
</script>

<template>
  <span
    class="flex h-[3px] w-14 overflow-hidden rounded-full"
    :class="align === 'center' ? 'mx-auto' : ''"
    aria-hidden="true"
  >
    <span class="h-full w-3 shrink-0 bg-accent"></span>
    <span class="h-full flex-1 bg-primary"></span>
  </span>
</template>
