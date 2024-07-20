import { getALL, getById, save, updateClient } from "../models/gymClient.model";
import { crypt } from "../utils/bcryptUtils";
import { emailValid } from "../utils/emailValid";

export const gelAllClient = async (_, res) => {
  try {
    const data = await getALL();
    return res.status(200).json({ data });
  } catch (error) {
    //to do
  }
};

export const getClientById = async (req, res) => {
  try {
    const data = await getById(req.params.id);
    if (data) {
      res.status(200).json({ data });
    } else {
      res.status(404).json({ message: "to do" });
    }
  } catch (error) {
    // to do
  }
};

export const saveClient = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email && !emailValid(email)) {
      res.status(404).json({ message: "to do" });
    }

    if(!password){
      return res.status(400).json({ error: "Password is required" });
    }

    const passCrypt = crypt(password);

  const data = {
    ...req.body,
    email:email,
    password:passCrypt
  }

  const client = await save(data);
  
   res.status(201).json({client})

  } catch (error) {
   //to do
  }
};


export const update = async (req, res) =>{
   try {
      const {email, password, ...rest} = req.body;
      const data = {...rest}
     
      if(email && !emailValid(email)){
         return res.status(400).json({ error: "Invalid email format" });
      }else if(email && emailValid(email)){
        data.email = email
      }

      if(password){
         const passCrypt = await crypt(password);
         data.password = passCrypt
      }

      const updateDate = await updateClient(req.params.id, data)
      if(updateDate){
         return res.status(200).json({updateDate})
      }

   } catch (error) {
      // to do 
   }
   
}