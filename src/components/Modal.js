const Modal = ()=>{
    return(
        <dialog id="dialog" open className="fixed inset-0 bg-gray-300 justify-center items-center backdrop-blur-sm">
        <h1 className="m-3 p-3">Are You Sure ? You Want to clear previous cart?</h1>
        <div className="flex justify-between">
          <button className="m-3 p-3 border-2 border-pink-200">Clear Cart</button>
          <button className="m-3 p-3 border-2 border-red-300">Cancel</button>
        </div>
      </dialog>
    );
}

export default Modal;