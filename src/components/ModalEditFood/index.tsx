/* eslint-disable @typescript-eslint/no-unused-vars */
import { FiCheckSquare } from "react-icons/fi";

import { Form } from "./styles";
import { Modal } from "../Modal";
import { Input } from "../Input";
import { FormHandles } from "@unform/core";
import { useRef } from "react";
// class ModalEditFood extends Component {
//   constructor(props) {
//     super(props);

//   }

//   render() {
//     const { isOpen, setIsOpen, editingFood } = this.props;

//   }
// };

interface ModalEditFoodProps {
  handleUpdateFood: (data: any) => void;
  setIsOpen: () => void;
  isOpen: boolean;
  editingFood: {};
}

export function ModalEditFood({
  handleUpdateFood,
  setIsOpen,
  isOpen,
  editingFood
}: ModalEditFoodProps) {
  async function handleSubmit(data: any) {
    handleUpdateFood(data);
    setIsOpen();
  }

  const formRef = useRef<FormHandles>(null);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
