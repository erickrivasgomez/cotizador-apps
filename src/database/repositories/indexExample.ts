import { Sequelize } from 'sequelize';

const sequelize = () => {
    return new Sequelize('test', 'test', 'NuevaPassword2020-@', {
        host: 'localhost',
        dialect: 'mssql',
        port: 5432,
        dialectOptions: {
            instanceName: "SQLEXPRESS" // NAME
        }
    });
}

export { sequelize }