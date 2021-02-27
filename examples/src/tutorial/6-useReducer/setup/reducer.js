// reducer function
export const reducer =(state,action) => {
  if (action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "test",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      showModal: true,
      modalContent: "Enter value",
    };
  }
  if (action.type == "CLOSE_MODAL"){
    return {...state,isModalOpen:false}
  }
  if (action.type == "REMOVE_ITEM"){
    const newPeople = state.people.filter((person)=>
      person.id !== action.payload
    )
    state.people = newPeople;
    return {...state,isModalOpen:false}
  }
  throw new Error("Not correct type of displatcher action");
};