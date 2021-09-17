const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const Base = require('./Base.model');

const myCompanySchema = Base.discriminator('MyCompany', new Schema({}));

module.exports = model('MyCompany');
