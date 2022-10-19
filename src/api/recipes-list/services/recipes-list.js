'use strict';

/**
 * recipes-list service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recipes-list.recipes-list');
