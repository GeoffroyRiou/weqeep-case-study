<?php

namespace App\Enums;

enum ElectricityDataTypes: string
{
    case POWER_BREAKDOWN = 'power_breakdown';
    case CARBON_INTENSITY = 'carbon_intensity';
}
