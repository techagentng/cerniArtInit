import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import geoData from './nigeria_lga_boundaries.geojson';
import './tooltip.css';
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
    const [tooltipContent, setTooltipContent] = useState('');
    const [hoveredState, setHoveredState] = useState(null);

    const getCountForState = (stateName) => staticReportCounts[stateName.trim()] || 0;

    return (
        <>
            <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 6000, center: [8, 9] }}
                width={1500}
                height={1200}
                style={{ overflow: 'visible' }}
            >
                <Geographies geography={geoData}>
                    {({ geographies }) => {
                        // Ensure hovered state is last in the array
                        const sortedGeographies = [...geographies].sort(
                            (a, b) =>
                                (a.properties.admin1Name === hoveredState ? 1 : 0) - (b.properties.admin1Name === hoveredState ? 1 : 0)
                        );

                        return sortedGeographies.map((geo) => {
                            const stateName = geo.properties.admin1Name?.trim() || 'Unknown';
                            const count = getCountForState(stateName);

                            return (
                                <motion.g
                                    key={geo.rsmKey}
                                    initial={{ scale: 1 }}
                                    animate={{ scale: hoveredState === stateName ? 3.1 : 1 }} // Scale only hovered state
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                    onMouseEnter={() => {
                                        setHoveredState(stateName);
                                        setTooltipContent(stateName);
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredState(null);
                                        setTooltipContent('');
                                    }}
                                    data-tooltip-id="state-tooltip"
                                    style={{ pointerEvents: hoveredState && hoveredState !== stateName ? 'none' : 'auto' }} // Disable interaction for non-hovered states
                                >
                                    <Geography
                                        geography={geo}
                                        style={{
                                            default: {
                                                fill: count > 0 ? '#0e4934' : '#fff',
                                                stroke: '#fff',
                                                strokeWidth: 3
                                            },
                                            hover: {
                                                fill: '#0e4934',
                                                stroke: '#000',
                                                strokeWidth: 1
                                            },
                                            pressed: {
                                                fill: '#E42',
                                                stroke: '#000',
                                                strokeWidth: 1
                                            }
                                        }}
                                    />
                                </motion.g>
                            );
                        });
                    }}
                </Geographies>
            </ComposableMap>

            <Tooltip id="state-tooltip" className="custom-tooltip" place="top" offset={20}>
                <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#fff' }}>{tooltipContent}</span>
            </Tooltip>
        </>
    );
};

export default NigerianMap;
