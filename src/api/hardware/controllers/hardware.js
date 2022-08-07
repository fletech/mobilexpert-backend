'use strict';

/**
 *  hardware controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::hardware.hardware');
