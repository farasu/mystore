function CartButton({action, quantity, text}){
    return (
        <button disabled={quantity <=1 } onClick={action} className="px-5 pb-1 mx-3 text-xs text-white border-1 border-sky-200 bg-sky-800">{text}</button>
    );
}

export default CartButton;