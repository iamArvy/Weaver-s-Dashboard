export default defineNuxtPlugin((nuxtApp) => {
  const access_token = useCookie("access_token");
  const api = $fetch.create({
    baseURL: "https://api.myapp.com",
    onRequest({ request, options }) {
      if (access_token.value) {
        options.headers.set("Authorization", `Bearer ${access_token.value}`);
      }
    },
    async onResponse({ response }) {
      if (response.status === 401) {
        // Handle unauthorized access
        const { setError } = useFlash();
        setError("Unauthorized access. Please log in again.");
        await nuxtApp.runWithContext(() => navigateTo("/auth/login"));
      }
    },
  });

  return {
    provide: {
      api,
    },
  };
});
