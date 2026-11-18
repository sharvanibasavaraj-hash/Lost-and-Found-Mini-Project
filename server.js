const express = require("express");
const mysql = require("mysql2");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// DB CONNECTION
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your sql passsword",
    database: "lostfound"
});

db.connect(err => {
    if (err) {
        console.log("DB Error:", err);
    } else {
        console.log("DB Connected");
    }
});


// HOME
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "home.html"));
});


// ADD ITEM (FIXED 100%)
app.post("/add", (req, res) => {

    const d = req.body;

    console.log("FORM DATA RECEIVED:", d);

    let lost_date = null;
    let found_date = null;

    // IMPORTANT FIX (safe check)
    const type = (d.type || "").toLowerCase();

    if (type === "lost" && d.lost_date) {
        lost_date = d.lost_date;
    }

    if (type === "found" && d.found_date) {
        found_date = d.found_date;
    }

    const sql = `
    INSERT INTO items(
        student_name,
        usn,
        department,
        student_year,
        item_name,
        description,
        phone,
        email,
        type,
        lost_date,
        found_date,
        location
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(sql,
        [
            d.student_name,
            d.usn,
            d.department,
            d.student_year,
            d.item_name,
            d.description,
            d.phone,
            d.email,
            type,
            lost_date,
            found_date,
            d.location
        ],
        (err) => {

            if (err) {
                console.log(err);
                return res.send(err.sqlMessage);
            }

            res.redirect("/view.html");
        }
    );
});


// GET ITEMS
app.get("/items", (req, res) => {

    db.query("SELECT * FROM items", (err, result) => {

        if (err) {
            console.log(err);
            return res.json([]);
        }

        res.json(result);
    });
});


// DELETE ITEM
app.delete("/delete/:id", (req, res) => {

    db.query(
        "DELETE FROM items WHERE id=?",
        [req.params.id],
        (err) => {

            if (err) {
                return res.send("Delete Failed");
            }

            res.send("Deleted");
        }
    );
});


// LOGS
app.get("/logs", (req, res) => {

    db.query("SELECT * FROM trigger_logs", (err, result) => {

        if (err) {
            return res.json([]);
        }

        res.json(result);
    });
});


// START SERVER
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});