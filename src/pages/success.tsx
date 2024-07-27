import Link from "next/link";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Thank you for your order!</h1>

      <ImageContainer>


      </ImageContainer>

      <p>Yay! <strong>Diego Fernandes</strong>, your brand new <strong>T-Shirt</strong> is on your way!</p>

      <Link href='/'>
        Back to shop
      </Link>

    </SuccessContainer>
  );
}
