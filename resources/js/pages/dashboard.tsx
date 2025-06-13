import AlertMessage from '@/components/alert-message';
import Panel from '@/components/panel';
import { 
    type CarbonIntensityDataContent, 
    type PowerBreakdownDataContent, 
    type ElectricityMapsData, 
    type ElectricityMapsDataType 
} from '@/types';
import { usePage } from '@inertiajs/react';
import FRFlag from '@/svgs/fr.svg';
import { useEffect, useState } from 'react';
import CarbonIntensity from '@/components/carbon-intensity';
import PowerBreakdown from '@/components/power-breakdown';
import Switch from '@/components/switch';

type DashboardSharedProps = {
    electricityMapsData: ElectricityMapsData[];
}

export default function Dashboard() {
    const { electricityMapsData } = usePage<DashboardSharedProps>().props;
    const [dataType, setDataType] = useState<ElectricityMapsDataType>('carbon_intensity');
    const [currentData, setCurrentData] = useState<ElectricityMapsData | null>(null);

    useEffect(() => {
        if (electricityMapsData.length > 0) {
            setCurrentData(electricityMapsData.find(data => data.data_type === dataType) || null);
        } else {
            setCurrentData(null);
        }
    }, [electricityMapsData, dataType]);

    const handleDataTypeChange = (checked: boolean) => {
        setDataType(checked ? 'power_breakdown' : 'carbon_intensity');
    };

    const renderDataContent = () => {
        if (!currentData) return null;

        if (currentData.data_type === 'carbon_intensity') {
            return <CarbonIntensity data={currentData.data as CarbonIntensityDataContent} />;
        } else if (currentData.data_type === 'power_breakdown') {
            return <PowerBreakdown data={currentData.data as PowerBreakdownDataContent} />;
        }
    };

    return (
        <div className="bg-[url('../images/jason-mavrommatis-unsplash.webp')] bg-cover bg-center h-screen p-5 lg:p-10">
            <Panel className='w-full flex flex-col gap-4 md:gap-8 md:max-w-6/12'>
                <div className="flex gap-2">
                    <img src={FRFlag} alt="" width={30} height={30} />
                    <h1 className="text-2xl font-bold">France</h1>
                </div>

                <div className="flex gap-2">
                    <span className="text-sm text-gray-700">Carbon Intensity</span>
                    <Switch checked={dataType === 'power_breakdown'} onChange={handleDataTypeChange} />
                    <span className="text-sm text-gray-700">Power Breakdown</span>
                </div>

                <div className="max-h-full overflow-y-auto pr-4">

                    {!currentData && <AlertMessage message="No data was found" type="error" />}

                    {currentData && renderDataContent()}
                </div>
            </Panel>
        </div>
    );
}
