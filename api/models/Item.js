/**
 * Item.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	brand:{
		type: 'string'
	},
	model:{
		type: 'string'
	},
	device_kind:{
		type: 'string'
	},
	quotation:{
		type: 'string'
	}
  }
};

