<template>
  <div class="w-full h-full grid">
    <div class="flex items-center">
      <Heading text="Email Verification">?</Heading>
    </div>
    <div class="h-full flex flex-col items-center justify-around">
      <p v-if="status === 'verifying'">Verifying your email...</p>
      <div v-if="status === 'success'" class="">
        <h2>Welcome to Circal Studio!</h2>
        <div class="w-full flex items-center">
          <UButton type="submit" block>make your first circal</UButton>
        </div>
      </div>

      <p v-if="status === 'error'">
        Oops! Verification failed: Your email link has expired...
      </p>

      <Button v-if="status === 'error'" text="send new link" />
    </div>
  </div>
</template>

<script setup>
x
  const route = useRoute();
  const status = ref("verifying");
  const error = ref(null);

  onMounted(async () => {
    const token = route.query.token;

    if (!token) {
      status.value = "error";
      error.value = "Missing verification token.";
      return;
    }

    try {
      const res = await $fetch(
        "http://localhost:8055/users/register/verify-email",
        {
          method: "GET",
          params: {
            token: token,
          },
        }
      );

      if (res && res.data) {
        status.value = "success";
      } else {
        throw new Error("Invalid response from Directus.");
      }
    } catch (err) {
      status.value = "error";
      error.value = err.message;
    }
  });
</script>
