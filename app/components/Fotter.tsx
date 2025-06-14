'use client'

const Fotter = () => {
  return (
    <section>
      <div className='bg-[var(--secondary-color)] text-white py-2 text-center flex flex-col sm:flex-row items-center justify-between px-12 '>
        <p>
          Made with ❤️ by Khaled Hamdy
          © 2025 Developer. All rights reserved.
        </p>
        <div className='flex justify-center space-x-4 mt-2' >
          <a href='http://wa.me/+201159107545' target='_blank' className='text-white text-xl'>
            <i className='fa-brands fa-whatsapp text-white'></i>
          </a>
          <a href='http://github.com/kh1aled' target='_blank' className='text-white text-xl'>
            <i className='fa-brands fa-github text-white'></i>
          </a>
          <a href='https://www.linkedin.com/in/khaled-hamdy-0595752a1/' target='_blank' className='text-white text-xl'>
            <i className='fa-brands fa-linkedin-in text-white'></i>
          </a>
          <a
            href='https://www.facebook.com/profile.php?id=61554110842664&sk=photos'
            target='_blank'
            className='text-white text-xl'
          >
            <i className='fa-brands fa-facebook-f text-white'></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Fotter
