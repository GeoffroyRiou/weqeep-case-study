import { PowerBreakdownDataContent } from "@/types";
import AlertMessage from "./alert-message";
import ProgressBar from "./progress-bar";
import DataTitle from "./data-title";
import { useState } from "react";
import useSortedEnergyBreakdown from "@/hooks/useSortedEnergyBreakDown";
import Switch from "./switch";

type PowerBreakdownProps = {
  data: PowerBreakdownDataContent
}

const PowerBreakdown = ({ data }: PowerBreakdownProps) => {

  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const sortedEnergyData = useSortedEnergyBreakdown(data?.powerConsumptionBreakdown || {}, sortOrder);

  if (!data) {
    return <AlertMessage message="No power breakdown data available" type="error" />;
  }

  return (
    <div className="flex flex-col gap-4">

      <DataTitle title="Power Consumption Breakdown" subtitle="Actual Power Consumption Breakdown" />

      <Switch label="Sort in ascending order" checked={sortOrder === 'asc'} onChange={(checked) => setSortOrder(checked ? 'asc' : 'desc')} />

      {data.powerConsumptionBreakdown && (
        <div className="flex flex-col gap-2">
          {sortedEnergyData.map(([key, value]) => (
            <ProgressBar key={key} value={value || 0} max={data.powerConsumptionTotal || 0} label={key} unit="MWh" />
          ))}
        </div>
      )}
    </div>
  );
}

export default PowerBreakdown;