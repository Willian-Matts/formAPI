'use strict';

/**
 * Tarefa.js controller
 *
 * @description: A set of functions called "actions" for managing `Tarefa`.
 */

module.exports = {

  /**
   * Retrieve tarefa records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.tarefa.search(ctx.query);
    } else {
      return strapi.services.tarefa.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a tarefa record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.tarefa.fetch(ctx.params);
  },

  /**
   * Count tarefa records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.tarefa.count(ctx.query);
  },

  /**
   * Create a/an tarefa record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.tarefa.add(ctx.request.body);
  },

  /**
   * Update a/an tarefa record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.tarefa.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an tarefa record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.tarefa.remove(ctx.params);
  }
};
