import Posts from "./Posts";
import Drinks from "./Drinks";

export default function Child() {
  return (
    <div>
      <h1>Hello I am Child Component</h1>
      <Posts />
      <Drinks />
    </div>
  );
}
