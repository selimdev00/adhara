<script setup lang="ts">
import { useForm } from "vee-validate";
import { object, string } from "yup";

const validationSchema = object().shape({
  carNumber: string().required("Необходимо заполнить"),
  region: string().required("Необходимо заполнить"),
  insurance: string().required("Необходимо заполнить"),
});

const { handleSubmit, resetForm } = useForm({ validationSchema });

const onSubmit = handleSubmit(() => {
  useNuxtApp().$toast.info("Данные отправлены");
  resetForm();
});
</script>

<template>
  <section class="grid xl:grid-cols-2 items-center justify-items-center overflow-hidden">
    <form
      @submit.prevent="onSubmit"
      class="w-full max-w-[560px] xl:max-w-none md:mt-20 mt-10 space-y-4"
    >
      <h1
        class="font-bold md:text-[41px] text-3xl md:leading-[49.2px] tracking-tight"
      >
        Проверьте штрафы и зарегистрируйтесь в 1 клик
      </h1>

      <div class="space-y-3">
        <div class="flex lg:flex-nowrap flex-wrap gap-x-8 gap-3">
          <UIFormField
            v-slot="{ id, invalid, describedby }"
            name="carNumber"
            label="Номер автомобиля"
            class="xl:w-[320px] xl:shrink-0"
          >
            <UIFormInputText
              :id="id"
              type="text"
              autocomplete="off"
              :aria-invalid="invalid"
              :aria-describedby="describedby"
            />
          </UIFormField>

          <UIFormField
            v-slot="{ id, invalid, describedby }"
            name="region"
            label="Регион"
          >
            <UIFormInputText
              :id="id"
              type="text"
              inputmode="numeric"
              autocomplete="off"
              :aria-invalid="invalid"
              :aria-describedby="describedby"
            />
          </UIFormField>
        </div>

        <UIFormField
          v-slot="{ id, invalid, describedby }"
          name="insurance"
          label="Свидетельство о регистрации ТС"
        >
          <UIFormInputText
            :id="id"
            type="text"
            autocomplete="off"
            :aria-invalid="invalid"
            :aria-describedby="describedby"
          />
        </UIFormField>
      </div>

      <div class="flex items-center gap-x-[19px] gap-y-4 flex-wrap">
        <UIButton class="h-[45px] !px-[18px] !text-lg" type="submit">
          Проверить штрафы
          <IconArrowRight />
        </UIButton>

        <VideoPopup
          video-url="https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1"
        >
          <template #trigger>
            <UIButton
              @click.prevent
              class="h-[45px] !px-5 !text-lg !gap-2"
              variant="secondary"
            >
              <span class="text-[30px]">
                <IconYoutube />
              </span>

              <span>О сервисе</span>

              <span class="text-[15px] text-gray-text">(1 мин. 20 сек)</span>
            </UIButton>
          </template>
        </VideoPopup>
      </div>

      <p class="text-gray-text text-[13px] leading-[15.6px]">
        Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки
        персональных данных и принимаете оферту
      </p>
    </form>

    <nuxt-img
      src="/images/compas-landing-image.png"
      alt="Интерфейс сервиса Компас на ноутбуке и смартфоне"
      width="640"
      height="430"
      densities="x1 x2"
      class="w-full max-w-[640px] mx-auto p-2 sm:p-6 mt-6 sm:mt-14"
    />
  </section>
</template>
