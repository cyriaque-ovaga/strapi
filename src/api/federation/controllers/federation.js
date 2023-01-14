'use strict';

/**
 * federation controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::federation.federation');