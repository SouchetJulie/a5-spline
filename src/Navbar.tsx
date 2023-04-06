import { FunctionComponent } from "react";

interface NavbarProps {
  bottom?: boolean;
}

export const Navbar: FunctionComponent<NavbarProps> = ({bottom}) => {
  const classes = "bg-lime-800 z-10 flex items-center justify-center p-4 border-0 " + (bottom ? "border-t-4 text-4xl" : "border-b-4 text-5xl");

  if (bottom) {
    return (
      <footer className={classes}>
        <h2>Envies de thé</h2>
        <img src="/logo.png" className="h-12 ml-4" alt="logo"/>
      </footer>
    )
  }

  return (
    <header className={classes}>
      <h1>Envies de thé</h1>
      <img src="/logo.png" className="h-12 ml-4" alt="logo"/>
    </header>
  );
}
