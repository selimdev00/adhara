<script lang="ts" setup>
import { MaskInput } from "maska";

defineOptions({
  inheritAttrs: false,
});

interface Props {
  mask?: string;
}

const props = defineProps<Props>();

const classList = computed(() => {
  return {
    input: [
      "w-full block border border-gray-card-200 rounded-lg h-[40px] px-3 bg-white",
      "transition-[border-color,box-shadow] duration-200 ease-expo outline-none",
      "hover:border-gray-text/40 focus:border-primary focus:ring-2 focus:ring-primary/40",
    ],
  };
});

const value = inject("value");

let maskInputInstance: MaskInput | undefined;

const input = ref();

onMounted(() => {
  if (props.mask) {
    maskInputInstance = new MaskInput(input.value as HTMLInputElement, {
      mask: props.mask,
    });
  }
});

onUnmounted(() => {
  if (props.mask) {
    maskInputInstance?.destroy();
  }
});
</script>

<template>
  <input ref="input" v-bind="$attrs" :class="classList.input" v-model="value" />
</template>
