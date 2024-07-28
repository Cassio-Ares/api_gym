export const errorBanco = (res, error) =>{
    console.log('Erro no banco de dados', error)
    return res.status(500).json({erro: 'Ocorreu um erro no banco de dados'})
}