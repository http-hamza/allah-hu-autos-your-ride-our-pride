import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

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
  setMake: (makeId: string, makeName: string) => void;
  setModel: (modelId: string, modelName: string) => void;
  setVehicle: (vehicleId: string, year: number, displayName: string) => void;
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

  const setMake = useCallback((makeId: string, makeName: string) => {
    setState({ makeId, makeName, modelId: null, modelName: null, vehicleId: null, year: null, displayName: null });
  }, []);

  const setModel = useCallback((modelId: string, modelName: string) => {
    setState(prev => ({ ...prev, modelId, modelName, vehicleId: null, year: null, displayName: null }));
  }, []);

  const setVehicle = useCallback((vehicleId: string, year: number, displayName: string) => {
    setState(prev => ({ ...prev, vehicleId, year, displayName }));
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
