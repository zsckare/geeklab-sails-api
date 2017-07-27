/**
 * Item.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
 connection: 'mysql',
  attributes: {
	brand:{
		type: 'string'
	},
	model:{
		type: 'string'
	},
	device_kind:{
		type: 'integer'
	},
	quotation:{
		type: 'string'
	},
	description:{
		type: 'string',
		maxLength: 255
	},
	owner: {
      model: 'ticket'
    }
  }
};

