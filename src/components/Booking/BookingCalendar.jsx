import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { addDays, format, differenceInDays } from 'date-fns';
import { es } from 'date-fns/locale';
import 'react-day-picker/style.css';
import './BookingCalendar.css';

export function BookingCalendar({ onDatesSelected }) {
  const [range, setRange] = useState();

  const handleSelect = (selectedRange) => {
    setRange(selectedRange);
    if (selectedRange?.from && selectedRange?.to) {
      const days = differenceInDays(selectedRange.to, selectedRange.from);
      onDatesSelected({
        from: selectedRange.from,
        to: selectedRange.to,
        nights: days,
      });
    } else {
      onDatesSelected(null);
    }
  };

  return (
    <div className="booking-calendar-container">
      <DayPicker
        mode="range"
        selected={range}
        onSelect={handleSelect}
        locale={es}
        numberOfMonths={2}
        disabled={[{ before: new Date() }]}
        className="custom-calendar"
        classNames={{
          day_button: "custom-day"
        }}
      />
      
      {range?.from && !range?.to && (
        <p className="calendar-hint">Selecciona la fecha de salida.</p>
      )}
      {range?.from && range?.to && (
        <p className="calendar-hint">
          {differenceInDays(range.to, range.from)} noches seleccionadas
          (del {format(range.from, 'dd MMM yyyy', { locale: es })} al {format(range.to, 'dd MMM yyyy', { locale: es })})
        </p>
      )}
    </div>
  );
}
