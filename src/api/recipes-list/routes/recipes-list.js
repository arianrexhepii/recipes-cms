'use strict';

/**
 * recipes-list router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::recipes-list.recipes-list');
