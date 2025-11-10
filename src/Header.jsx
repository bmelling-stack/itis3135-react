
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Brian Mellinger ~ Benevolent Moose</h1>
      <nav>
        <Link to="/">Home</Link> ~{" "}
        <Link to="/introduction">Introduction</Link> ~{" "}
        <Link to="/contract">Contract</Link>
      </nav>
    </header>
  );
}


/*
export default function Header() {
    return (
        <header>
            <h1>Brian Mellinger ~ Benevolent Moose</h1>
            <nav>
                <a href="../src/Index.jsx">Home</a> ~ 
                <a href="itis3135-react\src\Introduction.jsx">Introduction</a> ~
                <a href="C:\Users\Brian\Downloads\ITIS3135\bmelling-react\itis3135-react\src\Contract.jsx">Contract</a>
            </nav>
        </header>
    );
}
    */