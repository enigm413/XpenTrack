export function PopUp({ setShowPopUp }) {
  return (
    <div className="pop-up-container">
      <p className="pop-up-title">OOPS!</p>
      <p className="pop-up-message">
        Transaction failed : Insufficient Balance
      </p>
      <button className="pop-up-button" onClick={() => setShowPopUp(false)}>
        Ok
      </button>
    </div>
  );
}
