<?php
// This file is generated. Do not modify it manually.
return array(
	'ludvigs-custom-accordion' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/ludvigs-custom-accordion',
		'version' => '0.1.0',
		'title' => 'Ludvigs Custom Accordion',
		'category' => 'widgets',
		'icon' => 'menu',
		'description' => 'A lightweight custom accordion block for WordPress.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'ludvigs-custom-accordion',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'accordions' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'allowMultipleOpen' => array(
				'type' => 'boolean',
				'default' => false
			)
		)
	)
);
