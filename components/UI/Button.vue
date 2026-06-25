<script lang="ts" setup>
interface Props {
  variant?: "primary" | "naked" | "secondary";
  to?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  to: undefined,
});

const classList = computed(() => {
  return [
    "py-2 px-4 rounded-lg text-[15px] flex items-center gap-1 justify-center select-none",
    "transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    {
      "bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary/60 focus-visible:ring-offset-white":
        props.variant === "primary",
      "bg-white text-primary-dark border border-primary hover:bg-primary/5 hover:border-primary-dark focus-visible:ring-primary/50 focus-visible:ring-offset-white":
        props.variant === "secondary",
      "hover:opacity-80 focus-visible:ring-white/70 focus-visible:ring-offset-transparent":
        props.variant === "naked",
    },
  ];
});

const buttonComponent = computed(() => {
  if (props.to) return resolveComponent("NuxtLink");
  else return "button";
});
</script>

<template>
  <component
    :is="buttonComponent"
    :class="classList"
    :to="to"
    active-class="opacity-80"
  >
    <slot />
  </component>
</template>
