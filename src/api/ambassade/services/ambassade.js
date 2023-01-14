'use strict';

/**
 * ambassade service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ambassade.ambassade');