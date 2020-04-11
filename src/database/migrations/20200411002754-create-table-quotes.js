'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db) {
	return db.createTable('quotes', {
		id: {
			type: 'int',
		    unsigned: true,
		    notNull: true,
		    primaryKey: true,
		    autoIncrement: true,
		    length: 11
		},
		departure: {
			type: 'varchar',
		    notNull: true,
			length: 255,
		},
		arrival: {
			type: 'varchar',
		    notNull: true,
			length: 255,
		},
		value: {
			type: 'float',
		    notNull: true,
			length: 11,
		},
		status: {
			type: 'varchar',
			legth: 255,
		    notNull: true
		},
        created_at: {
            type: 'datetime',
            defaultValue: 'CURRENT_TIMESTAMP',
            notNull: true
        },
        updated_at: {
            type: 'datetime',
            defaultValue: 'CURRENT_TIMESTAMP',
            notNull: true
        }
	});
};

exports.down = function(db) {
 	return db
 	.dropTable('quotes');
};

exports._meta = {
  "version": 1
};
