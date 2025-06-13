<?php

namespace App\Providers;

use App\Actions\GetElectricityDataAction;
use App\Services\ElectricityMapsService;
use Illuminate\Support\ServiceProvider;
use Illuminate\Contracts\Foundation\Application;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(ElectricityMapsService::class, function () {
            return new ElectricityMapsService(
                apiKey: config('electricMaps.api_key'),
                apiUrl: config('electricMaps.api_url')
            );
        });

        $this->app->bind(GetElectricityDataAction::class, function (Application $app) {
            return new GetElectricityDataAction($app->make(ElectricityMapsService::class));
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
