'use strict';
module.exports = (sequelize, DataTypes) => {
  const hostname = sequelize.define('hostname', {
    fqdn: DataTypes.STRING,
    redirect_to: DataTypes.STRING,
    force_https: DataTypes.BOOLEAN,
    under_maintenance_since: DataTypes.DATE,
    website_id: DataTypes.INTEGER,
  }, {});
  hostname.associate = function(models) {
    // associations can be defined here
  };
  
  return hostname;
};