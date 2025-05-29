import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Services = ({service}) => {
    const date =new Date();
  return (
    <div className="service-card bg-dark text-font md:p-10 xs:p-5 xl:w-[350px] lg:w-[280px] xl:h-[340px] lg:h-[300px] flex flex-col justify-start items-start rounded-md">
        <FontAwesomeIcon icon={service.icon} className='service-card-icon xl:text-7xl md:text-3xl xs:text-6xl mb-5 text-iconic' />
        <p className='text-sm text-font-light'>{date.getFullYear() - service.experience} yr+ experience of </p>
        <h1 className='xl:text-2xl lg:text-xl sm:text-2xl md:my-0 sm:mb-3 font-bold'>{service.title}</h1>
        <p className='mt-auto text-font-light xl:text-xl lg:text-sm'>{service.description}</p>
    </div>
  )
}

export default Services