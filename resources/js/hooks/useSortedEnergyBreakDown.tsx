import { EnergyBreakdown } from "@/types";
import { useMemo } from "react";

type SortOrder = 'asc' | 'desc';

/**
 * Custom hook to sort energy breakdown data.
 * @returns Sorted energy breakdown data
 */
const useSortedEnergyBreakdown = (energyBreakdown: EnergyBreakdown, sortOrder: SortOrder = 'desc') => {

    const sortedEnergyData = useMemo(() => {

        // Removenull values and convert to entries for the comparison below
        const entries = Object.entries(energyBreakdown).filter(([key, value]) => value !== null) as [string, number][];

        // Sort the entries based on the value
        entries.sort((a, b) => {
            if (sortOrder === 'asc') {
                return a[1] - b[1];
            } else {
                return b[1] - a[1];
            }
        });

        return entries;
    }, [energyBreakdown, sortOrder]);

    return sortedEnergyData;
};

export default useSortedEnergyBreakdown;