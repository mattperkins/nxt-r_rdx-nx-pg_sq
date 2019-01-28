# INSTALL 
## yarn 
## sequelize init

# RUN 
## yarn dev 

# ENDPOINTS 
## localhost:3000
## localhost:3000/signin
## localhost:3000/404

# BUILD
## yarn build // Generates an "out" directory

# DEPLOY  
### update alias URL in now.json
## cd out
## now && now alias 
### or
## sftp put -r *

# Serve
## yarn start


### Database (seed using command line/terminal)

##### Register New Users / Login Users
#### sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string

### Signup POST request 
```
{
	"firstName": "Fred",
	"lastName": "Bloggs",
	"email": "fred@email.com",
	"password": "********"
}

##### API endpoint data
##### For easier readability you can use \ to create new lines:
#### sequelize model:generate --name Team --attributes \
#### nhlId:integer,\
#### abbreviation:string,\
#### name:string,\
#### location:string\
#### url:string

#### sequelize model:generate --name Player --attributes \
#### nhlId:integer,\
#### firstName,\
#### lastName,\
#### number:string,\
#### birthday:string,\
#### nationality:string,\
#### height:string,\
#### weight:string,\
#### shoots:string,\
#### position:string,\
#### positionType:string,\
#### positionAbbreviation:string

#### sequelize db:migrate
#### sequelize db:migrate:undo:all

```