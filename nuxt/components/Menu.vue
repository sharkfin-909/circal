<template>
  <UNavigationMenu orientation="vertical" :items="items" class="w-full justify-center" />
</template>

<script setup>
  const items = [
    {
      label: "make a circal",
      icon: "material-symbols:heart-plus-rounded",
      to: "/studio",

    },
    {
      label: "my circals",
      icon: "material-symbols:book-5",
      to: "/composables",
      children: [
        {
          label: "defineShortcuts",
          icon: "i-lucide-file-text",
          description: "Define shortcuts for your application.",
          to: "/composables/define-shortcuts",
        },
        {
          label: "useOverlay",
          icon: "i-lucide-file-text",
          description: "Display a modal/slideover within your application.",
          to: "/composables/use-overlay",
        },
        {
          label: "useToast",
          icon: "i-lucide-file-text",
          description: "Display a toast within your application.",
          to: "/composables/use-toast",
        },
      ],
    },

    {
      label: "Sign up",
      icon: "tdesign:user-arrow-up",
      to: "/signup",
    },
    {
      label: "Log In",
      icon: "lets-icons:sign-in",
      to: "/login",
    },
  ];
</script>
