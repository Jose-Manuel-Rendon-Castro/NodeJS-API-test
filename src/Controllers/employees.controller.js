import { pool } from "../db.js"

export const getEmployees = async (req, res) => {
    try {        
        const [rows] = await pool.query('SELECT * FROM employees');
        res.send(rows);
    }
    catch (error) {
        return res.status(500);
    }
}

export const getEmployeeById = async (req, res) => {
    try {
        const id = req.params.id; 
        const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', id);
        
        if (rows.length <= 0) return res.status(404).json({
            message: 'Employee not found'
        })
        res.status(201).json(rows[0])
    }
    catch {
        return  res.status(500);
    }
}

export const createEmployee = async (req, res) => {
    try {
        const { name, salary } = req.body;
        const result = await pool.query('INSERT INTO employees (name, salary) VALUES (?, ?)', [name, salary])
        console.log(req.body);
        res.status(201).json({ message: 'Post success', data: req.body});
    }
    catch {
        return res.status(500);
    }
}

export const deleteEmployee = async (req, res) => {
    const id = req.params.id;
    const [result] = await pool.query('DELETE FROM employees WHERE id = ?', id);

    if (result.affectedRows <= 0) return res.status(404).json({
        message: "Employee not found"
    })
    res.sendStatus(204);
}

export const updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { name, salary } = req.body;
    const [result] = await pool.query('UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]);
    
    if (result.affectedRows === 0) return res.status(404).json({
        message: 'Employee Not Found'
    })
    console.log(result);
    res.status(201).json('Received');
}