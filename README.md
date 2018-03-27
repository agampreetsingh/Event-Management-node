# Event Management(in NodeJS)

## Step1: 
```shell
cd eveman
npm init
npm install --save express
```


## Step2: Setup the DB

Run MySQL as root `mysql -u root -p` and create a DB and a User

```sql
CREATE DATABASE eventman;
CREATE USER eventadmin IDENTIFIED BY 'eventpass';
USE eventman;
GRANT ALL PRIVILEGES ON eventman to eventadmin@'%';
```

Login using the new user and verify the database is accessible, first
login with `mysql -u eventadmin -p`


```sql
USE eventman;
```
## Step3:

```shell
node server.js
````
