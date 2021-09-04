import { ErrorMessage } from 'formik';
import { FC, useRef } from 'react';
import Select from 'react-select';
import { ErrorComponent } from '../../shared/container/input-field';

const buisnessTypes = [
  'Banks - Real Estate Finance',

  'Real Estate Offices',

  'Engineering Consultation',
  'Architectural Design Companies',

  'Interior Design Offices',

  'Mechanical Engineering',

  'Garden and Agricultural Design Offices',

  'Nurseries',

  'Electrical Engineering and Sanitation',
  'Fire Systems',

  'Surveillance Systems and Cameras',

  'Solar Energy Systems',

  'Green Building',

  'Air Conditioning and Refrigeration Companies',

  'Automatic Elevators and Escalators',

  'Aluminum and Glass',

  'Ironworks and Handrails',

  'Decoration Work',

  'Quarries and Bricks',

  'Cable and Pipe Factories',

  'Electric Tools',

  'Household Items',

  'Electronic Devices',

  'Electrical Appliances',

  'Construction Tools (Nails, Etc.)',

  'Outdoor Umbrellas',

  'Building Materials (Sand, Cement, Wood)',

  'Cleaning',

  'Home Furniture',

  'Sanitary Ware Showroom',

  'Paints and Pigments',

  'Carpet Shows',

  'Furniture and Curtains',

  'Ready-Mix Concrete and Ceilings',

  'Wood and Carpentry',

  'Pest And Insect Control',

  'Technology Systems',

  'Cookware',

  'Office Furniture',

  'Ceramic And Marble',

  'Water Tanks (Fiberglass)',

  'Indoor And Outdoor Lighting',

  'Port Factories Cabin',

  'Decoration Supplies',

  'Locks and Bracelets',

  '​​Heat and Water Insulation',

  'Machinery and Equipment Agencies',

  'Contracting Companies (Construction)',

  'Building Materials and Green House',
];

interface BuisnessTypePickerProps {
  setValues: any;
  values: any;
  name: string;
  title?: string;
}

const BuisnessTypePicker: FC<BuisnessTypePickerProps> = ({
  name,
  values,
  setValues,
  title = 'Business type',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  function handleFocus() {
    let input = ref?.current;

    if (input) {
      input.focus();
    }
  }

  return (
    <div ref={ref} className="col form-group">
      <label>
        <span>{title}</span>
      </label>
      <Select
        options={buisnessTypes.map((each) => ({ value: each, label: each }))}
        isMulti={true}
        closeMenuOnSelect={false}
        id="react-select"
        onChange={(e) => {
          const inps = e.map((each: any) => each.value);

          setValues({
            ...values,
            BusinessType: inps,
          });
        }}
      />
      <ErrorMessage
        name={name}
        component={({ children }) => (
          <ErrorComponent handleFocus={handleFocus}>{children}</ErrorComponent>
        )}
      />
    </div>
  );
};

export default BuisnessTypePicker;
