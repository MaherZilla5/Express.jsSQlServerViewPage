const config = {
    user: 'matt',
    password: '12345',
    server: 'LOCALHOST\\SQLEXPRESS',
    port: 1433,
    database: 'Northwind',
    options: {
        trustServerCertificate: true
    }
} 

module.exports = config;