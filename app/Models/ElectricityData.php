<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

final class ElectricityData extends Model
{

    protected $fillable = [
        'zone',
        'data_type',
        'data',
    ];

    protected $casts = [
        'data' => 'array',
    ];

    public function scopeByZone($query, string $zone)
    {
        return $query->where('zone', $zone);
    }

    public function scopeByDataType($query, string $dataType)
    {
        return $query->where('data_type', $dataType);
    }
}
