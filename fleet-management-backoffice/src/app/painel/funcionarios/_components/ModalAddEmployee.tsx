import { Button } from "../../../../components/ui/button";

interface InterfaceModalAddEmployee {
  closeModal: () => void;
}

export default function ModalAddEmployee({
  closeModal,
}: InterfaceModalAddEmployee) {
  return (
    <div className="w-2/3 h-1/2 bg-red-400 ">
      <Button onClick={closeModal}>Fecha</Button>
    </div>
  );
}
