export const fakeLogin = (username: string, password: string) => {
  if (username === "brisalabs" && password === "teste") {
    const token = "token_ficticio";
    localStorage.setItem("token", token);
    return true;
  }
  return false;
};

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};
