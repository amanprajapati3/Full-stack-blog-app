import Footer from "../components/Footer";

const About = () => {
  return (
    <>
    <div className='mx-10 mt-8'>
        <label htmlFor="" className='text-xl font-semibold font-sans lg:text-4xl'>About</label>
        <p className='py-5 lg:text-xl'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nostrum harum reiciendis nulla? Culpa delectus officia mollitia eum optio beatae esse, officiis repudiandae laudantium cum, facilis a tenetur dolor asperiores!
        </p>
        <label htmlFor="" className='text-blue-800 text-xl font-bold lg:text-2xl'>Technical Expertise:
        </label>
        <p className='py-5 lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque blanditiis dolorum expedita sunt a. Optio, reiciendis odit unde facilis quibusdam autem vitae libero soluta aliquam voluptas esse minima neque nam eaque, nemo suscipit? Ipsum, esse veritatis accusamus fugit aut non voluptatum, porro quod animi perspiciatis sit commodi, totam aliquid veniam culpa deserunt quas eum. Laborum nisi at vel neque impedit odio! Nulla sapiente, ea, quidem excepturi quisquam laudantium facilis ?</p>
        
        <label htmlFor="" className='text-blue-700 text-xl font-bold lg:text-2xl'>Professional Highlights</label>
        <p className='py-5 lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque blanditiis dolorum expedita sunt a. Optio, reiciendis odit unde facilis quibusdam autem vitae libero soluta aliquam voluptas esse minima neque nam eaque, nemo suscipit? <br /> <br /> Ipsum, esse veritatis accusamus fugit aut non voluptatum, porro quod animi perspiciatis sit commodi, totam aliquid veniam culpa deserunt quas eum. Laborum nisi at vel neque impedit odio! Nulla sapiente, ea, quidem excepturi quisquam laudantium facilis ?</p>

        <label htmlFor="" className='text-blue-700 text-xl font-bold lg:text-2xl'>Pesonal Intersests Inspiration:</label>
        <p className='py-5 lg:text-xl'> Ipsum, esse veritatis accusamus fugit aut non voluptatum, porro quod animi perspiciatis sit commodi, totam aliquid veniam culpa deserunt quas eum. Laborum nisi at vel neque impedit odio! Nulla sapiente, ea, quidem excepturi quisquam laudantium facilis ?</p>
    </div>
    <Footer/>
    </>
  )
}

export default About;