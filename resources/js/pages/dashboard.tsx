import { usePage, Head } from '@inertiajs/react';
import FRFlag from '@/svgs/fr.svg';
import { useEffect, useState } from 'react';
import AlertMessage from '@/components/alert-message';
import Panel from '@/components/panel';
import {
    type CarbonIntensityDataContent,
    type PowerBreakdownDataContent,
    type ElectricityMapsData,
    type ElectricityMapsDataType
} from '@/types';
import CarbonIntensity from '@/components/carbon-intensity';
import PowerBreakdown from '@/components/power-breakdown';
import ChoicesToggle from '@/components/choices-toggle';

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

    const handleDataTypeChange = (type: string) => {
        setDataType(type as ElectricityMapsDataType);
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
        <>
            <Head>
                <title>France - Power overview</title>
            </Head>

            <div className="bg-[url('../images/jason-mavrommatis-unsplash.webp')] bg-cover bg-center h-screen">
                <Panel className='w-full flex flex-col gap-4 md:gap-8 md:max-w-8/12 lg:max-w-1/2'>
                    <div className="flex gap-2">
                        <img src={FRFlag} alt="" width={30} height={30} />
                        <h1 className="text-2xl font-bold">France</h1>
                    </div>

                    <ChoicesToggle choices={[
                        { label: 'Carbon Intensity', value: 'carbon_intensity' },
                        { label: 'Power Breakdown', value: 'power_breakdown' }
                    ]} value={dataType} onChange={handleDataTypeChange} />

                    <div className="max-h-full overflow-y-auto pr-4">

                        {!currentData && <AlertMessage message="No data was found" type="error" />}

                        {currentData && renderDataContent()}
                    </div>
                </Panel>
            </div>
        </>
    );
}
