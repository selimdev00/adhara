<script setup lang="ts">
const appConfig = useAppConfig();

const contacts = [
  {
    label: "Телефон",
    value: appConfig.contacts.phoneNumber,
    href: `tel:${appConfig.contacts.phoneNumber}`,
  },
  {
    label: "Электронная почта",
    value: "info@compas.ru",
    href: "mailto:info@compas.ru",
  },
  {
    label: "Адрес",
    value: "Москва, ул. Пресненская наб., 12",
    href: undefined,
  },
  {
    label: "Режим работы",
    value: "Пн-Пт, 9:00-18:00 (МСК)",
    href: undefined,
  },
];

useHead({ title: "Контакты" });
</script>

<template>
  <div class="container py-8 space-y-8">
    <UIBreadcrumbs
      :items="[
        { label: 'Главная страница', to: '/' },
        { label: 'Контакты', to: '/contacts' },
      ]"
    />

    <div class="space-y-3">
      <h1 class="font-bold text-3xl md:text-[41px] tracking-tight">Контакты</h1>
      <UITick />
      <p class="text-gray-text max-w-[60ch]">
        Свяжитесь с нами удобным способом, мы ответим в рабочее время.
      </p>
    </div>

    <dl class="grid gap-6 sm:grid-cols-2 max-w-[680px]">
      <div
        v-for="item in contacts"
        :key="item.label"
        class="rounded-xl border border-gray-card-200 bg-gray-card-100 shadow-card p-5 space-y-1"
      >
        <dt class="text-sm text-gray-text">{{ item.label }}</dt>
        <dd class="text-lg font-bold text-black-100">
          <a
            v-if="item.href"
            :href="item.href"
            class="transition-colors hover:text-primary"
            >{{ item.value }}</a
          >
          <span v-else>{{ item.value }}</span>
        </dd>
      </div>
    </dl>
  </div>
</template>
