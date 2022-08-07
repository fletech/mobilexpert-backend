'use strict';

/**
 * hardware service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hardware.hardware');
