import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { Tooltip } from 'react-tooltip';
import geoData from './nigeria_lga_boundaries.geojson'; // Ensure this path is correct
import './tooltip.css'; // Ensure this CSS file exists for tooltip styling

// Hardcoded report counts for each state
const staticReportCounts = {
    Abia: 10,
    Adamawa: 5,
    'Akwa Ibom': 8,
    Anambra: 3,
    Bauchi: 7,
    Bayelsa: 2,
    Benue: 6,
    Borno: 9,
    'Cross River': 4,
    Delta: 12,
    Ebonyi: 1,
    Edo: 11,
    Ekiti: 3,
    Enugu: 5,
    Gombe: 2,
    Imo: 7,
    Jigawa: 4,
    Kaduna: 8,
    Kano: 15,
    Katsina: 6,
    Kebbi: 3,
    Kogi: 5,
    Kwara: 4,
    Lagos: 20,
    Nasarawa: 2,
    Niger: 7,
    Ogun: 9,
    Ondo: 6,
    Osun: 4,
    Oyo: 10,
    Plateau: 5,
    Rivers: 13,
    Sokoto: 3,
    Taraba: 4,
    Yobe: 2,
    Zamfara: 6,
    FCT: 1
};

const NigerianMap = () => {
    // Get the count for a given state directly from the static data
    const getCountForState = (stateName) => {
        return staticReportCounts[stateName.trim()] || 0;
    };

    // Determine the fill color based on the report count
    const getFillColor = (count) => {
        return count > 0 ? '#0e4934' : '#ffff'; // Green if count > 0, otherwise white
    };

    return (
        <>
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{
                    scale: 4500,
                    center: [8, 9] // Center the map on Nigeria
                }}
                width={1000}
                height={800}
            >
                <Geographies geography={geoData}>
                    {({ geographies }) => {
                        console.log('Geographies:', geographies); // Debugging
                        return geographies.map((geo) => {
                            const stateName = geo.properties.admin1Name.trim();
                            const count = getCountForState(stateName);

                            return (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    style={{
                                        default: { fill: getFillColor(count), stroke: '#ffff', strokeWidth: 2.5 }, // Increased stroke width
                                        hover: { fill: '#0e4934', stroke: '#000', strokeWidth: 0.75 },
                                        pressed: { fill: '#E42', stroke: '#000', strokeWidth: 0.75 }
                                    }}
                                    data-tooltip-id="state-tooltip"
                                />
                            );
                        });
                    }}
                </Geographies>
            </ComposableMap>
            {/* Tooltip for displaying state information */}
            <Tooltip id="state-tooltip" className="custom-tooltip" />
        </>
    );
};

export default NigerianMap;