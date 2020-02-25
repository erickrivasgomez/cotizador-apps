import { Sequelize } from 'sequelize';

const sequelize = () => {
    return new Sequelize('database', 'user', 'password', {
        host: 'host',
        dialect: 'mssql',
        port: 12345,
        dialectOptions: {
            instanceName: "NAME"
        }
    });
}

export { sequelize }