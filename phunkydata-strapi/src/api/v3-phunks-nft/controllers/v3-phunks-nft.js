'use strict';

/**
 * v3-phunks-nft controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::v3-phunks-nft.v3-phunks-nft', ({ strapi }) => ({

    async find(ctx) {
  
      const { data, meta } = await super.find(ctx);
  
      var reducedData = [];
      for (var i = 0; i < data.length; i++) {
          var activeRecord = data[i]['attributes'];
          reducedData.push(activeRecord);
      }
  
      return { data: reducedData, meta };
    },
  
    async findOne(ctx) {
      const { id } = ctx.params;
      const entity = await strapi.db.query('api::v3-phunks-nft.v3-phunks-nft').findOne({
          where: { tokenId: id }
      });
  
      delete entity?.id;
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
  
      return this.transformResponse(sanitizedEntity);
    },
  
  }));