<template>
  <NuxtLayout name="centered">
    <div class="w-full h-full grid">
      <div class="flex flex-col items-center justify-center">
        <Heading2
          class="text-(--ui-error)"
          text="An account with this email address already exists."
        >
        </Heading2>
      </div>
      <div class="flex flex-col items-center justify-around">
        <Button text="Log In" to="/login" />
        <p>Forgotten the password for your existing account? No worries:</p>
        <Button text="Reset Password" to="/reset-password" />
      </div>
    </div>
  </NuxtLayout>
</template>
<script setup></script>
