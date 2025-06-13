<?php

namespace App\Http\Controllers;

use App\Models\ElectricityData;
use Illuminate\Http\Request;
use Inertia\Inertia;

final class DashboardController extends Controller
{
    public function __invoke()
    {
        $electricityMapsData = ElectricityData::byZone('FR')->get()->toArray();

        return Inertia::render('dashboard',
            [
                'electricityMapsData' => $electricityMapsData,
            ]
        );
    }
}
