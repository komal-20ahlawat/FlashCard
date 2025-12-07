import "./App.css";
import {Plus} from "lucide-react";
import FlashCard from "./components/FlashCard";
import FlashCardForm from "./components/FlashCardForm";
import { useState } from "react";

function App() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [flashCards, setFlashCards] = useState([]);

  function addFlashCard(card) {
    const lastId = 
      flashCards.length > 0 ? flashCards[flashCards.length - 1].id : -1;
    const newId = lastId + 1
    setFlashCards(prev => [...prev,{id: newId, ...card}]);
  }

  function delFlashCard(id) {
    setFlashCards((prev) => prev.filter(item.id != id));
  }
  function toggleModal() {
    setShowAddModal((prev)=> !prev);
  }
  return (
    <>
    <nav>
      <h1 className="nav-title">Flashcard App</h1>
      <button id="add-button" onClick={toggleModal}>
        <Plus/>
      </button>
    </nav>
    <div>
      <FlashCardForm
      onAddFlashCard={addFlashCard}
       showModal={showAddModal} 
       onClose ={toggleModal}
       />
      <div className="flashcard-container">
       {flashCards?.map((item) => {
        return (
          <flashCard
          key={item.id}
          id={item.id}
          question={item.question}
          answer={item.answer}
          onDel={delFlashCard}
          />
        )
       })}
       </div>
    </div>
    
  </>
  );
}

export default App;
