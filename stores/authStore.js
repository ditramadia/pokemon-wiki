export const useAuthStore = defineStore(
  "auth",
  () => {
    const token = ref(null);
    const user = ref({ email: "" });

    const isAuthenticated = computed(() => token.value !== null);

    function login(email) {
      token.value = "wDsAWsdAwdjLSdwaKdJDwiSLAKd";
      user.value.email = email;
    }

    function logout() {
      token.value = null;
      user.value.email = "";
    }

    return { token, user, isAuthenticated, login, logout };
  },
  {
    persist: true,
  }
);
