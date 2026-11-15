# CS208 12.03 Lab - Full Stack

- Name: Amanda Halverson
- GitHub: [https://github.com/WonderGeekWoman/12.03_Lab-Full-Stack](https://github.com/WonderGeekWoman/12.03_Lab-Full-Stack)
- Term: Fall 2026

## Project Description

This is my full-stack ToDo List for Lab 12 in CS208 built with
Node.js, Express, Pug, and MariaDB(MySql). I edited a given
template to create the required functionality and. The application
uses Express for the backend and MariaDB (MySQL) for the database.
* Please read the following instructions carefully because
some of the setup only needs to be done once.

## Install the Database

To set up the database, run the `install_db.sh` script in the setup_scripts
directory. This script will install MariaDB and start the server running. You
only need to run this script once per Codespace.

```bash
./setup_scripts/install_db.sh
```

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

On Codespaces, you can access the application by forwarding port 3000. Open the
forwarded port in your browser to view the application.