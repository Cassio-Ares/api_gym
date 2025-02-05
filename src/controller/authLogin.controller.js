import { getByEmailTeam } from "../models/companyTeam.model.js";
import { getByEmailInstructor } from "../models/instructor.model.js";
import { compareCrypt } from "../utils/bcryptUtils.js";
import { emailValid } from "../utils/emailValid.js";
import { createTokenInstructor, createTokenTeam } from "../utils/jwtUtils.js";

export const authLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
   let isValid = emailValid(email) 

  
    if(!isValid){
      return res.status(404).json({message: "Verifique se e-mail esta em um formato valido."})
    }

    const team = await getByEmailTeam(email);
    const instructor = await getByEmailInstructor(email);
   
    let token;


    if (!team && !instructor) {
      return res
        .status(404)
        .json({ message: "Email ou password não encontrado" });
    }

  
    if (team) {
      const passwordMatch = await compareCrypt(password, team.password);

      if (!passwordMatch) {
        return res.status(404).json({ message: "Email ou password não encontrado" });
      }
    
      token = createTokenTeam(team.id);
    }

    if (instructor) {
      const passwordMatch = await compareCrypt(password, instructor.password);
      if (!passwordMatch) {
        return res
          .status(404)
          .json({ message: "Email ou password não encontrado" });
      }
      token = createTokenInstructor(instructor.id);
    }

    res.status(200).json({ message: "Login bem-sucedido", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro no servidor" });
  }
};
