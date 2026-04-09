const createDisorder = async (title, description) => {
    const sql = `
        INSERT INTO disorders (title, description)
        VALUES ($1, $2)
        RETURNING *;
    `;
    const values = [title, description];
    const result = await db.query(sql, values);

    return result.rows[0];

};

module.exports = {
    getAllDisorders,
    getDisorderById,
    createDisorder
};