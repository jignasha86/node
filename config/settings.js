module.exports = {
    development: {
        ip: '18.221.36.110',
        port: 3001,
        db: {
            host: 'esp.ct5yek3ngvxr.us-east-2.rds.amazonaws.com',
            port: 3306,
            protocol: 'mysql',
            user: 'root',
            password: 'Password1!',
            database: 'esp',
            connectionLimit: 100
        }
    },
    production: {
        ip: '18.221.36.110',
        port: 3001,
        db: {
            host: 'esp.ct5yek3ngvxr.us-east-2.rds.amazonaws.com',
            port: 3306,
            protocol: 'mysql',
            user: 'root',
            password: 'Password1!',
            database: 'esp',
            connectionLimit: 100
        }
    }
};
