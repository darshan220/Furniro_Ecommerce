import logo from "../../ui/headerImages/logo.svg";
import profile from "../../ui/headerImages/profile.svg";
import search from "../../ui/headerImages/search.svg";
import favorite from "../../ui/headerImages/favorite.svg";
import addToCart from "../../ui/headerImages/addToCart.svg";

const Header = () => {
  return (
    <header className="w-full h-[100px]">
      <div className="flex items-center justify-between w-11/12 h-full m-auto">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-10" />
        </div>
        <div className="items-center gap-20 text-lg hidden lg:flex">
          <a href="/Home">Home</a>
          <a href="/Shop">Shop</a>
          <a href="/About">About</a>
          <a href="/Contact">Contact</a>
        </div>
        <div className="flex items-center justify-between ">
          <img src={profile} alt="profile" className="h-7" />
          <img src={search} alt="search" className="h-7" />
          <img src={favorite} alt="favorite" className="h-7" />
          <img src={addToCart} alt="cart" className="h-7" />
        </div>
      </div>
    </header>
  );
};

export default Header;
