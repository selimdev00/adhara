<script setup lang="ts">
type Item = {
  label: string;
  to: string;
};

interface Props {
  items: Item[];
}

defineProps<Props>();
</script>

<template>
  <nav aria-label="Хлебные крошки">
    <ul class="flex items-center flex-wrap">
      <li
        v-for="(item, index) in items"
        :key="item.to"
        class="flex items-center group/item"
      >
        <nuxt-link
          :to="item.to"
          :aria-current="index === items.length - 1 ? 'page' : undefined"
          class="inline-block py-1 text-[13px] transition-opacity hover:opacity-70 aria-[current=page]:text-gray-text rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          {{ item.label }}
        </nuxt-link>

        <span
          class="bg-gray-bullet w-[5px] h-[5px] shrink-0 rounded-full mx-[10px] group-last/item:hidden"
          aria-hidden="true"
        ></span>
      </li>
    </ul>
  </nav>
</template>
