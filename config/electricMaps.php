<?php

return [
    'api_key' => env('ELECTRICITY_MAPS_API_KEY', ''),
    'api_url' => env('ELECTRICITY_MAPS_API_URL', ''),

    // In a paid version we could add more countries
    // For now we only support France
    'zones' => [
        'FR',
    ],
];