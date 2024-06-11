type FormatAddressProps = {
  number: string;
  street: string;
  district: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
};

export const formatAddress = (address: FormatAddressProps) => {
  return `${address.street}, nº ${address.number} - ${address.district}. CEP: ${address.zipCode}. ${address.city} - ${address.state}.`;
};
