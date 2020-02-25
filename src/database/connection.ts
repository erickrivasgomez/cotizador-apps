import { Sequelize } from 'sequelize';

const sequelize = () => {
    return new Sequelize('vmaDB', 'vmaDEV', '_Development01@', {
        host: 'localhost',
        dialect: 'mssql',
        port: 5432,
        dialectOptions: {
            instanceName: "SQLEXPRESS"
        }
    });
}

export { sequelize }