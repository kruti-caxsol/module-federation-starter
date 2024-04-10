export function setAuthToken(value: string) {
  localStorage.setItem("authToken", value);
}

export function getAuthToken(): null | string {
  return localStorage.getItem("authToken");
}
