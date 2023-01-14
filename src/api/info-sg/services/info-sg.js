'use strict';

/**
 * info-sg service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::info-sg.info-sg');