import { useVehicle } from '@/contexts/VehicleContext';
import { dummyVehicleMakes, getModelsByMake, getVehiclesByModel } from '@/lib/dummy-data';

export function VehicleSelector({ className }: { className?: string }) {
  const { makeId, modelId, vehicleId, setMake, setModel, setVehicle, clearVehicle } = useVehicle();
  const models = makeId ? getModelsByMake(makeId) : [];
  const vehicles = modelId ? getVehiclesByModel(modelId) : [];

  return (
    <div className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <select
          value={makeId || ''}
          onChange={e => e.target.value ? setMake(e.target.value) : clearVehicle()}
          className="h-11 rounded-xl border border-border bg-card px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground"
        >
          <option value="">Select Make</option>
          {dummyVehicleMakes.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
        </select>
        <select
          value={modelId || ''}
          onChange={e => e.target.value && setModel(e.target.value)}
          disabled={!makeId}
          className="h-11 rounded-xl border border-border bg-card px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50 text-foreground"
        >
          <option value="">Select Model</option>
          {models.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
        </select>
        <select
          value={vehicleId || ''}
          onChange={e => e.target.value && setVehicle(e.target.value)}
          disabled={!modelId}
          className="h-11 rounded-xl border border-border bg-card px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50 text-foreground"
        >
          <option value="">Select Year</option>
          {vehicles.map(v => <option key={v.id} value={v.id}>{v.year}</option>)}
        </select>
      </div>
    </div>
  );
}
