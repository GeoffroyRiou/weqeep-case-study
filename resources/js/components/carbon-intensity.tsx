import { type CarbonIntensityDataContent } from '@/types';
import DataTitle from './data-title';
import NumberCard from './number-card';
import AlertMessage from './alert-message';
type CarbonIntensityProps = {
    data: CarbonIntensityDataContent
}
const CarbonIntensity = ({ data }: CarbonIntensityProps) => {

  if (!data || !data.carbonIntensity) {
    return <AlertMessage message="No carbon intensity data available" type="error" />;
  }
  return (
    <div className="flex flex-col gap-4">
      <DataTitle title="Carbon Intensity" subtitle="Actual Carbon Intensity" />
      
      <NumberCard value={data.carbonIntensity} unit="gCO2eq/kWh"/>
      
    </div>
  );
}

export default CarbonIntensity;