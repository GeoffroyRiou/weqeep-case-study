<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
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

    /**
     * @param  Builder<$this>  $query
     * @return Builder<$this>
     */
    public function scopeByZone(Builder $query, string $zone): Builder
    {
        return $query->where('zone', $zone);
    }

    /**
     * @param  Builder<$this>  $query
     * @return Builder<$this>
     */
    public function scopeByDataType(Builder $query, string $dataType): Builder
    {
        return $query->where('data_type', $dataType);
    }
}
