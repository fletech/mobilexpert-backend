'use strict';

/**
 * hardware router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::hardware.hardware');
