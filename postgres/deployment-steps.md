# Create a Postgres DB somewhere...
Personally, I'm using Digital Ocean

# Create a new role/user on Postgres
I name mine by app, db, or purpose "i.e. phunkdatauser"
You can do this in the pg terminal or via a UI using something like pgAdmin

SQL: CREATE ROLE {username-goes-here} WITH
	LOGIN
	NOSUPERUSER
	NOCREATEDB
	NOCREATEROLE
	INHERIT
	NOREPLICATION
	CONNECTION LIMIT -1
	PASSWORD 'xxxxxx';

# Create a database on Postgres and assign the new user above as the owner when creating
You can do this in the pg terminal or via a UI using something like pgAdmin

SQL: CREATE DATABASE {database-name-goes-here}
    WITH
    OWNER = {username-goes-here}
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;