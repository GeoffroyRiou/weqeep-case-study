<?php

use App\Services\ElectricityMapsService;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/test', function () {
    $api = app(ElectricityMapsService::class);

    try {
        $result = $api->getPowerBreakdown('FR');
    } catch (Exception $e) {
        dd('Error fetching data: '.$e->getMessage());
    }
    dd($result);
})->name('test');
