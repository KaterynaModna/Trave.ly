
import Question from "./Question";

const QuestionList = [{
    question: `How can I contact your customer support during my trip?`,
    answer: `Our 24/7 customer support hotline is available for any assistance or emergencies. You'll receive the contact details with your booking confirmation.`
},
{
    question: ` Are your tours suitable for 
solo travelers?`,
    answer: `Absolutely! Many of our tours cater to solo travelers, and we can arrange shared accommodations or connect you with other like-minded travelers.`
},
{
    question: `   Can I customize my travel itinerary 
to suit my preferences?`,
    answer: `Absolutely! We offer personalized itineraries to tailor your trip according to your interests, so you can have the experience you desire.`
},
{
    question: `   Do you offer travel insurance options?`,
    answer: `Yes, we offer comprehensive travel insurance packages to provide peace of mind and coverage for unexpected situations during your journey.`
},
{
    question: `How can I contact your customer support during my trip?`,
    answer: `Our cancellation policy varies by tour, but typically, we offer a full refund if canceled at least 30 days in advance.`
}
];

const QuestionResults = QuestionList.map((item, index) => <Question key={index} 
question={item.question}
answer={item.answer} />)

export default function FAQ() {


    // return (
    //     <section className="faq">
    //         <div className="section_main_text_wrapper">
    //             <h3 className="section_name">FAQ</h3>
    //             <span className="section_little_text">Find quick answers to common travel-related questions. Explore our
    //                 FAQs to get the information
    //                 you need for a seamless travel experience.</span>
    //         </div>
    //         <div className="questions">
    //             {QuestionResults}
    //         </div>
    //     </section>
    // )
}