import { pool } from './mysql-pool';

class DataBase{
  select(success){
    pool.query(
      'SELECT * FROM Table',
      (error, result) =>{
        if(error) console.log(error);
        success(result)
      }
    )
  }

  selectSpecific(id, success){
    pool.query(
      'SELECT * FROM Table WHERE id=?',
      [id],
      (error, result) =>{
        if(error) console.log(error);
        success(result[0]);
      }
    )
  }

  insert(table, elements){
    pool.query(
      `INSERT INTO ${table} VALUES ?`,
      [elements.firstThing, elements.secondThing], //and so on for all values
      (error) =>{
        if(error) console.log(error);
      }
    )
  }
}

export let dataBase = new DataBase();
