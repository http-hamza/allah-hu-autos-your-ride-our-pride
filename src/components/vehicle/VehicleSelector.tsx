import { useVehicle } from '@/contexts/VehicleContext';
import { useVehicleMakes, useVehicleModels, useVehiclesByModel } from '@/hooks/useVehicles';

export function VehicleSelector({ className }: { className?: string }) {
  const { makeId, modelId, vehicleId, setMake, setModel, setVehicle, clearVehicle } = useVehicle();
  const { data: makes = [] } = useVehicleMakes();
  const { data: models = [] } = useVehicleModels(makeId);
  const { data: vehicles = [] } = useVehiclesByModel(modelId);

  return (
    <div className={className}>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <select
          value={makeId || ''}
          onChange={e => {
            const selected = makes.find(m => m.id === e.target.value);
            if (selected) setMake(selected.id, selected.name);
            else clearVehicle();
          }}
          className="h-11 rounded-xl border border-border bg-card px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-foreground"
        >
          <option value="">Select Make</option>
          {makes.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
        </select>
        <select
          value={modelId || ''}
          onChange={e => {
            const selected = models.find(m => m.id === e.target.value);
            if (selected) setModel(selected.id, selected.name);
          }}
          disabled={!makeId}
          className="h-11 rounded-xl border border-border bg-card px-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-50 text-foreground"
        >
          <option value="">Select Model</option>
          {models.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
        </select>
        <select
          value={vehicleId || ''}
          onChange={e => {
            const selected = vehicles.find(v => v.id === e.target.value);
            if (selected) setVehicle(selected.id, selected.year, selected.display_name);
          }}
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
