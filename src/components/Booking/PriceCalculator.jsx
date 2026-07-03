import './PriceCalculator.css';

export function PriceCalculator({ range, pricePerNight = 245, nights = 0, serviceFee = 32, totalPrice = 0 }) {
  if (!range?.from || !range?.to) {
    return (
      <div className="price-calculator empty">
        <h3 className="font-headline-sm text-headline-sm text-on-surface mb-6">Resumen de Reserva</h3>
        <p className="text-center text-label-md font-label-md text-on-surface-variant">Selecciona unas fechas para ver el desglose.</p>
      </div>
    );
  }

  const formatShortDate = (date) => {
    if (!date) return '';
    return new Intl.DateTimeFormat('es-ES', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
  };

  return (
    <div className="price-calculator sticky top-28 bg-surface border border-outline-variant rounded-xl p-6 shadow-high">
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-6">Resumen de Reserva</h3>
      
      {/* Date Summary Display */}
      <div className="flex gap-2 mb-8 date-summary-display">
        <div className="flex-1 p-3 bg-surface-container rounded-lg">
          <span className="block text-xs font-bold text-outline-variant uppercase tracking-wider mb-1">Check-in</span>
          <span className="text-label-md font-bold text-on-surface">{formatShortDate(range.from)}</span>
        </div>
        <div className="flex-1 p-3 bg-surface-container rounded-lg">
          <span className="block text-xs font-bold text-outline-variant uppercase tracking-wider mb-1">Check-out</span>
          <span className="text-label-md font-bold text-on-surface">{formatShortDate(range.to)}</span>
        </div>
      </div>

      {/* Price Calculation Area */}
      <div className="space-y-4 mb-8 price-calculation-area">
        <div className="flex justify-between items-center text-body-md price-row">
          <span className="text-on-surface-variant">Precio por noche</span>
          <span className="font-medium text-on-surface">{pricePerNight.toFixed(2)} €</span>
        </div>
        <div className="flex justify-between items-center text-body-md price-row">
          <span className="text-on-surface-variant">Número de noches</span>
          <span className="font-medium text-on-surface">{nights} noches</span>
        </div>
        <div className="flex justify-between items-center text-body-md price-row">
          <span className="text-on-surface-variant">Service fee</span>
          <span className="font-medium text-on-surface">{serviceFee.toFixed(2)} €</span>
        </div>
        <div className="pt-4 border-t border-outline-variant flex justify-between items-center total-row">
          <span className="font-headline-sm text-headline-sm text-on-surface">Total estimado:</span><br />
          <span className="font-headline-sm text-headline-sm text-primary">{totalPrice.toFixed(2)} €</span>
        </div>
      </div>

      <p className="text-center text-label-sm font-label-sm text-on-surface-variant mt-4">
        No se realizará ningún cargo todavía.
      </p>
    </div>
  );
}
