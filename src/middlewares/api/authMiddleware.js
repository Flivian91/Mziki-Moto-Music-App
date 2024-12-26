const validate = (token) => {
  const validToken = true;
  if (!token || !validToken) {
    return false;
  }
  return true;
};

export function authMiddleware(req) {
  const token = req.headers.get("authorization")?.split(" ")[1];
  return { isValid: validate(token) };
}
