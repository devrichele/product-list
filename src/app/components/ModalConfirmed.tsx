'use client';


interface ModalConfirmedProps {
    handleClose: () => void;
  }
  
  const ModalConfirmed = ({ handleClose }: ModalConfirmedProps) => {
    return (
      <div 
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" 
        onClick={handleClose} // Fecha modal ao clicar fora do modal
      >
        <div 
          className="border-2 p-4 bg-white rounded-lg text-center h-[300px]" 
          onClick={(e) => e.stopPropagation()} // Impede fechamento ao clicar o e representa evento de clique e o stoppropagation impede que o evento continue para os outros div
        >
          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
            <div className="mt-auto w-full flex justify-center">
                <button 
                className="bg-orange-500 text-white px-4 py-2 rounded-lg mt-4"
                onClick={handleClose}
                >
                Start New Order
                </button>
          </div>  
        </div>
      </div>
    );
  };
  
  export default ModalConfirmed;
  