export const formatDateTime = (value: Date | string | number) =>
  Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
