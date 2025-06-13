<?php

namespace App\Actions;

use App\Enums\ElectricityDataTypes;
use App\Models\ElectricityData;
use App\Services\ElectricityMapsService;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Support\Facades\Log;

final class GetElectricityDataAction
{
    public function __construct(readonly private ElectricityMapsService $electricityMapsService) {}

    public function execute(string $zone): void
    {
        try {
            $powerBreakDownData = $this->electricityMapsService->getPowerBreakdown($zone);
            $powerBreakDown = ElectricityData::byZone($zone)
                ->byDataType(ElectricityDataTypes::POWER_BREAKDOWN->value)
                ->first();
            if ($powerBreakDown) {
                $powerBreakDown->data = $powerBreakDownData;
                $powerBreakDown->save();
            } else {
                ElectricityData::create([
                    'zone' => $zone,
                    'data_type' => ElectricityDataTypes::POWER_BREAKDOWN->value,
                    'data' => $powerBreakDownData,
                ]);
            }

            $carbonIntensityData = $this->electricityMapsService->getCarbonIntensity($zone);
            $carbonIntensity = ElectricityData::byZone($zone)
                ->byDataType(ElectricityDataTypes::CARBON_INTENSITY->value)
                ->first();

            if ($carbonIntensity) {
                $carbonIntensity->data = $carbonIntensityData;
                $carbonIntensity->save();
            } else {
                ElectricityData::create([
                    'zone' => $zone,
                    'data_type' => ElectricityDataTypes::CARBON_INTENSITY->value,
                    'data' => $carbonIntensityData,
                ]);
            }
        } catch (GuzzleException $e) {
            // Handle the exception, e.g., log it or rethrow it
            Log::error("Failed to fetch electricity data for zone {$zone}: ".$e->getMessage());

            return;
        }
    }
}
