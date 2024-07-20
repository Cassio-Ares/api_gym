import bcrypt from 'bcrypt';

export const crypt = async (password) => {
    const saltRounds = process.env.HASHPASSWORD;
    return await bcrypt.hash(password, saltRounds);
}

export const compareCrypt = async (password, hash) =>{
    return await bcrypt.compare(password, hash)
}