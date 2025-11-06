/**
 * publicacion controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::publicacion.publicacion', ({ strapi }) => ({
    async find(ctx) {
        const entities  = await strapi.entityService.findMany('api::publicacion.publicacion', {
            populate: ['categorias'], // Agregar mas relaciones si es necesario
        });
        return entities;
    },

    async findOne(ctx) {
        const { id } = ctx.params;
        
        const entity = await strapi.entityService.findOne('api::publicacion.publicacion', id, {
            populate: {
                categorias: true,
                contenido: true,
            },
        });
        return entity;
    },
}));
