
// Style CSS
import './App.css'

// Shadcn components
import { Button } from "@/components/ui/button"

const App = () => {


  return (
    <div className="app flex flex-col items-center justify-center gap-2">
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <Button onClick={() => alert("Exit? Really??")} variant="destructive">Exit</Button>
    </div>
  );
}

export default App;
