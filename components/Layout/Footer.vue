<script setup lang="ts">
const appConfig = useAppConfig();
const documentStore = useDocumentStore();
const { documents } = storeToRefs(documentStore);

const year = 2026;

const navLinks = [
  { label: "Тарифы", to: "/tariffs" },
  { label: "Контакты", to: "/contacts" },
  { label: "Вход", to: "/auth/login" },
  { label: "Регистрация", to: "/auth/register" },
];

const docLinks = computed(() => documents.value.slice(0, 3));
</script>

<template>
  <footer
    class="bg-header-gradient text-white/80 border-t border-white/10 mt-20 lg:mt-28"
  >
    <div class="container py-12 lg:py-16">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div class="space-y-4">
          <Logo />
          <p class="text-sm leading-relaxed max-w-[260px]">
            Сервис проверки и анализа штрафов для автопарков.
          </p>
        </div>

        <nav aria-label="Навигация в подвале" class="space-y-3">
          <p class="text-white font-bold">Навигация</p>
          <ul class="space-y-2 text-sm">
            <li v-for="item in navLinks" :key="item.to">
              <nuxt-link
                :to="item.to"
                class="transition-colors hover:text-primary focus-visible:outline-none focus-visible:underline"
                >{{ item.label }}</nuxt-link
              >
            </li>
          </ul>
        </nav>

        <nav aria-label="Документы в подвале" class="space-y-3">
          <p class="text-white font-bold">Документы</p>
          <ul class="space-y-2 text-sm">
            <li v-for="doc in docLinks" :key="doc.id">
              <nuxt-link
                :to="`/documents/${doc.id}`"
                class="transition-colors hover:text-primary focus-visible:outline-none focus-visible:underline"
                >{{ doc.title }}</nuxt-link
              >
            </li>
          </ul>
        </nav>

        <div class="space-y-3">
          <p class="text-white font-bold">Контакты</p>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                :href="`tel:${appConfig.contacts.phoneNumber}`"
                class="transition-colors hover:text-primary"
                >{{ appConfig.contacts.phoneNumber }}</a
              >
            </li>
            <li>
              <a
                href="mailto:info@compas.ru"
                class="transition-colors hover:text-primary"
                >info@compas.ru</a
              >
            </li>
            <li class="text-white/50">ИНН 0000000000 · ОГРН 0000000000000</li>
          </ul>
        </div>
      </div>

      <div
        class="mt-10 pt-6 border-t border-white/10 text-sm text-white/50"
      >
        © {{ year }} Компас. Все права защищены.
      </div>
    </div>
  </footer>
</template>
