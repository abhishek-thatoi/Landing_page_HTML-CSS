import React from "react";
import "../styles/home.scss";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

export const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only Solution to the tech problems you face
            everyday. We are leading tech company whose ain is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3"  id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur id consequatur, numquam fuga qui iusto adipisci! Quasi
            molestiae libero facere, repellendus similique assumenda distinctio
            aliquid laudantium, perferendis tempore optio rem voluptatibus
            molestias debitis aliquam ut ipsum dolores quibusdam minus. Dolorum
            culpa doloremque assumenda repellat fuga deserunt quas sint, est
            debitis sapiente. Recusandae deserunt illum molestias, itaque natus
            labore voluptatem, minima in nostrum, consequuntur similique!
            Ducimus, natus voluptatum sed dolorum quis perferendis tenetur amet
            rerum consequatur inventore. Dignissimos illum blanditiis debitis
            quod culpa quasi iusto repellendus, consequatur, numquam esse, nobis
            minus vel unde. Adipisci non nesciunt debitis, vel aut iure magni
            architecto aperiam fugiat fugit, tenetur incidunt a, dicta alias
            voluptas ratione sed natus. Culpa deserunt maxime autem a? Labore,
            tempora.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};
