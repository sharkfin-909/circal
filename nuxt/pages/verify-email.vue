<template>
  <NuxtLayout name="centered">
    <div class="grid grid-rows-3 h-full">
      <div class="row-span-1 flex items-center">
        <Heading2  text="Email Verification" />
      </div>
      <div class="row-span-2 w-full flex flex-col items-center justify-center gap-30">
        <p v-if="status === 'verifying'">Verifying your email...</p>

        <Heading3
          v-if="status === 'success'"
          text="Welcome to Circal Studio!"
        />

        <div v-if="status === 'success'" class="w-full flex justify-center">
          <Button
            type="submit"
            to="/studio"
            text="make your first circal"
          ></Button>
        </div>

        <p v-if="status === 'error'">
          Oops! Verification failed: Email link not valid...
        </p>

        <Button v-if="status === 'error'" text="send new link" />
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
  const route = useRoute();
  const status = ref("verifying");
  const error = ref(null);
  const config = useRuntimeConfig();
  onMounted(async () => {
    const token = route.query.token;
    console.log(token);
    const config = useRuntimeConfig();
    if (!token) {
      status.value = "error";
      error.value = "Missing verification token.";
      return;
    }

    try {
      const resp = await $fetch(
        config.public.directus.url + "/users/register/verify-email",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${config.public.directus.token}`,
          },
          params: {
            token: token,
          },
        }
      );
      console.log(">", resp);
    } catch (err) {
      status.value = "error";
      error.value = err.message;
    }
    status.value = "success";
  });
</script>
