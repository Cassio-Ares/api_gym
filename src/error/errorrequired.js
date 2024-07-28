export const isRequired = (
  res,
  firstName,
  lastName,
  cpf,
  telephone,
  dateOfBirth
) => {
  if (!firstName) {
    return res
      .status(400)
      .json({ message: "Nome é necessário para cadastro." });
  }
  if (!lastName) {
    return res
      .status(400)
      .json({ message: "Sobrenome é nescessário para cadastro." });
  }
  if (!cpf) {
    return res
      .status(400)
      .json({ message: "CPF é nescessário para cadastro." });
  }
  if (!telephone) {
    return res
      .status(400)
      .json({ message: "Telefone é nescessário para cadastro." });
  }
  if (!dateOfBirth) {
    return res
      .status(400)
      .json({ message: "Data de nascimento é nescessário para cadastro." });
  }

  
};
