<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-vue-next";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const schema = toTypedSchema(
  z.object({
    password: z.string().min(8),
  })
);

const { handleSubmit } = useForm({
  initialValues: {
    password: "",
  },
  validationSchema: schema,
});

const submit = handleSubmit(async (values) => {
  console.log(values);
});

const loading = ref(false);

definePageMeta({
  middleware: "auth",
  title: "Confirm password",
  layout: "auth",
});
</script>

<template>
  <form @submit.prevent="submit">
    <div class="space-y-6">
      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormControl>
            <Input
              id="password"
              type="password"
              class="mt-1 block w-full"
              v-bind="componentField"
              required
              autocomplete="current-password"
              autofocus
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <div class="flex items-center">
        <Button class="w-full" :disabled="loading == true">
          <LoaderCircle v-if="loading == true" class="h-4 w-4 animate-spin" />
          Confirm Password
        </Button>
      </div>
    </div>
  </form>
</template>
