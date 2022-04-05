'use strict';

/**
 * npc service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::npc.npc');
