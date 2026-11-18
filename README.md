# Lost & Found Management System

A simple, modern, and user-friendly Lost & Found application that helps users report lost belongings, register found items, and view submitted reports. It provides a centralized platform to make recovering misplaced items easier.

The application uses **MySQL** to store item and student information permanently.

## Features

- **Report Lost Items:** Submit details of belongings that have been lost.
- **Report Found Items:** Register items found by students.
- **Student Details:** Store student name, USN, department, year, phone number, and email.
- **Item Information:** Record item name, description, date, and location.
- **View Reports:** Display submitted lost and found records.
- **Trigger Logs:** Maintain activity logs for item-related database operations.
- **Database Storage:** Store records using MySQL.

## Technologies Used

| **Technology** | **Purpose** |
|---|---|
| HTML | Structure of the application |
| CSS | Styling and user interface |
| JavaScript | Frontend functionality |
| Node.js | Backend runtime |
| Express.js | Server and API development |
| MySQL | Database for storing item records |

## Project Structure

All files are maintained in a single folder.

```text
Lost-And-Found/
│
├── index.html
├── home.html
├── triggerlogs.html
├── style.css
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## Database

**Database Name:** `lostfound`

**Table Name:** `items`

| **Column** | **Description** |
|---|---|
| id | Unique item record ID |
| student_name | Name of the student |
| usn | University Seat Number |
| department | Student's department |
| student_year | Current academic year |
| item_name | Name of the lost or found item |
| description | Description of the item |
| phone | Student contact number |
| email | Student email address |
| type | Lost or Found |
| lost_date | Date the item was lost |
| found_date | Date the item was found |
| location | Location associated with the item |

## Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the Project Folder

```bash
cd Lost-And-Found
```

### 3. Create the MySQL Database

Open MySQL Workbench and execute:

```sql
CREATE DATABASE lostfound;
```

Create the required tables and triggers using your SQL commands.

### 4. Configure Environment Variables

Configure your database credentials locally using environment variables. Do not upload your actual database password to GitHub.

### 5. Install Dependencies

```bash
npm install
```

### 6. Start the Application

```bash
node server.js
```

### 7. Open in Browser

Visit:

```text
http://localhost:3000
```

## How It Works

1. The user accesses the Lost & Found application.
2. Students submit details of lost or found belongings.
3. JavaScript sends the submitted information to the Express.js backend.
4. The backend processes the request and communicates with MySQL.
5. MySQL stores and retrieves item records.
6. The application displays submitted reports.
7. Database triggers maintain activity logs.

## Learning Outcomes

- Understanding frontend and backend integration.
- Building server-side applications using Node.js and Express.js.
- Connecting a Node.js application to MySQL.
- Performing database operations.
- Implementing database triggers.
- Managing and storing records using a relational database.

## Project Type

Mini Project
