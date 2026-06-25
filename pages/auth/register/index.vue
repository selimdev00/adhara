<script setup lang="ts">
import { object, string, ref as yupRef } from "yup";
import { useForm } from "vee-validate";

const validationSchema = object().shape({
  phoneNumber: string()
    .required("Необходимо заполнить")
    .min(18, "Номер телефона не валиден"),
  password: string()
    .required("Необходимо заполнить")
    .min(8, "Минимальная длина пароля: 8"),
  confirmPassword: string()
    .required("Необходимо заполнить")
    .oneOf([yupRef("password")], "Пароли не совпадают"),
});

const { handleSubmit, resetForm } = useForm({ validationSchema });

const onSubmit = handleSubmit(() => {
  useNuxtApp().$toast.info("Данные отправлены");
  resetForm();
  return navigateTo("/");
});
</script>

<template>
  <div class="flex items-center justify-center min-h-[70vh] px-4 py-12">
    <form
      @submit.prevent="onSubmit"
      class="shadow-card bg-gray-card-100 border-gray-card-200 border space-y-4 p-6 rounded-lg w-full max-w-[400px]"
    >
      <div class="space-y-1">
        <h1 class="font-bold text-2xl text-center">Регистрация</h1>

        <UIFormField
          v-slot="{ id, invalid, describedby }"
          name="phoneNumber"
          label="Номер телефона"
        >
          <UIFormInputText
            :id="id"
            placeholder="Введите номер телефона"
            mask="+7 (###) ###-##-##"
            type="tel"
            autocomplete="tel"
            :aria-invalid="invalid"
            :aria-describedby="describedby"
          />
        </UIFormField>

        <UIFormField
          v-slot="{ id, invalid, describedby }"
          name="password"
          label="Пароль"
        >
          <UIFormInputText
            :id="id"
            placeholder="Введите пароль"
            type="password"
            autocomplete="new-password"
            :aria-invalid="invalid"
            :aria-describedby="describedby"
          />
        </UIFormField>

        <UIFormField
          v-slot="{ id, invalid, describedby }"
          name="confirmPassword"
          label="Подтвердите пароль"
        >
          <UIFormInputText
            :id="id"
            placeholder="Подтвердите пароль"
            type="password"
            autocomplete="new-password"
            :aria-invalid="invalid"
            :aria-describedby="describedby"
          />
        </UIFormField>
      </div>

      <UIButton class="w-full">Зарегистрироваться</UIButton>
    </form>
  </div>
</template>
