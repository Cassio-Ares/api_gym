import jwt from "jsonwebtoken";

export const createTokenTeam = (id) => {
  const idUser = { id };
  const options = { expiresIn: '1d' };

  return jwt.sign(idUser, process.env.JWTSECRETTEAM, options);
};

export const verifyTokenTeam = (token) => {
  try {
    return jwt.verify(token, process.env.JWTSECRETTEAM);
  } catch (error) {
    return null;
  }
};

export const createTokenInstructor = (id) => {
  const idUser = { id };
  const options = { expiresIn: '1d' };
  return jwt.sign(idUser, process.env.JWTSECRETINSTRUCTOR, options);
};

export const verifyTokenInstructor = (token) => {
  try {
    return jwt.verify(token, process.env.JWTSECRETINSTRUCTOR);
  } catch (error) {
    return null;
  }
};
