import bcrypt from 'bcrypt';

export const crypt = async (password) => {
    const saltRounds = parseInt(process.env.HASHPASSWORD);
    return await bcrypt.hash(password, saltRounds);
}

export const compareCrypt = async (password, passwordBb) =>{

    return await bcrypt.compare(password, passwordBb)
}