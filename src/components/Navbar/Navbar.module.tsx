import { Header, Links, OrderLink, Title } from "./Navbar.styled";

const Navbar = () => {
  return (
    <>
      <Header>
        <Title>Menu</Title>
        <OrderLink>
          <Links>WebSite</Links>
        </OrderLink>
        <OrderLink>
          <Links>IBGE</Links>
        </OrderLink>
        <OrderLink>
          <Links>Coluna</Links>
        </OrderLink>
      </Header>
    </>
  );
};

export default Navbar;
