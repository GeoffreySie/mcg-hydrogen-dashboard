"use client";

import React, { useEffect, useState } from 'react';
import ProductPassport from '@/components/ProductPassport';
import { ProductData } from '@/passport-types';
import PassportList from '@/components/PassportList';
import PassportHeader from '@/components/passport/PassportHeader';

const PassportContainer: React.FC = () => {
  const [data, setData] = useState<ProductData[]>([]);
  const [selectedPassport, setSelectedPassport] = useState<ProductData | null>(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/passports')
      .then(response => response.json())
      .then((result) => {
        const data: ProductData[] = result.passports.map((passport:any) => ({
          id: passport._id,
          consignmentId: passport.consignmentId,
          carbonIntensity: passport.carbonIntensity,
          production: passport.production,
          compressionAndStorage: passport.compressionAndStorage,
          transport: passport.transport,
          endUse: passport.endUse,
          renewableEnergySource: passport.renewableEnergySource,
          geographicalCorrelation: passport.geographicalCorrelation,
          renewablesAdditionality: passport.renewablesAdditionality,
          temporalCorrelation: passport.temporalCorrelation,
          productionGHGEmissionsClass: passport.productionGHGEmissionsClass,
          globalWarmingPotential: passport.globalWarmingPotential,
          wasteManagement: passport.wasteManagement,
          waterConsumption: passport.waterConsumption,
          resourceDepletion: passport.resourceDepletion,
          landUse: passport.landUse,
          ozoneDepletion: passport.ozoneDepletion,
          ecoToxicity: passport.ecoToxicity,
        }));
        setData(data);
        setSelectedPassport(data[0]); // Set the default selected passport
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handlePassportClick = (passport: ProductData) => {
    setSelectedPassport(passport);
  };

  return (
    <div className='flex flex-row'>
      <PassportList 
        data={data} 
        onPassportClick={handlePassportClick} 
      />

      <div className="xl:p-12 lg:p-8 p-4 w-screen h-screen flex flex-col overflow-y-scroll">
        {selectedPassport ? (
          <>
            <PassportHeader id={selectedPassport.id} /> 
            <ProductPassport data={selectedPassport} />
          </>
        ) : (
          <div>No passports available</div>
        )}
      </div>
    </div>
  );
};

export default PassportContainer;
