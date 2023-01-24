'use strict';

/**
 * smart-contract router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::smart-contract.smart-contract');
