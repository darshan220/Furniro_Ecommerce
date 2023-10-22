import logo from "../../ui/headerImages/logo.svg";
import profile from "../../ui/headerImages/profile.svg";
import search from "../../ui/headerImages/search.svg";
import favorite from "../../ui/headerImages/favorite.svg";
import addToCart from "../../ui/headerImages/addToCart.svg";

const Header = () => {
  return (
    <header className="w-full h-[100px] flex items-center justify-between p-12">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="logo" className="h-10" />
      </div>
      <div className="flex flex-row space-x-16 items-center justify-center w-full">
        <span>Home</span>
        <span>Shop</span>
        <span>About</span>
        <span>Contact</span>
      </div>
      <div className="flex items-center space-x-9 pr-16">
        <img src={profile} alt="profile" className="h-7" />
        <img src={search} alt="search" className="h-7" />
        <img src={favorite} alt="favorite" className="h-7" />
        <img src={addToCart} alt="cart" className="h-7" />
      </div>
    </header>
  );
};

export default Header;
