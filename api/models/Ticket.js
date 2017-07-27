/**
 * Ticket.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'mysql',
  attributes: {
  	folio:{
  		type: 'string'
  	},
  	status:{
  		type: 'string'
  	},
  	costumer_id:{
  		type: 'integer'
  	},
    items: {
      collection: 'item',
      via: 'owner'
    }
  }
};

