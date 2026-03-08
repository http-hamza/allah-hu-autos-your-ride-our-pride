import { X, Car } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { useVehicle } from '@/contexts/VehicleContext';

export function VehicleSelectorBar() {
  const { displayName, clearVehicle } = useVehicle();
  if (!displayName) return null;

  return (
    <div className="bg-primary text-primary-foreground">
      <Container>
        <div className="flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-2">
            <Car className="h-4 w-4" />
            <span className="font-medium">Your Vehicle: {displayName}</span>
          </div>
          <button onClick={clearVehicle} className="flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
            <X className="h-3 w-3" /> Change
          </button>
        </div>
      </Container>
    </div>
  );
}
