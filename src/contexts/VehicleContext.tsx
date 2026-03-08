import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { dummyVehicleMakes, dummyVehicleModels, dummyVehicles } from '@/lib/dummy-data';

type VehicleState = {
  makeId: string | null;
  makeName: string | null;
  modelId: string | null;
  modelName: string | null;
  vehicleId: string | null;
  year: number | null;
  displayName: string | null;
};

type VehicleContextType = VehicleState & {
  setMake: (makeId: string) => void;
  setModel: (modelId: string) => void;
  setVehicle: (vehicleId: string) => void;
  clearVehicle: () => void;
};

const VehicleContext = createContext<VehicleContextType | undefined>(undefined);
const VEHICLE_KEY = 'allah-hu-autos-vehicle';

const emptyState: VehicleState = { makeId: null, makeName: null, modelId: null, modelName: null, vehicleId: null, year: null, displayName: null };

function loadVehicle(): VehicleState {
  try {
    const data = localStorage.getItem(VEHICLE_KEY);
    return data ? JSON.parse(data) : emptyState;
  } catch { return emptyState; }
}

export function VehicleProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<VehicleState>(loadVehicle);

  useEffect(() => {
    localStorage.setItem(VEHICLE_KEY, JSON.stringify(state));
  }, [state]);

  const setMake = useCallback((makeId: string) => {
    const make = dummyVehicleMakes.find(m => m.id === makeId);
    if (make) setState({ makeId, makeName: make.name, modelId: null, modelName: null, vehicleId: null, year: null, displayName: null });
  }, []);

  const setModel = useCallback((modelId: string) => {
    const model = dummyVehicleModels.find(m => m.id === modelId);
    if (model) setState(prev => ({ ...prev, modelId, modelName: model.name, vehicleId: null, year: null, displayName: null }));
  }, []);

  const setVehicle = useCallback((vehicleId: string) => {
    const veh = dummyVehicles.find(v => v.id === vehicleId);
    if (veh) setState(prev => ({ ...prev, vehicleId, year: veh.year, displayName: veh.display_name }));
  }, []);

  const clearVehicle = useCallback(() => setState(emptyState), []);

  return (
    <VehicleContext.Provider value={{ ...state, setMake, setModel, setVehicle, clearVehicle }}>
      {children}
    </VehicleContext.Provider>
  );
}

export function useVehicle() {
  const ctx = useContext(VehicleContext);
  if (!ctx) throw new Error('useVehicle must be used within VehicleProvider');
  return ctx;
}
