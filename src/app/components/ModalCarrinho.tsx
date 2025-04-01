import {useState} from 'react';
import { IoRemoveCircleOutline } from 'react-icons/io5';
import ModalConfirmed from "./ModalConfirmed";

interface ModalCarrinhoProps {
  cartItems: { title: string; price: string; image: string, description: string}[];
  setCartItems: React.Dispatch<React.SetStateAction<{ title: string; price: string; image: string, description:string }[]>>;
}

// dispatch está sendo usado para atualizar o estado do carrinho
// setstateaction descreve o tipo da ação que pode ser passada para dispatch


const ModalCarrinho = ({ cartItems, setCartItems}: ModalCarrinhoProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla o estado do modal de confirmação
  const handleRemoveItem = (index: number) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index)); // Remove o item com o índice
  };
  const handleOpenModal = () => {
    setIsModalOpen(true); // Abre o modal de confirmação
  };
  const handleCloseModal = () => {
    setIsModalOpen(false); // Fecha o modal de confirmação
    // setCartItems([]); // Limpa o carrinho
  };
  return (
    <div className="fixed right-4 top-20 w-[320px] bg-white shadow-lg rounded-lg border p-4">
      <h2 className="text-lg font-semibold text-orange-600 border-b pb-2">Your Cart</h2>
  {/* length é um método que retorna o número de itens no array */}
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-sm mt-2">empty cart</p>
      ) : (
        <ul className="mt-2">
          {cartItems.map((item, index) => (
            <li key={index} className="flex justify-between items-center text-sm py-2 border-b text-gray-600 font-bold">
              <div className="flex items-center gap-2">
                <img src={item.image} alt={item.title} className="w-10 h-10 rounded-md" />
                <span>{item.title}</span>
              </div>
              <span className="font-bold text-gray-500">R$ {item.price}</span>
              <button
                onClick={() => handleRemoveItem(index)} // Chama a função para remover o item
                className="text-red-500 hover:text-red-700"
              >
                <IoRemoveCircleOutline className="w-5 h-5" /> 
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className='flex justify-between mt-4 pt-2'>
        <span className='text-sm text-gray-700'> Ordem Total</span>
        <span className="font-bold text-gray-500">R$
          {cartItems.reduce(
            (total, item) => total + parseFloat(item.price), 
            0
          ).toFixed(2)}
        </span>
      </div>
      <button onClick={handleOpenModal} className="w-full text-white bg-orange-600 rounded-lg py-2 hover:bg-orange-700 transition mt-4">
      Confirm Order
      </button>
      <div>
      {isModalOpen && <ModalConfirmed handleClose={handleCloseModal} />}
      </div>
    </div>
  );
};

export default ModalCarrinho;

  