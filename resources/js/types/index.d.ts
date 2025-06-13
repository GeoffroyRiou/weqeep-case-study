export type ElectricityMapsDataType = "power_breakdown" | "carbon_intensity";

export type ElectricityMapsData = {
    id: number;
    zone: string;
    data_type: ElectricityMapsDataType;
    data: PowerBreakdownDataContent | CarbonIntensityDataContent;
    created_at: string;
    updated_at: string;
};

export type EnergyBreakdown = {
    nuclear: number | null;
    geothermal: number | null;
    biomass: number | null;
    coal: number | null;
    wind: number | null;
    solar: number | null;
    hydro: number | null;
    gas: number | null;
    oil: number | null;
    unknown: number | null;
    "hydro discharge": number | null;
    "battery discharge": number | null;
};
export type PowerImportExportBreakdown = {
    [countryCode: string]: number;
};

export type PowerBreakdownDataContent = {
    zone: string;
    datetime: string;
    updatedAt: string;
    createdAt: string;
    powerConsumptionBreakdown: EnergyBreakdown;
    powerProductionBreakdown: EnergyBreakdown;
    powerImportBreakdown: PowerImportExportBreakdown;
    powerExportBreakdown: PowerImportExportBreakdown;
    fossilFreePercentage: number;
    renewablePercentage: number;
    powerConsumptionTotal: number;
    powerProductionTotal: number;
    powerImportTotal: number;
    powerExportTotal: number;
    isEstimated: boolean;
    estimationMethod: string;
};

export type CarbonIntensityDataContent = {
    zone: string;
    carbonIntensity: number;
    datetime: string;
    updatedAt: string;
    createdAt: string;
    emissionFactorType: string;
    isEstimated: boolean;
    estimationMethod: string;
};