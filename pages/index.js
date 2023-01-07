import Link from "next/link";
import { useRouter } from "next/router";

function home() {
    const router = useRouter();
    const handleClick =()=>{
        console.log('Placing your order');
        router.replace('/product')
    }
  return (
    <div>
      <h1>Homepage</h1>
      <Link href="/blog">
        Blog
      </Link>
      <Link href="/product">
        Products                
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default home;
