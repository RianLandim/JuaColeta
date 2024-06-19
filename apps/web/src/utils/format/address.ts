type FormatAddressProps = {
  number: number;
  street: string;
  district: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
};

export const formatAddress = (address: FormatAddressProps) => {
  return `${address.street}, nº ${address.number} - ${address.district}. ${address.city} - ${address.state}.`;
};
