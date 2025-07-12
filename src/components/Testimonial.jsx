import { assets } from '../assets/assets';
import Title from './Title';

const Testimonial = () => {
    const testimonials = [
        {   name: "Kasun Rajapaksha", 
            location: "Kalutara, Sri Lanka", 
            image: assets.testimonial_image_1, 
            testimonial: "Outstanding service from start to finish! The car was immaculate and the booking process was seamless. Highly recommend for anyone needing reliable transportation." 
        },

        {   name: "Piyath Rajapaksha", 
            location: "Mount Lavinia, Sri Lanka", 
            image: assets.testimonial_image_2, 
            testimonial: "Professional staff and excellent vehicle quality. The pickup was punctual and the car exceeded my expectations. Will definitely use their services again." 
        },

        {   name: "Imalsha Jathunarachchi", 
            location: "Kirulapona, Sri Lanka", 
            image: assets.testimonial_image_1, 
            testimonial: "Perfect for my business trip! Clean, modern vehicles and transparent pricing. The customer support team was incredibly helpful throughout my rental period." 
        },
        
    ];
  
    return (
        <div className="py-28 px-6 md:px-16 lg:px-24 xl:px-44">
            <Title title="What Our Customer Say" subTitle="Discover why discerning travelers choose stayVenture for their luxury accomodations around the world."/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">

                {testimonials.map((testimonial, index) => (

                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">

                        <div className="flex items-center gap-3">

                            <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />

                            <div>
                                <p className="text-xl">{testimonial.name}</p>

                                <p className='text-gray-500'>{testimonial.location}</p>

                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt='star-icon'/>
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div>

            {/* <Title title="What Our Customer Say" subTitle="Discover why discerning travelers choose stayVenture for their luxury accomodations around"/>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow max-w-xs">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        
                        <p className="text-gray-500 max-w-90 mt-4">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div> */}
        </div>
    );
}

export default Testimonial