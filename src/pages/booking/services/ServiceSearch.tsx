import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
import { Service } from 'src/features/services/types';
import { Option } from 'src/types/app.types';

type ServiceSearchProps = {
  onChange?: (selected: Record<'serviceid', Service>[]) => void;
  options?: Service[];
};

const ServiceSearch: React.FC<ServiceSearchProps> = ({ onChange, options }) => {
  const [singleSelections, setSingleSelections] = useState<Option[]>([]);

  return <Form.Control type="text" />;
};

export default React.memo(ServiceSearch);
