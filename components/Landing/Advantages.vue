<script setup lang="ts">
const items = [
  {
    label: "Неограниченный автопарк",
    text: "Можно добавить неограниченное кол-во машин и водителей",
    icon: resolveComponent("IconInfinity"),
  },
  {
    label: "Сокращение затрат до 50%",
    text: "Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке",
    icon: resolveComponent("IconMap"),
  },
  {
    label: "Безопасность",
    text: "Данные передаются в зашифрованном виде, они доступны только получателю",
    icon: resolveComponent("IconShieldCheck"),
  },
  {
    label: "Уведомление о погашении",
    text: "Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП",
    icon: resolveComponent("IconBellRing"),
  },
  {
    label: "Квитанция об оплате",
    text: "После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.",
    icon: resolveComponent("IconReceipt"),
  },
  {
    label: "Вся история сохраняется по каждой машине",
    text: "Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам",
    icon: resolveComponent("IconTimeHistory"),
  },
];
</script>

<template>
  <section>
    <div class="max-w-[1160px] mx-auto space-y-7">
      <div class="space-y-3 text-center">
        <p
          class="text-primary text-sm font-bold uppercase tracking-wider"
        >
          Преимущества
        </p>

        <h2 class="md:text-[34px] text-2xl font-bold">
          Плюсы использования сервиса «Компас» для анализа штрафов
        </h2>

        <UITick align="center" />
      </div>

      <ul class="grid xl:grid-cols-3 lg:grid-cols-2 sm:gap-8 gap-4">
        <li
          v-for="(item, index) in items"
          :key="item.label"
          class="flex items-center gap-4 bg-gray-card-100 border border-gray-card-200 rounded-lg px-5 py-6 shadow-card"
        >
          <span class="text-primary-dark text-[60px] shrink-0">
            <component :is="item.icon" />
          </span>

          <div class="space-y-[10px]">
            <h3 class="text-primary-dark font-bold text-lg leading-[21.6px]">
              {{ item.label }}
            </h3>

            <p class="text-[15px] leading-[18px]">{{ item.text }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
