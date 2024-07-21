HOSTED link : https://accredian-backend-task-4mkc.onrender.com
Frontend Link : https://accredian-frontend-task-good-ui.netlify.app/

## Application SetUp


- start your MySQL server
### DEVELOPMENT MODE

- rename file example.development.env to .env or use following command
- install node package
- miagrate schema
- start server in development mode

```
cp example.development.env .env
npm install

```

-  Migration of Schema
```
npx prisma migrate dev --name init
```

#### UPDATE ENV FILE WITH YOUR CREDENTIALS

- start server
```
npm run dev
```


