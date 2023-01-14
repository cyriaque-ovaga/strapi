'use strict';

/**
 * federation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::federation.federation');