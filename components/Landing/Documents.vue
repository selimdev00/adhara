<script setup lang="ts">
const documentStore = useDocumentStore();

const { documents } = storeToRefs(documentStore);
</script>

<template>
  <div class="max-w-[1160px] mx-auto space-y-5 pb-20">
    <div class="space-y-3 text-center">
      <p class="text-primary text-sm font-bold uppercase tracking-wider">
        Документы
      </p>

      <h2 class="text-2xl sm:text-[34px] font-bold">Юридические документы</h2>

      <UITick align="center" />
    </div>

    <div class="mx-4 sm:mx-5 py-1 relative overflow-hidden">
      <Swiper
        centered-slides-bounds
        center-insufficient-slides
        :modules="[SwiperPagination, SwiperNavigation, SwiperA11y]"
        :a11y="{
          enabled: true,
          prevSlideMessage: 'Предыдущий документ',
          nextSlideMessage: 'Следующий документ',
          paginationBulletMessage: 'Перейти к документу {{index}}',
        }"
        :navigation="{
          nextEl: '.next',
          prevEl: '.prev',
        }"
        :pagination="{
          el: '.pagination',
          clickable: true,
          bulletClass: 'pagination__bullet',
          bulletActiveClass: 'pagination__bullet--active',
          clickableClass: 'pagination__bullet--clickable',
        }"
        :breakpoints="{
          990: {
            slidesPerView: 3,
          },
          650: {
            slidesPerView: 2,
          },
        }"
      >
        <SwiperSlide
          v-for="item in documents"
          :key="item.title"
          class="p-4 flex justify-center items-center"
        >
          <div
            class="shadow-card border border-gray-card-200 min-h-[420px] sm:h-[450px] xl:w-[340px] max-w-[340px] w-full flex flex-col justify-between rounded-xl px-6 pt-5 pb-8 mx-auto"
          >
            <div class="space-y-4">
              <h3
                class="font-bold text-primary-dark text-2xl sm:text-[31px] leading-tight sm:leading-[37.2px]"
              >
                {{ item.title }}
              </h3>

              <p class="text-base sm:text-lg leading-[21.6px]">
                {{ item.text }}
              </p>
            </div>

            <UIButton
              class="w-full text-lg"
              :to="`/documents/${item.id}`"
              :aria-label="`Перейти: ${item.title}`"
              >Перейти</UIButton
            >
          </div>
        </SwiperSlide>

        <div class="pagination !mt-2 flex justify-center"></div>
      </Swiper>

      <button
        type="button"
        aria-label="Предыдущий документ"
        class="prev hidden sm:grid place-items-center absolute top-1/2 -translate-y-1/2 left-0 z-10 w-10 h-10 rounded-full bg-white shadow-card text-primary-dark hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        <IconSliderArrowLeft />
      </button>

      <button
        type="button"
        aria-label="Следующий документ"
        class="next hidden sm:grid place-items-center absolute top-1/2 -translate-y-1/2 right-0 z-10 w-10 h-10 rounded-full bg-white shadow-card text-primary-dark hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        <IconSliderArrowRight />
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.pagination {
  @apply flex items-center gap-1.5;

  &__bullet {
    @apply w-[7px] h-[7px] rounded-full bg-gray-bullet hover:opacity-70 cursor-pointer;

    &--active {
      @apply w-5 bg-primary;
    }
  }
}
</style>
