type ElectricityMapsDataType = "power_breakdown" | "carbon_intensity";

type ElectricityMapsData = {
    id: number;
    zone: string;
    data_type: ElectricityMapsDataType;
    data: PowerBreakdownDataContent | CarbonIntensityDataContent;
    created_at: string;
    updated_at: string;
};

type EnergyBreakdown = {
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
type PowerImportExportBreakdown = {
    [countryCode: string]: number;
};

type PowerBreakdownDataContent = {
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

type CarbonIntensityDataContent = {
    zone: string;
    carbonIntensity: number;
    datetime: string;
    updatedAt: string;
    createdAt: string;
    emissionFactorType: string;
    isEstimated: boolean;
    estimationMethod: string;
};

export type {
    ElectricityMapsDataType,
    ElectricityMapsData,
    PowerBreakdownDataContent,
    CarbonIntensityDataContent,
    EnergyBreakdown,
    PowerImportExportBreakdown
};

export default ElectricityMapsData;