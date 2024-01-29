import logo from "./logo.svg";
import Title from "./components/Title";
import List from "./components/List";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Title />
      <div className="list-reasons">
        <List
          key="1"
          title="Foodie!"
          img="images/Foodie.png"
          text="I love that you're a foodie too and can appreciate good food
                    like I can. I will admit now that you experiment with food
                    more than I do but I'll get there some day! Let's continue
                    to eat yummy food together :))"
        />
        <List
          key="2"
          title="Crafty!"
          img="images/Crafty.png"
          text="I love that you are super duper arts and crafty girly and love to try cool new things. I remember when we first met, you gave me the most amazing gifts because you put so much thought and effort into them. I loved how you made me a photo frame and a mug that I still have to remember your crafty and cute nature :)"
        />
        <List title="Adventurous!" img="images/Arts.png" text="bleh" />
        <List title="Hotttieee!" img="images/Hot.png" text="blah" />
      </div>
      <h2 style={{ marginTop: 100, color: "white" }}>Keep scrolling.... </h2>
      <h1 style={{ color: "white", marginTop: 300 }}>
        This just leaves one last question to ask....
      </h1>
    </div>
  );
}

export default App;
