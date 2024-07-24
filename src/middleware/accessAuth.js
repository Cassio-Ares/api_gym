import { verifyTokenInstructor, verifyTokenTeam } from "../utils/jwtUtils.js";


export const authCollaborator = (req, res, next) => {
  try {
    // O token já está disponível em req.token graças ao express-bearer-token
    const token = req.token;
    
    if (!token) {
      return res.status(401).json({ message: 'Acesso negado nenhum token fornecido' });
    }

    const isValid = verifyTokenTeam(token);
    
    if (!isValid) {
      return res.status(401).json({ message: 'Acesso negado nenhum token invalido' });
    }

    req.user = isValid;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro no servidor' });
  }
};
  
export const authIntructor = (req, res, next) => {
    try {
      const token = req.token;

      if(!token){
        return res.status(401).json({ message: 'Acesso negado nenhum token fornecido' });
      }

      const isValid = verifyTokenInstructor(token);

      if(!isValid){
        return res.status(401).json({ message: 'Acesso negado nenhum token invalido' });
      }

     req.user = isValid;
     next()

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Erro no servidor' });
    }
};



//versão de busca e validação do token sem o yarn add express-bearer-token (config no server )

// export const authCollaborator = (req, res, next) => {
//     try {
//       // Extrai o token do cabeçalho Authorization
//       const token = req.headers.authorization?.split(' ')[1];
//       if (!token) {
//           // Se o token não for fornecido, retorna um erro 401 (Não autorizado
//         return res.status(401).json({ message: 'Access Denied: No token provided' });
//       }
  
//       const isValid = verifyTokenTeam(token);
//       if (!isValid) {
//         return res.status(401).json({ message: 'Access Denied: Invalid token' });
//       }
  
//       req.user = isValid; // Adiciona os dados do usuário verificados ao req.user
//       next();
//     } catch (error) {
//       console.log(error);
//       return res.status(500).json({ message: 'Internal Server Error' });
//     }
//   };