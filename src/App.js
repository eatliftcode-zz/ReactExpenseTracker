import ExpenseItem from "./components/ExpenseItem";
function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title ={"hi"} amount = {234} date = {new Date(2022, 11,1)}/>
      <ExpenseItem title ={"mohit"} amount = {234} date = {new Date(2022, 11,1)}/>
      <ExpenseItem title ={"sup"} amount = {234} date = {new Date(2022, 11,1)}/>

    </div>
  );
}

export default App;
