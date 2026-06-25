<script lang="ts" setup>
import { useField } from "vee-validate";

interface Props {
  label?: string;
  name: string;
}

const props = defineProps<Props>();

const { errorMessage, value } = useField(props.name, undefined, {
  controlled: true,
});

provide("value", value);

const errorId = computed(() => `${props.name}-error`);
</script>

<template>
  <div class="relative w-full">
    <label :for="name" class="text-[12px]">{{ label }}</label>

    <slot
      :id="name"
      :value="value"
      :invalid="!!errorMessage"
      :describedby="errorMessage ? errorId : undefined"
    />

    <span
      v-if="errorMessage"
      :id="errorId"
      role="alert"
      class="text-red-600 text-xs"
    >
      {{ errorMessage }}
    </span>
  </div>
</template>
