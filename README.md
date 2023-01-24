# Phunky Data
Phunky Data is a decentralized effort to tame and govern core and useful data surrounding the V1 (Phillip the Interns), CryptoPhunks V2, and V3 collections.

When building, often developers are duplicating efforts in creating data services that applications require and lean upon. For instance, the metadata of each collection away from IPFS. Likewise, many decentralized projects have essential static data that may be valuable to other projects and builders.

Unfortunately, when it comes to hosting and ultimately the compute required by the server, it requires ownership and centralization (often for billing purposes alone).

With this caveat, what is in the control of a decentralized community? 
- Static Data Insertion
- Collaborative Code
- Low-code Development Options
- The ability to fork or clone a repo and build/deploy it

## What is Phunky Data?
A deployment of the open-source Strapi Headless CMS (Content Management System). This system acts as an ORM against database and media storage and provides an entity based framework and automatic creation of both REST and GraphQL endpoint, out of the box.

These endpoints can be created within the development UI:
```
npm run develop
```
Or; programtically with Javascript.
Likewise, customization of the endpoint model and controller is possible at a code level if/where required.

## Whats the objective?
As a Phunk, who is building, I would like to have access to all of our core data.
I can either go to data.phunky.dev/api (hosted by theblockchain.eth) or stand up my own instance from this repository.

## How to deploy?
- Install a local postgres database on your machine or provision a development database on a cheap cloud hosting solution 
  - I prefer Digital Ocean or Microsoft Azure
  - However, services such as elephantsql offer $0/$5 p/m options for development
- Configure Postgres with a new User and Database for the strapi instance
  - This is detailed in postgres/deployment-steps.md
- Clone or download the repo
- Ensure you have the latest versions of NodeJS
- Open the repo in your editor of choice
  - I recommend VS Code, its free, its industry standard.
- Navigate to the phunkydata-strapi directory within a terminal 
    ```
    cd phunkydata-strapi
    ```

- Run the following command line to get all dependancies
    ```
    npm install
    ```

- Using the .env.example file as a template, create a .env file within the phunkydata-strapi directory. 

*If you need a reference for the internal keys (appkeys, token salt, etc) create a new strapi project in a different directory and steal the auto-generated ones.*
```
HOST=               {this is the host you want to use, default 0.0.0.0}
PORT=               {this is the port you want to use, default 1337}
APP_KEYS=           {best to create a new project and copy them}
API_TOKEN_SALT=     {best to create a new project and copy them}
ADMIN_JWT_SECRET=   {best to create a new project and copy them}
JWT_SECRET=         {best to create a new project and copy them}
DATABASE_HOST=      {postgres server address}
DATABASE_NAME=      {postgres db name}
DATABASE_USERNAME=  {postgres user name}
DATABASE_PASSWORD=  {postgres password}
DATABASE_SSL=       {use require or whatever you postgres is set to}
```

- Run the following command line to start the development UI
    ```
    npm run develop --clean
    ```


## How to use Phunky Data?
Developer:
- See Strapi Docs
- Add Entity
- Add data migration as JSON to the data/ directory
- Add migration steps to the data/ directory as markdown

Admin of Instance:
- Deploy branch
- Insert data with Import within the UI panel as per migrations
- Determine Private (Authenticated) or Public Access
  - Private: Create API Key in Admin Panel (/admin) and grant find() & findAll()
  - Public: Grant find() and findAll() to Public user in the Admin Panel (/admin)

Consumer:
- See Strapi REST API guide for many/single retrieval and filtering, etc
- https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html

## Deployment Nuances
I personally use Digital Ocean and therefore have a production configuration within the .env (DO_* variables) and definitions within the phunkydata-strapi/config/env/production/* directory. If you wish to remove this, please do so in a cloned repo.

Other provider configs and approaches, such as AWS S3 for media storage, can be found here in the docs: https://docs.strapi.io/developer-docs/latest/development/providers.html

You can also use local server storage for both the database and media if you are ok with impermanence or loss risks, aside from app service backups.

Essentially, this app will run anywhere a NodeJS application can (such as Azure WebApps, Heroku, etc) - your milage may vary, I can only speak to Digital Ocean and its pretty cheap and very robust so far. 

You can also get $200 free for 2 months using the Strapi Referral link: https://try.digitalocean.com/strapi/
