# INSTALL 
## yarn 
## sequelize init

# RUN 
## yarn dev 

# ENDPOINTS 
## localhost:3000

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


### Database
#### sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string,password:string
#### sequelize db:migrate