<template>
  <NuxtLayout name="centered">
    <UForm
      :state="form"
      :schema="schema"
      @submit.prevent="handleSubmit"
      class="w-full h-full grid grid-rows-7 pb-10"
    >
      <div class="flex items-center pt-3">
        <Heading2 text="Sign in"></Heading2>
      </div>
      <UFormField label="First name" name="firstName" class="w-full">
        <UInput
          class="w-full"
          v-model="form.firstName"
          type="string"
          required
          placeholder="first name"
        />
      </UFormField>
      <UFormField label="Last name" name="lastName" class="w-full">
        <UInput
          class="w-full"
          v-model="form.lastName"
          type="string"
          required
          placeholder="last name"
        />
      </UFormField>
      <UFormField label="Email" name="email" class="w-full">
        <UInput
          class="w-full"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter your email"
        />
      </UFormField>

      <UFormField label="Password" name="password" class="w-full">
        <UInput
          class="w-full"
          v-model="form.password"
          :type="show ? 'text' : 'password'"
          required
          placeholder="Enter your password"
          :ui="{ trailing: 'pe-1' }"
        >
          <template #trailing>
            <UButton
              color="neutral"
              variant="link"
              size="sm"
              :icon="show ? 'i-lucide-eye' : 'i-lucide-eye-off'"
              :aria-label="show ? 'Hide password' : 'Show password'"
              :aria-pressed="show"
              aria-controls="password"
              @click="show = !show"
            />
          </template>
        </UInput>
      </UFormField>

      <UFormField
        label="Confirm Password"
        name="confirmPassword"
        class="w-full"
      >
        <UInput
          class="w-full"
          v-model="form.confirmPassword"
          type="password"
          required
          placeholder="Confirm your password"
        >
          <template #trailing>
            <UButton
              color="neutral"
              variant="link"
              size="sm"
              :icon="show ? 'i-lucide-eye' : 'i-lucide-eye-off'"
              :aria-label="show ? 'Hide password' : 'Show password'"
              :aria-pressed="show"
              aria-controls="password"
              @click="show = !show"
            />
          </template>
        </UInput>
      </UFormField>
      <div class="w-full h-full flex items-center justify-center">
        <Button v-if="errorMessage === null" type="submit" text="Sign up" />
        <div
          v-if="errorMessage !== null"
          class="w-full h-full flex flex-col justify-center items-center gap-10 bg-(--ui-bg-elevated) rounded-xl p-10 border-1 border-(--ui-border)"
        >
          <p class="mt-2 text-sm text-center text-(--ui-error)">
            {{ errorMessage }}
          </p>
        </div>
      </div>
    </UForm>
  </NuxtLayout>
</template>

<script setup>
  import * as yup from "yup";
  const show = ref(false);
  const schema = yup.object({
    firstName: yup.string().required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("Invalid email").required("Required"),
    password: yup
      .string()
      .min(8, "Must be at least 8 characters")
      .required("Required"),
    confirmPassword: yup
      .string()
      .min(8, "Must be at least 8 characters")
      .required("Required")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });

  const form = ref({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();
  const errorMessage = ref(null);
  const config = useRuntimeConfig();
  const handleSubmit = async () => {
    try {
      const resp = await $fetch(
        config.public.directus.url + "/users/register",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${config.public.directus.token}`,
          },
          body: {
            email: form.value.email,
            password: form.value.password,
            verification_url: "http://localhost:3000/verify-email",
            first_name: form.value.firstName,
            last_name: form.value.lastName,
          },
        }
      );
      console.log(">", resp);
    } catch (error) {
      if (error?.data?.errors[0].extensions.code === "RECORD_NOT_UNIQUE") {
        router.push("/emailExists");
      } else {
        errorMessage.value =
          error.message || "An unexpected error occurred. Please try again.";
        return;
      }
    }
    // router.push("/checkYourMail");
  };
</script>

<style scoped></style>
