export default defineNuxtRouteMiddleware(async () => {
  const { data }: { data: { value: { role: string; status: string } } } =
    await useFetch("/api/me");

  if (
    data.value.status != "Unauthenticated" &&
    data.value.role.includes("admin")
  ) {
  } else {
    return navigateTo("/");
  }
});
