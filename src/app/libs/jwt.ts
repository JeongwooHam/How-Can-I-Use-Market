import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

const DEFAULT_AUTH_OPTION: SignOptions = {
  expiresIn: "1h",
};

// jwt token 발급 함수
export const signJwtAccessToken = (
  payload: JwtPayload,
  options: SignOptions = DEFAULT_AUTH_OPTION
) => {
  const secret_key = process.env.SECRET_KEY;
  const token = jwt.sign(payload, secret_key!, options);
  return token;
};

// jwt token 검증 함수
export const verifyJwtAccessToken = (token: string) => {
  try {
    const secret_key = process.env.SECRET_KEY;
    const decoded = jwt.verify(token, secret_key!);
    return decoded as JwtPayload;
  } catch (error) {
    throw new Error("유효하지 않은 token입니다.");
  }
};
