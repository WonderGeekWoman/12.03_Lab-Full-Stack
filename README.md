# CS208 12.03 Lab - Full Stack

- **Name:** Amanda Halverson
- **GitHub:** [https://github.com/WonderGeekWoman/12.03_Lab-Full-Stack](https://github.com/WonderGeekWoman/12.03_Lab-Full-Stack)
- **Term:** Fall 2026

## Project Description

This is my full-stack ToDo List for Lab 12 in CS208 built with Node.js,
Express, Pug, and MariaDB (MySql). I edited a given template to create
the required functionality, add my own functionality, and create my own
style. The application uses Express for the backend and MariaDB (MySQL)
for the database.
* Please read the following instructions carefully because
some of the setup only needs to be done once.

## Features
* **Create tasks:** Add new tasks to the Task List with automatic input
focus and validation to prevent blank or space-only entries.
* **Edit tasks:** Click the Edit button next to an existing task for a text
box and Save button to edit that task.
* **Complete/Undo Complete:** Move finished tasks to the Completed list with
the checkmark icon button or move them back to the unfinished task list with
the redo icon button.
* **Delete tasks:** Permanently remove tasks individually from either list
with X icon button.

## Install the Database

To set up the database, run the `install_db.sh` script in the setup_scripts
directory. This script will install MariaDB and start the server running.
You only need to run this script once per Codespace.

```bash
./setup_scripts/install_db.sh
```

Use the following for questions that the script asks:

* Switch to unix_socket authentication [Y/n] n
* Change the root password? [Y/n] Y
* Set the password to 12345
* Remove anonymous users? [Y/n] Y
* Disallow root login remotely? [Y/n] Y
* Remove test database and access to it? [Y/n] Y
* Reload privilege tables now? [Y/n] Y

## Create the Database Tables

Create the initial tables by running the following command:

```bash
sudo mysql -u root -p < ./setup_scripts/create_demo_table.sql
```


## Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

## Run the Application

Start the application using the following command:

```bash
npm start
```

## Access the Application

On Codespaces, you can access the application by forwarding port 3000.
Open the forwarded port in your browser to view the application.

## AI Usage Disclosure

I used an AI assistant (Google Gemini) during development to help troubleshoot Pug indentation, refine CSS Flexbox layouts and hover states, and verify Express/SQL query syntax for the update, complete, and undo features as I instructed. All code was implemented, tested, and verified by me.