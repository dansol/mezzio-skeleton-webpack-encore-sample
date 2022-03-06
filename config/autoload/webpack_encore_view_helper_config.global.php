<?php
/* dansol/webpack-encore-view-helper config file*/
return [

	/* to use laminas asset view helper( but render full tag)
    'view_helper_config'=>[
        'asset'=>[
            'resource_map'=>json_decode(file_get_contents(__DIR__ . '/../../public/build/manifest.json'),true)
        ]
    ],
    */

    'webpack_encore_view_helper_config'=>[

		/* webpack encore entry points */
        'entrypoints_map' => json_decode(file_get_contents(__DIR__ . '/../../public/build/entrypoints.json'),true),

		/* map view to entrypoint */
        'template_entrypoint_map'=>[
			'layout::default'=>'app',
        ]

    ]

];


