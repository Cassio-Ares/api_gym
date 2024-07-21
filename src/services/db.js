let conn;

export const db = () =>{
    if(!conn){
        conn = ""
    }

    return conn;
}

/**
 * estrutura base para conexão com banco que se comunica com models
 */