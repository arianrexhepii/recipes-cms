'use strict';

/**
 *  recipes-list controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::recipes-list.recipes-list');
