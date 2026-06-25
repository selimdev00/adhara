<script setup lang="ts">
interface Props {
  videoUrl: string;
}

defineProps<Props>();

const show = ref(false);
const triggerWrap = ref<HTMLElement | null>(null);
const closeBtn = ref<HTMLButtonElement | null>(null);
const panel = ref<HTMLElement | null>(null);

const open = () => {
  show.value = true;
};

const close = () => {
  show.value = false;
};

watch(show, async (value) => {
  if (import.meta.client) {
    document.body.classList.toggle("overflow-hidden", value);
  }
  if (value) {
    await nextTick();
    closeBtn.value?.focus();
  } else {
    triggerWrap.value
      ?.querySelector<HTMLElement>("button, a, [tabindex]")
      ?.focus();
  }
});

const onKeydown = (e: KeyboardEvent) => {
  if (!show.value) return;
  if (e.key === "Escape") {
    close();
    return;
  }
  if (e.key === "Tab" && panel.value) {
    const focusable = panel.value.querySelectorAll<HTMLElement>(
      'a[href], button, iframe, [tabindex]:not([tabindex="-1"])',
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
};

onMounted(() => window.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
  if (import.meta.client) document.body.classList.remove("overflow-hidden");
});
</script>

<template>
  <div>
    <div ref="triggerWrap" @click="open">
      <slot name="trigger" />
    </div>

    <transition name="fade">
      <div
        v-if="show"
        class="fixed inset-0 w-full h-full bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        @click.self="close"
      >
        <div
          ref="panel"
          role="dialog"
          aria-modal="true"
          aria-label="Видео о сервисе"
          class="flex flex-col items-end gap-2 w-full max-w-[960px]"
        >
          <button
            ref="closeBtn"
            type="button"
            aria-label="Закрыть видео"
            class="text-white text-xl p-2 -m-2 rounded transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            @click="close"
          >
            <IconClose />
          </button>

          <div class="w-full aspect-video">
            <iframe
              class="w-full h-full rounded-lg"
              :src="videoUrl"
              title="Видео о сервисе Компас"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
