<?php

use App\Actions\GetElectricityDataAction;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('getelectricitydata', function () {

    $action = app(GetElectricityDataAction::class);

    foreach(config('electricMaps.zones') as $zone) {
        $action->execute($zone);
    }
});

/**
 * Fetch electricity data every ten minutes.
 */
Schedule::call(function () {
    $this->call('getelectricitydata');
})->everyTenMinutes();
