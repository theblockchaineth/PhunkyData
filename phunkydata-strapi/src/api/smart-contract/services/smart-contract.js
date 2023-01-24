'use strict';

/**
 * smart-contract service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::smart-contract.smart-contract');
