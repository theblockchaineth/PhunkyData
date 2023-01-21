'use strict';

/**
 * spotlight service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::spotlight.spotlight');
