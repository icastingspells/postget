const db = require('./db.js');

class Controller {
    async create(req, res){
        const {name, title, price, img} = req.body;
        const newItem = await db.query(`INSERT INTO cars (name, title, price, img) values ($1, $2, $3, $4) RETURNING *`, [name, title, price, img]);
        res.json(newItem.rows[0]);
    }
    async get(req, res){
        const items = await db.query(`SELECT id, name, title, price, img FROM cars`);
        res.json(items.rows);
        console.log('get items', items.rows[0]);        
    }
    async delete(req, res){
        const id = req.params.id;
        const deleted = await db.query(`DELETE FROM cars WHERE id = $1`, [id]);
        res.json(deleted.rows);
    }
    async getOne(req, res){
        const id =  req.params.id;
        const item = await db.query(`SELECT id, name, title, price, img FROM cars WHERE id = $1`, [id]);
        res.json(item.rows);
    }
    async update(req, res){
        const id =  req.params.id;
        const {name, description, price, img} = req.body;
        const updateUnit = await db.query(`UPDATE cars SET name = $1, title = $2, price = $3, img = $4 WHERE id = $5`, [name, description, price, img, id]);
        console.log('update unit', id, name, description, price, img, 'res json:', updateUnit.rows)
        res.json(updateUnit.rows[0]);
    }
}

module.exports = new Controller();