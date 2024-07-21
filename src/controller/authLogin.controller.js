import { getByEmailTeam } from "../models/companyTeam.model";
import { getByEmailInstructor } from "../models/instructor.model";
import { compareCrypt } from "../utils/bcryptUtils.js";
import { createTokenInstructor, createTokenTeam } from "../utils/jwtUtils.js";



export const authLogin = async (req, res) =>{
  try {
    const {email, password} = req.body;
    const team = await getByEmailTeam(email);
    const intructor = await getByEmailInstructor(email);
    let token;

    if(!team || !intructor){
        return res.status(404).json({ message: 'Email ou password não encontrado' });
    }
    
    if(team){
        const passwordCollaborator = await compareCrypt(password, team.password)

        if (!passwordCollaborator) {
            return res.status(401).json({ message: 'Email ou password não encontrado' });
        }
       
        token = createTokenTeam(team.id)

    }
    
    if(intructor){
        const passwordInstructor = await compareCrypt(password, intructor.password)

        if(!passwordInstructor){
            return res.status(401).json({ message: 'Email ou password não encontrado' });
        }

        token = createTokenInstructor(intructor.id)
    }

    res.status(200).json({ message: 'Login bem-sucedido', token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
}