import { INodeProperties } from 'n8n-workflow';

export const databasePageOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['databasePage'],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a page in a database',
				action: 'Create a database page',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve a page from a database',
				action: 'Get a database page',
			},
			{
				name: 'Get Many',
				value: 'getAll',
				description: 'Retrieve multiple pages from a database',
				action: 'Get many database pages',
			},
			{
				name: 'Update',
				value: 'update',
				description: 'Update a page in a database',
				action: 'Update a database page',
			},
		],
		default: 'create',
	},
];

export const databasePageFields: INodeProperties[] = [
	// ----------------------------------
	//          Database Page: Create
	// ----------------------------------
	{
		displayName: 'Database ID',
		name: 'databaseId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['databasePage'],
				operation: ['create'],
			},
		},
		default: '',
		description: 'The ID of the database where the page will be created',
	},
	{
		displayName: 'Properties',
		name: 'properties',
		type: 'collection',
		placeholder: 'Add Property',
		displayOptions: {
			show: {
				resource: ['databasePage'],
				operation: ['create'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'Title of the page',
			},
			{
				displayName: 'Content',
				name: 'content',
				type: 'string',
				typeOptions: { rows: 5 },
				default: '',
				description: 'Optional content or notes for the page',
			},
		],
	},

	// ----------------------------------
	//          Database Page: Get
	// ----------------------------------
	{
		displayName: 'Page ID',
		name: 'pageId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['databasePage'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'The ID of the page to retrieve',
	},

	// ----------------------------------
	//        Database Page: Get Many
	// ----------------------------------
	{
		displayName: 'Database ID',
		name: 'databaseId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['databasePage'],
				operation: ['getAll'],
			},
		},
		default: '',
		description: 'The ID of the database to retrieve pages from',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				resource: ['databasePage'],
				operation: ['getAll'],
			},
		},
		default: false,
		description: 'Whether to return all results or limit the number',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				resource: ['databasePage'],
				operation: ['getAll'],
				returnAll: [false],
			},
		},
		typeOptions: { minValue: 1, maxValue: 100 },
		default: 50,
		description: 'Maximum number of pages to return',
	},

	// ----------------------------------
	//          Database Page: Update
	// ----------------------------------
	{
		displayName: 'Page ID',
		name: 'pageId',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['databasePage'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'The ID of the page to update',
	},
	{
		displayName: 'Properties',
		name: 'properties',
		type: 'collection',
		placeholder: 'Add Property',
		displayOptions: {
			show: {
				resource: ['databasePage'],
				operation: ['update'],
			},
		},
		default: {},
		options: [
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				description: 'New title of the page',
			},
			{
				displayName: 'Content',
				name: 'content',
				type: 'string',
				typeOptions: { rows: 5 },
				default: '',
				description: 'New content for the page',
			},
		],
	},
];
