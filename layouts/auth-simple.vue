<script setup lang="ts">
import AppLogoIcon from "@/components/AppLogoIcon.vue";

const { props } = useAuthBaseProps();
</script>

<template>
  <div
    class="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10"
  >
    <div class="w-full max-w-sm">
      <div class="flex flex-col gap-8">
        <div class="flex flex-col items-center gap-4">
          <NuxtLink
            :to="{ name: 'index' }"
            class="flex flex-col items-center gap-2 font-medium"
          >
            <div
              class="mb-1 flex h-9 w-9 items-center justify-center rounded-md"
            >
              <AppLogoIcon
                class="size-9 fill-current text-[var(--foreground)] dark:text-white"
              />
            </div>
            <span class="sr-only">{{ props?.title }}</span>
          </NuxtLink>
          <div class="space-y-2 text-center">
            <h1 class="text-xl font-medium">{{ props?.title }}</h1>
            <p class="text-center text-sm text-muted-foreground">
              {{ props?.description }}
            </p>
          </div>
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>
