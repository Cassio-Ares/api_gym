import jwt from "jsonwebtoken";

export const createTokenTeam = (id) => {
  const idUser = { id };
  const options = { expiresIn: '1d' };

  return jwt.sign(idUser, JWTSECRETTEAM, options);
};

export const verifyTokenTeam = (token) => {
  try {
    return jwt.verify(token, JWTSECRETTEAM);
  } catch (error) {
    return null;
  }
};

export const createTokenInstructor = (id) => {
  const idUser = { id };
  const options = { expiresIn: '1d' };
  return jwt.sign(idUser, JWTSECRETINSTRUCTOR, options);
};

export const verifyTokenInstructor = (token) => {
  try {
    return jwt.verify(token, JWTSECRETINSTRUCTOR);
  } catch (error) {
    return null;
  }
};
