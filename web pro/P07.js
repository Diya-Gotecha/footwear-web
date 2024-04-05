const mysql = require('mysql2');
const fs = require('fs');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shoe_store'
})

con.connect(function (error) {
    if (error) {
        throw error;
    }
    console.log('Connected Shoe_Store');
})

function dataAdd(request, response) {
    fs.readFile('P07.json', 'utf-8', (error, data) => {
        const query = `INSERT INTO products (id, name, description, brand, gender, category, size, color, price, discountPrice, is_in_inventory, items_left, imageURL, slug) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const resultsArray = [];

        const jsonData = JSON.parse(data);
        jsonData.forEach(function (item, index) {
            const values = [
                item.ID,
                item.NAME,
                item.DESCRIPTION,
                item.BRAND,
                item.GENDER,
                item.CATEGORY,
                JSON.stringify(item.SIZE),
                JSON.stringify(item.COLOR),
                item.PRICE,
                item.DISCOUNTPRICE || null,
                item.IS_IN_INVENTORY,
                item.ITEMS_LEFT,
                item.IMAGEURL,
                item.SLUG
            ];

            con.query(query, values, function (error, results, fields) {
                if (error) {
                    resultsArray.push({ index: index, error: error.message });
                } else {
                    resultsArray.push({ index: index, result: results });
                }

                if (resultsArray.length === jsonData.length) {
                    // All insert operations are complete
                    response.end(JSON.stringify(resultsArray, null, 2));
                }
            });


            // con.query(query, values, (error, results, fields) => {
            //     if (error) {
            //         // console.error('Error inserting data:', error.message);
            //         response.end(error.message);
            //     } else {
            //         // console.log('Data inserted successfully:');
            //         response.end(JSON.stringify(results, null, 2));
            //     }
            // });
        });
    });
}

function dataPrint(request, response) {
    const query = 'SELECT * FROM PRODUCTS';

    con.query(query, function (error, result, fields) {
        if (error) {
            response.end(error.message);
        }
        console.log(result);
        response.end(JSON.stringify(result, null, 2));
    })
}

function dataDelete(request, response) {
    const query = 'DELETE FROM PRODUCTS WHERE ID';

    con.query(query, function (error, result, fields) {
        if (error) {
            // console.error(error.message);
            response.end(error.message);
        }
        response.end(JSON.stringify(result, null, 2));
    })
}

module.exports = {
    dataAdd,
    dataPrint,
    dataDelete
}