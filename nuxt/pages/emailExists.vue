<template>
  <div class="w-full h-full grid">
    <div class="flex flex-col items-center justify-center">
      <Heading
        class="text-(--ui-error)"
        text="An account with this email address already exists."
      >
      </Heading>
    </div>
    <div class="flex flex-col items-center justify-around">
      <Button text="Log In" to="/login" />
      <p>Forgotten the password for your existing account? No worries:</p>
      <Button text="Reset Password" to="/reset-password" />
    </div>
  </div>
</template>
<script setup>

</script>
