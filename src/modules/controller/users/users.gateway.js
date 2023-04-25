const {query} = require('../../../utils/mysql');
const {hashPassword} = require("../../../utils/functions");

const findAll = async()=>{
    const sql = `SELECT * from users`;
    return await query(sql, []);
}

const findById = async(id)=>{
    if (Number.isNaN(id)) throw Error("Wrong Type");
    if(!id)throw Error("Missing fields");
    const sql = `SELECT * from users WHERE id=?`;

    return await query(sql, [id]);
}

const save = async(user)=>{
    if(!user.email || !user.password || !user.password || !user.role || !user.personal_id) throw Error("Missing fields");
    const sql = `INSERT INTO users(email, password, role, status, personal_id) VALUES(?,?,?,?,?)`;
    const hashPass = await hashPassword(user.password);
    const {insertedId} = await query(sql, [user.email,hashPass, user.role,1,user.personal_id]);
    delete user.password;
    return {...user, id:insertedId}
}

const update = async (user, id) => {
    //Con esto se valida que id  sea un numero
    if (Number.isNaN(id)) throw Error("Wrong Type");
    //Valida que el id no venga vacio, Espera que mandes un parametro, Y no uno vacio 
    if (!id) throw Error("Missing Fields");
    if (!user.email ||
    !user.password||
    !user.role||
    !user.status||
    !user.personal_id) throw Error("Missing Fields");

    const sql = `UPDATE users SET email=?, password=?,
    role=?, status=?, personal_id=? WHERE id=?`;

    await query(sql, [
        user.email,
        user.password,
        user.role,
        user.status,
        user.personal_id,
        id
    ]);
    if(user.status=="1"){
        user.status="Activo";
    }else if(user.status=="0"){
        user.status="Inactivo";
    }
    console.log(user.status);
    return{ ...user, id:id }
};

const remove = async(id)=>{
    if (Number.isNaN(id)) throw Error("Wrong Type"); 
    if (!id) throw Error('Missing Fields');
    const sql = `DELETE FROM users WHERE id=?`;
    await query(sql,[id]);

    return{ idDeleted:id };
}

module.exports = {findAll, findById, save, update, remove};