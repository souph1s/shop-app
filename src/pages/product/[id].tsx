import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product";
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>

      </ImageContainer>

      <ProductDetails>
        <h1>T-Shirt X</h1>
        <span>US$ 79,90</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non itaque sequi nobis ipsum, quidem eum at eaque aut repellendus eos numquam fuga quos incidunt vero obcaecati nulla odio harum tempora perspiciatis cum sed magnam. Accusamus quo quos quaerat praesentium, ullam necessitatibus aliquid quas deleniti assumenda consequuntur rem ea reprehenderit! Libero, pariatur! Nulla dolorum animi sit, praesentium adipisci cum velit quibusdam ea consequatur enim ipsum autem assumenda numquam repudiandae nam vitae totam inventore quae! Illo tenetur in omnis nam quos cupiditate molestiae illum soluta hic exercitationem ut distinctio officia nemo aspernatur, repellendus sequi sint earum. Cupiditate sunt incidunt recusandae cum consectetur.</p>

        <button>Buy now</button>
      </ProductDetails>

    </ProductContainer>
  )
}
