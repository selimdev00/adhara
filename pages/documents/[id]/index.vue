<script setup lang="ts">
const documentStore = useDocumentStore();
const route = useRoute();

const id = Number(route.params.id);
const document = Number.isNaN(id)
  ? undefined
  : documentStore.findDocumentWithId(id);

if (!document) {
  throw createError({
    statusCode: 404,
    statusMessage: "Документ не найден",
    fatal: true,
  });
}

const sections = [
  {
    title: "1. Общие положения",
    text: [
      "Настоящий документ определяет условия использования сервиса «Компас» и регулирует отношения между оператором сервиса и пользователем. Используя сервис, пользователь подтверждает, что ознакомился с условиями и принимает их в полном объёме.",
      "Оператор вправе вносить изменения в документ. Актуальная редакция всегда доступна на сайте сервиса, а существенные изменения публикуются заблаговременно.",
    ],
  },
  {
    title: "2. Права и обязанности сторон",
    text: [
      "Пользователь обязуется предоставлять достоверные данные транспортного средства и использовать сервис в соответствии с действующим законодательством. Оператор обеспечивает доступ к функциям проверки и анализа штрафов, а также сохранность переданных данных.",
    ],
  },
  {
    title: "3. Заключительные положения",
    text: [
      "Все споры решаются путём переговоров, а при недостижении согласия - в порядке, установленном законодательством Российской Федерации. По вопросам, связанным с документом, можно обратиться в службу поддержки сервиса «Компас».",
    ],
  },
];

useHead({
  title: document.title,
});
</script>

<template>
  <div class="container py-5 space-y-3">
    <UIBreadcrumbs
      :items="[
        {
          label: 'Главная страница',
          to: '/',
        },
        {
          label: 'Документы',
          to: '/documents',
        },
        {
          label: document.title,
          to: `/documents/${document.id}`,
        },
      ]"
    />

    <div class="space-y-7">
      <div class="space-y-3">
        <h1 class="font-bold md:text-[41px] text-2xl tracking-tight">
          {{ document.title }}
        </h1>
        <UITick />
      </div>

      <section
        v-for="section in sections"
        :key="section.title"
        class="space-y-4"
      >
        <h2 class="font-bold md:text-2xl text-xl text-black-100">
          {{ section.title }}
        </h2>

        <div class="space-y-4 max-w-[75ch]">
          <p
            v-for="(text, i) in section.text"
            :key="i"
            class="md:text-lg leading-[28px] text-black-100/90"
          >
            {{ text }}
          </p>
        </div>
      </section>
    </div>
  </div>
</template>
