<script setup lang="ts">
const appConfig = useAppConfig();
const route = useRoute();

const nav = [
  { label: "Тарифы", to: "/tariffs" },
  { label: "Контакты", to: "/contacts" },
];

const mobileNav = [
  { label: "Тарифы", to: "/tariffs" },
  { label: "Контакты", to: "/contacts" },
  { label: "Вход", to: "/auth/login" },
  { label: "Регистрация", to: "/auth/register" },
];

const isActive = (to: string) =>
  to === "/" ? route.path === "/" : route.path.startsWith(to);

const menu = ref(false);
const burger = ref<HTMLButtonElement | null>(null);
const closeBtn = ref<HTMLButtonElement | null>(null);
const drawer = ref<HTMLElement | null>(null);

watch(menu, async (value) => {
  if (import.meta.client) {
    document.body.classList.toggle("overflow-hidden", value);
  }
  if (value) {
    await nextTick();
    closeBtn.value?.focus();
  } else {
    burger.value?.focus();
  }
});

const onKeydown = (e: KeyboardEvent) => {
  if (!menu.value) return;
  if (e.key === "Escape") {
    menu.value = false;
    return;
  }
  if (e.key === "Tab" && drawer.value) {
    const focusable = drawer.value.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])',
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

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
  if (import.meta.client) document.body.classList.remove("overflow-hidden");
});
</script>

<template>
  <header
    class="bg-header-gradient text-white h-[60px] flex items-center sticky top-0 z-30"
  >
    <div class="container py-3 flex items-center justify-between">
      <div class="flex items-center gap-8">
        <Logo />

        <nav class="lg:block hidden" aria-label="Основная навигация">
          <ul class="flex items-center text-lg gap-7">
            <li v-for="item in nav" :key="item.to">
              <nuxt-link
                :to="item.to"
                :aria-current="isActive(item.to) ? 'page' : undefined"
                class="relative py-1 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm"
              >
                {{ item.label }}
                <span
                  v-if="isActive(item.to)"
                  class="absolute -bottom-0.5 left-0 flex h-[3px] w-full overflow-hidden rounded-full"
                  aria-hidden="true"
                >
                  <span class="h-full w-3 shrink-0 bg-accent"></span>
                  <span class="h-full flex-1 bg-primary"></span>
                </span>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="lg:hidden flex items-center">
        <button
          ref="burger"
          type="button"
          class="text-2xl p-2 -m-2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          aria-label="Открыть меню"
          aria-controls="mobile-menu"
          :aria-expanded="menu"
          @click="menu = true"
        >
          <IconMenu />
        </button>

        <transition name="fade">
          <div
            v-if="menu"
            class="bg-black/60 backdrop-blur-sm fixed inset-0 w-full h-full z-40 flex justify-end"
            @click="menu = false"
          >
            <div
              id="mobile-menu"
              ref="drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Меню"
              class="bg-gray-card-100 text-black-100 w-[260px] h-full p-5 flex flex-col justify-between text-right shadow-2xl"
              @click.stop
            >
                <div class="space-y-8">
                  <div class="flex justify-end">
                    <button
                      ref="closeBtn"
                      type="button"
                      class="p-2 -m-2 rounded text-black-100 transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                      aria-label="Закрыть меню"
                      @click="menu = false"
                    >
                      <IconClose />
                    </button>
                  </div>

                  <nav class="text-xl" aria-label="Мобильная навигация">
                    <ul class="space-y-3">
                      <li v-for="item in mobileNav" :key="item.to">
                        <nuxt-link
                          :to="item.to"
                          :aria-current="isActive(item.to) ? 'page' : undefined"
                          class="inline-block transition-colors hover:text-primary aria-[current=page]:text-primary"
                          @click="menu = false"
                          >{{ item.label }}</nuxt-link
                        >
                      </li>
                    </ul>
                  </nav>
                </div>

                <a
                  :href="`tel:${appConfig.contacts.phoneNumber}`"
                  class="text-lg font-bold transition-colors hover:text-primary block"
                >
                  {{ appConfig.contacts.phoneNumber }}
                </a>
              </div>
          </div>
        </transition>
      </div>

      <div class="lg:flex hidden items-center gap-[17px]">
        <a
          :href="`tel:${appConfig.contacts.phoneNumber}`"
          class="text-lg transition-opacity hover:opacity-80"
        >
          {{ appConfig.contacts.phoneNumber }}
        </a>

        <UIButton variant="naked" class="!text-lg" to="/auth/login"
          >Вход</UIButton
        >

        <UIButton to="/auth/register">Регистрация</UIButton>
      </div>
    </div>
  </header>
</template>
