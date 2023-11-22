// import Slider from "react-slick";

// import Card from "./Card";


// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const NextArrowImage = "url('../assets/left_arrow')";
// const PrevArrowImage = "url('../assets/right_arrow')";

// const commentsList = [
//   {
//     author_photo: "../assets/girl_photo.webp",
//     title: 'Best decision I made',
//     author_nick: 'olga_33',
//     description: 'Choosing this travel agency was the best decision I made for my vacation. The attention to detail in planning my cultural tour was exceptional. From historic landmarks to hidden gems, every moment was unforgettable. I can\'t wait to book my next adventure with them!'
//   },
//   {
//     author_photo: "./img/guy_photo.webp",
//     title: 'Great cultural tour in Kyoto!',
//     author_nick: 'amir_ragrini',
//     description: 'he guides were passionate about sharing the history, and the local experiences were fantastic. The only improvement could be more flexibility in the schedule.'
//   },
//   {
//     author_photo: "./img/girl_photo_2.webp",
//     title: 'Exceeded all expectations',
//     author_nick: 'ririji_fan',
//     description: 'he adventure tour I booked through this agency exceeded all expectations.The thrill of the Amazon Rainforest was matched by the seamless organization of activities. The guides were knowledgeable, and the overall experience left me with memories I\'ll cherish forever.'
//   },
//   {
//     author_photo: "./img/guy_photo_2.webp",
//     title: 'Super tour support!',
//     author_nick: 'tomas_shelbi',
//     description: `As a solo traveler, I felt completely at ease with the support of this
//       agency. The cultural immersion tour I chose provided a perfect balance of group activities and
//       personal exploration. The guides were friendly, and I made lifelong friends during the journey.`
//   },
//   {
//     author_photo: "./img/girl_photo_3.webp",
//     title: 'Deal with details',
//     author_nick: 'rena_ta',
//     description: `I opted for the Luxury Desert Retreat in Dubai, and it was pure opulence.
//       From the moment I arrived, every detail was taken care of. The personalized service, exclusive
//       accommodations, and breathtaking experiences made it a truly luxurious escape.`
//   }
// ];

// const allComments = commentsList.map((comment, index) => <Card key={index} 
// auther_photo={comment.author_photo} 
// title={comment.title} author_nick={comment.author_nick} 
// description={comment.description} />)


// function NextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         backgroundImage: NextArrowImage,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//       onClick={onClick}
//     />
//   );
// }

// function PrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         backgroundImage: PrevArrowImage,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//       }}
//       onClick={onClick}
//     />
//   );
// }


// export default function Comments() {

//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: false,
//     centerPadding: "60px",
//     speed: 500,
//     arrows: true,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />
//   };

//   return (
//     <section className="card_section">
//       <div className="cards">
//         <Slider {...settings}>
//           <div className="all_comments">
//             {allComments}
//           </div>
//         </Slider>
//       </div>
//     </section>
//   )
// }