<script setup lang="ts">
const plans = [
  {
    name: "Старт",
    price: "0 ₽",
    period: "бесплатно",
    description: "Для одного автомобиля и базовой проверки штрафов.",
    features: [
      "1 транспортное средство",
      "Проверка штрафов ГИБДД",
      "Уведомления на почту",
    ],
    featured: false,
  },
  {
    name: "Бизнес",
    price: "490 ₽",
    period: "в месяц",
    description: "Для небольшого автопарка с историей и аналитикой.",
    features: [
      "До 10 транспортных средств",
      "История штрафов по каждой машине",
      "Оплата со скидкой 50%",
      "Уведомления о погашении",
    ],
    featured: true,
  },
  {
    name: "Автопарк",
    price: "Индивидуально",
    period: "по запросу",
    description: "Для компаний с большим автопарком и интеграциями.",
    features: [
      "Неограниченное число машин",
      "Выгрузка отчётов и квитанций",
      "Приоритетная поддержка",
      "Доступ по API",
    ],
    featured: false,
  },
];

useHead({ title: "Тарифы" });
</script>

<template>
  <div class="container py-8 space-y-8">
    <UIBreadcrumbs
      :items="[
        { label: 'Главная страница', to: '/' },
        { label: 'Тарифы', to: '/tariffs' },
      ]"
    />

    <div class="space-y-3">
      <h1 class="font-bold text-3xl md:text-[41px] tracking-tight">Тарифы</h1>
      <UITick />
      <p class="text-gray-text max-w-[60ch]">
        Выберите план под размер автопарка. Можно перейти на другой тариф в
        любой момент.
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-3">
      <div
        v-for="plan in plans"
        :key="plan.name"
        class="rounded-xl border p-6 flex flex-col gap-5"
        :class="
          plan.featured
            ? 'border-primary shadow-card-hover bg-white'
            : 'border-gray-card-200 bg-gray-card-100 shadow-card'
        "
      >
        <div class="space-y-1">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-bold text-primary-dark">{{ plan.name }}</h2>
            <span
              v-if="plan.featured"
              class="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-2 py-1"
              >Популярный</span
            >
          </div>
          <p class="text-gray-text text-sm">{{ plan.description }}</p>
        </div>

        <div class="flex items-baseline gap-2">
          <span class="text-3xl font-bold">{{ plan.price }}</span>
          <span class="text-gray-text text-sm">{{ plan.period }}</span>
        </div>

        <ul class="space-y-2 text-sm flex-1">
          <li
            v-for="feature in plan.features"
            :key="feature"
            class="flex items-start gap-2"
          >
            <span class="text-primary mt-0.5 shrink-0">
              <IconShieldCheck />
            </span>
            {{ feature }}
          </li>
        </ul>

        <UIButton
          :variant="plan.featured ? 'primary' : 'secondary'"
          class="w-full"
          to="/auth/register"
          >Подключить</UIButton
        >
      </div>
    </div>
  </div>
</template>
