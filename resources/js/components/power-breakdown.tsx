import { PowerBreakdownDataContent } from "@/types";
import AlertMessage from "./alert-message";
import ProgressBar from "./progress-bar";
import DataTitle from "./data-title";

type PowerBreakdownProps = {
  data: PowerBreakdownDataContent
}
const PowerBreakdown = ({ data }: PowerBreakdownProps) => {

  if (!data) {
    return <AlertMessage message="No power breakdown data available" type="error" />;;
  }

  return (
    <div className="flex flex-col gap-4">

      <DataTitle title="Power Consumption Breakdown" subtitle="Actual Power Consumption Breakdown" />

      {data.powerConsumptionBreakdown && (
        <div className="flex flex-col gap-2">
          {Object.entries(data.powerConsumptionBreakdown).map(([key, value]) => (
            <ProgressBar key={key} value={value || 0} max={data.powerConsumptionTotal || 0} label={key} unit="kWh" />
          ))}
        </div>
      )}
    </div>
  );
}

export default PowerBreakdown;