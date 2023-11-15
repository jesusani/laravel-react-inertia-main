import { useState } from 'react';
import Calendar from 'react-calendar';


export default function Checkbox({ value }) {
    const [fecha, onChange] = useState(new Date());  
    if (value !== null){ onChange(value)}
    return (
    <div>
      <Calendar onChange={onChange} value={fecha} />
    </div>
  );
}