export default defineNuxtRouteMiddleware(async () => {
  const { data } = await useFetch("/api/me");

  if (
    (data.value as { status: string }).status != "unauthenticated" &&
    (data.value as { role: { authority: number } }).role.authority > 0
  ) {
    // Continue to the page
  } else {
    return navigateTo("/");
  }
});
